import React from "react";
import PropTypes from 'prop-types';

const ProfileImageDisplay = ({ src, alt, width, height }) => {
    return (
        <div className="image-display-container">
            <img src={src} alt={alt} loading="lazy"/>
        </div>
    );
};

ProfileImageDisplay.propType = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default ProfileImageDisplay;