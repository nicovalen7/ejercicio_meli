import React from 'react';
import './Breadcrumbs.scss';

export default function Breadcrumbs() {
    return(
        <ul className="breadcrumb-results">
            <li>Categoría</li>
            <li>Subcategoría</li>
            <li><b>Producto</b></li>
        </ul>
    );
}
