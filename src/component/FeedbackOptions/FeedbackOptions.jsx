import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onHandleClick}) => {
    return options.map(option => (
        <button type="button"
        key={option}
        name={option}
        onClick={onHandleClick} >{option}</button>
    ))
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onHandleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;