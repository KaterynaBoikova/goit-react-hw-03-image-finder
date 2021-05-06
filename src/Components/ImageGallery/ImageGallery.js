import React from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({results, modalAction})=>{
    return(
            <ul className={styles.ImageGallery}>
                {results.map((result)=>
                    <ImageGalleryItem
                        clicked={modalAction}
                        imgId={result.id}
                        imgSmall={result.webformatURL}
                        imgLarge={result.largeImageURL} />
                )}
            </ul>
        )
};
ImageGallery.propTypes={
    results: PropTypes.arrayOf(PropTypes.object),
    modalAction: PropTypes.func,
}
export default ImageGallery;