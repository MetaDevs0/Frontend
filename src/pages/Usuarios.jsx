import React from "react"
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import { useQuery } from '@apollo/client';

const Usuarios = () => {
    const { data, error, loading } = useQuery(GET_USUARIOS);
    return (
        <div>
            {data&&
            data.Usuarios.map((p)=>{
                return(
                <div>{p.nombre}</div>
                )
            })}
        </div>
    )
}

export default Usuarios
