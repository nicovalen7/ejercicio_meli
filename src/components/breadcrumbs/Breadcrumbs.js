import React from 'react';
import './Breadcrumbs.scss';

export default function Breadcrumbs({categories}) {
    const mockedBreadcrumbs = ['Categoría', 'Subcategoría', 'Producto'];
    return(
        <ul className="breadcrumb-results">
            {
                categories.length > 0 ?
                    categories.map((cat, i) => (
                        categories[i + 1] ?
                            <li key={i}>{cat}</li>
                            : <li key={i}><b>{cat}</b></li>
                    ))
                    : 
                    mockedBreadcrumbs.map((cat, i) => (
                        mockedBreadcrumbs[i + 1] ?
                            <li key={i}>{cat}</li>
                            : <li key={i}><b>{cat}</b></li>
                    ))
            }
        </ul>
    );
}
