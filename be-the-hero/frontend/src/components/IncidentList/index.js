import React from 'react'
import {FiTrash2} from 'react-icons/fi'

import './styles.css'

export default function IncidentList({children,incidents,onDelete}) {
  const currencyFormat = Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'})

  return (
    <>
      {children}

      <ul className="incident-list">
        {incidents.map(it => (
          <li key={it.id}>
            <strong>CASO:</strong>
            <p>{it.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{it.description}</p>

            <strong>VALOR:</strong>
            <p>{currencyFormat.format(it.value)}</p>

            <button onClick={() => onDelete(it.id)}>
              <FiTrash2 size="20" color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
