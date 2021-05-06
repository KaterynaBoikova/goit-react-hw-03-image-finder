import React from 'react';
import PropTypes from "prop-types";
import styles from './ImageGalleryItem.module.css';
import defaultImage from './defaultImage.jpeg';
const ImageGalleryItem = ({imgId, imgSmall, imgLarge, clicked})=>{
    return(
        <li key={imgId} className={styles.ImageGalleryItem} onClick={()=>clicked(imgLarge)} >
            <img src={imgSmall} alt="" className={styles.ImageGalleryItem_image}/>
        </li>
    )
}

ImageGalleryItem.defaultProps ={
    imgSmall: defaultImage,
    imgLarge: defaultImage,
};
ImageGalleryItem.propTypes={
    imgId: PropTypes.number.isRequired,
    imgSmall: PropTypes.string,
    imgLarge: PropTypes.string,
    clicked: PropTypes.func,
}

export default ImageGalleryItem;