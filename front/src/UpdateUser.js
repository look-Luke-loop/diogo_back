import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

function UpdateUser(){
    const {id} = useParams()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [idade, setIdade] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3001/getUser/' + id)
        .then(result =>{ console.log(result)
        setNome(result.data.nome)
        setEmail(result.data.email)
        setIdade(result.data.idade)
        })
        .catch(err => console.log(err))

    },[])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/" + id, {nome,email,idade})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Editar Usuário</h2>
                    <div className="mb-2">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Insira o novo Nome" className="form-control"
                        value={nome}  onChange={(e) => setNome(e.target.value)}/>  
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Insira o novo Email" className="form-control"
                        value={email}  onChange={(e) => setEmail(e.target.value)}/>  
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Idade</label>
                        <input type="text" placeholder="Insira a nova Idade" className="form-control"
                        value={idade}  onChange={(e) => setIdade(e.target.value)}/>  
                    </div>

                    <button className="btn btn-success">Editar</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;