import React, {Component} from 'react';
import styles from './Searchbar.module.css';
class Searchbar extends Component{
    state = {
        query: '',
}
onFormSubmit=(event)=>{
        event.preventDefault();
    this.props.submitted(this.state.query);
    this.setState({ query: '' });
}

    onInputChange = e => {
        this.setState({ query: e.currentTarget.value });
    };


    render() {
        return(
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.onFormSubmit}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span className={styles.SearchForm_button_label}>Search</span>
                    </button>

                    <input
                        className={styles.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.onInputChange}
                        value={this.state.query}
                    />
                </form>
            </header>
        )
    }
}
 export default Searchbar;
