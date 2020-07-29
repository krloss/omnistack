import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'

export default function NewIncident({history}) {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [value,setValue] = useState('')
  const ngoId = localStorage.getItem('ngoId')

  async function handleNewIncident(event) {
    event.preventDefault()

    const data = {title,description,value}
    
    try {
      await api.post('incidents',data,{
        headers:{Authorization:ngoId}
      })

      history.push('/profile')
    }
    catch(e) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-scope">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente parar encontrar um herói para resolver isso.</p>

          <Link className="link" to="/profile">
            <FiArrowLeft size="16" color="#E02042" />
            Voltar para home
          </Link>
        </section>
        
        <form onSubmit={handleNewIncident}>
          <input placeholder="Título"
            value={title} onChange={e => setTitle(e.target.value)} />

          <textarea placeholder="Descrição"
            value={description} onChange={e => setDescription(e.target.value)} />

          <input placeholder="Valor em reais"
            value={value} onChange={e => setValue(e.target.value)} />
          
          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
