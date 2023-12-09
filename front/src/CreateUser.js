import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function CreateUser(){
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [idade, setIdade] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{nome,email,idade})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))

    }

    return(
        <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
            <h2>Criar Usuário</h2>

            <div className="mb-2">
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Insira o novo Nome" className="form-control"
                onChange={(e) => setNome(e.target.value)}/>  

            </div>


            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Insira o novo Email" className="form-control"
                onChange={(e) => setEmail(e.target.value)}/>  
            </div>

            <div className="mb-2">
                <label htmlFor="">Idade</label>
                <input type="text" placeholder="Insira a nova Idade" className="form-control"
                onChange={(e) => setIdade(e.target.value)}/>  
            </div>

            <button className="btn btn-success">Criar</button>
        </form>
    </div>
    )
}

export default CreateUser;