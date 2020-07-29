import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'

export default function Register() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [city,setCity] = useState('')
  const [uf,setUF] = useState('')
  const history = useHistory()

  async function handleRegister(event) {
    event.preventDefault()

    const data = {name,email,phone,city,uf}

    try {
      const response = await api.post('ngos',data)

      alert(`Se ID de acesso: ${response.data.id}`)
      history.push('/')
    }
    catch(e) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  return (
    <div className="register-scope">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos de sua ONG.</p>
          
          <Link className="link" to="/">
            <FiArrowLeft size="16" color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG"
            value={name} onChange={e => setName(e.target.value)} />

          <input type="email" placeholder="E-mail"
            value={email} onChange={e => setEmail(e.target.value)} />

          <input placeholder="WhatsApp"
            value={phone} onChange={e => setPhone(e.target.value)} />

          <div className="location">
            <input placeholder="Cidade"
              value={city} onChange={e => setCity(e.target.value)} />

            <input style={{width:80}} placeholder="UF"
              value={uf} onChange={e => setUF(e.target.value)} />
          </div>

          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
