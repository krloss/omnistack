import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {FiPower} from 'react-icons/fi'

import api from '../../services/api'
import IncidentList from '../../components/IncidentList'

import './styles.css'
import logo from '../../assets/logo.svg'

export default function Profile({history}) {
  const [incidents,setIncidents] = useState([])
  const ngoId = localStorage.getItem('ngoId')
  const ngoName = localStorage.getItem('ngoName')

  useEffect(() => {
    api.get('profile',{
      headers:{Authorization:ngoId}
    }).then(res => setIncidents(res.data))
  },[ngoId])

  async function deleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`,{
        headers:{Authorization:ngoId}
      })

      setIncidents(incidents.filter(i => i.id !== id))
    }
    catch(e) {
      alert('Falha no login, tente novamente.')
    }

    console.log(`>>> ${id}`)
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-scope">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, {ngoName}</span>

        <Link className="btn" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <FiPower size="18" color="#E02041" />
        </button>
      </header>

      <IncidentList incidents={incidents} onDelete={deleteIncident}>
        <h1>Casos cadastrados</h1>
      </IncidentList>
    </div>
  )
}
