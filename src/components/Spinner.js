/*
 * Copyright (C) 2024 Gustavo Vasconcelos
 * Este código é propriedade de Gustavo Vasconcelos e está protegido sob leis de copyright.
 * O uso não autorizado deste código é estritamente proibido.
 */

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
