import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users(){
    const [users, setUsers] = useState([])
    
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
        .then(res =>{ console.log(res)
        window.location.reload()})
        .catch(errr => console.log(errr))

    }

    useEffect(()=> {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <table className="table">
                <Link  to="/create" className="btn btn-success">Add Usuário</Link>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                    {
                        users.map((user) => {
                            return<tr>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.idade}</td>
                            <td>
                            <Link to = { `/update/${user._id}`} className="btn btn-success">Editar</Link>
                            <button
                             className="btn btn-danger"
                             onClick={(e) => handleDelete(user._id)}>
                                Excluir
                            </button>
                            </td>
                        </tr>})
                    }
                <tbody>


                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Users;