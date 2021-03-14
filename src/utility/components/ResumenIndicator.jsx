import React from 'react'

export default function ResumenIndicator({tittle,indicator,...props}) {
    return (
        <div className="resumen-indicator">
            <div className="resumen-indicator__tittle">{tittle}</div>
            <div className="resumen-indicator__indicator">{indicator}</div>
        </div>
    )
}
