import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';

function CustomDataTable({ title, data, columns }) {
    // Estado para el texto de búsqueda
    const [filterText, setFilterText] = useState('');

    // Filtrado de datos basado en el texto de búsqueda
    const filteredItems = useMemo(() => {
        return data.filter(item => {
            // Asumimos que quieres buscar en una columna específica o múltiples columnas
            // Aquí buscamos en la columna 'title' por simplicidad
            return item.title.toLowerCase().includes(filterText.toLowerCase());
        });
    }, [filterText, data]);

    // Manejador para cambios en el campo de búsqueda
    const handleFilterChange = (event) => {
        setFilterText(event.target.value);
    };

    return (
        <div className='shadow p-3 mb-2 pt-0 bg-white rounded' style={{ overflow: 'visible' }}>
            <div className="header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                overflow: 'visible'  // Asegúrate de que el overflow no esté oculto
            }}>
                <h2 style={{
                    maxWidth: '100%',  // Asegura que el título tenga espacio para expandirse
                    whiteSpace: 'normal'  // Permite que el texto se ajuste según sea necesario
                }}>{title}</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={handleFilterChange}
                    className="form-control"
                    style={{ width: '200px' }}
                />
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover
                pointerOnHover
            />
        </div>
    );
}

export default CustomDataTable;
