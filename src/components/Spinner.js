import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-container" aria-label="Loading">
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;
