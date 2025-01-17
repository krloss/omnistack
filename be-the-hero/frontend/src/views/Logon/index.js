import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'
import heroes from '../../assets/heroes.png'

export default function Logon({history}) {
  const [id,setId] = useState('')

  async function handleLogin(event) {
    event.preventDefault()

    try {
      const {data} = await api.post('sessions',{id})

      localStorage.setItem('ngoId',id)
      localStorage.setItem('ngoName',data.name)
      history.push('/profile')
    }
    catch(e) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="logon-scope">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input placeholder="Seu ID"
            value={id} onChange={e => setId(e.target.value)} />
          
          <button type="submit" className="btn">Entrar</button>
          <Link className="link" to="/register">
            <FiLogIn size="16" color="#E02041" />
            Não tenho cadastro.
          </Link>
        </form>
      </section>

      <img src={heroes} alt="Heroes" />
    </div>
  )
}
