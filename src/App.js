import React, {Component} from 'react';
import axios from 'axios';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar/Searchbar';
import Button from "./Components/Button/Button";
import Loader from "react-loader-spinner";
import Modal from "./Components/Modal/Modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const API_KEY = '21481461-72c351f82d952241527bbb852';
class App extends Component{
    state = {
        hits: [],
        search: '',
        page: 1,
        isLoading: false,
        error: null,
        showModal: false,
        largeImgUrl: '',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search) {
            this.fetchImages();
        }
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    formSubmitted=(query)=>{
        this.setState({
            search: query,
            page: 1,
            hits: [],
            error: null,
        });
    };

    fetchImages = () => {
        this.setState({ isLoading: true });

        axios
            .get(`https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(({data}) => this.setState(prevState=>({
                hits: [...prevState.hits, ...data.hits],
                page: prevState.page+1,
            })))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));

    };

    toggleModal = (imgLink) => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
            largeImgUrl: imgLink,
        }));
    };

    render() {
        const shouldRenderLoadMoreButton = this.state.hits.length > 0 && !this.state.isLoading;

        return(
            <div>
                {this.state.showModal && <Modal onClose={this.toggleModal} largeImage={this.state.largeImgUrl}/>}
                {this.state.error && <h1>Something went wrong</h1>}
                <Searchbar submitted={this.formSubmitted} />
                <ImageGallery results={this.state.hits} modalAction={this.toggleModal}/>
                {this.state.isLoading && <Loader type="ThreeDots" color="#00BFFF" height={130} width={130} />}
                {shouldRenderLoadMoreButton && (
                    <Button loadMore={this.fetchImages} />
                )}
            </div>

        )
    }
};

export default App;