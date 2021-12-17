import React, {useEffect} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { PROYECTOS } from '../../src/graphql/proyectos/queries';
import { Link } from 'react-router-dom';
import 'styles/tabla.css';


const ProyectosIndex = () => {
  const { data, error, loading } = useQuery(PROYECTOS);
  

  return( 
    <div>
      <div className='flex flex-col mt-40 -ml-48 justify-between'>
        <span className='text-white text-center justify-items-center text-xl'>
          Proyectos inscritos en la plataforma 
          <Link to={'/proyectos/nuevo'}>
        <i className='fas fa-plus ml-4'/> 
        </Link>        
        </span>
        
      </div>
  <div className="contenedor ml-96 h-96 w-96">
    
    <table className='tabla'>
      <thead>
        <tr>
          <th>
            Nombre 
          </th>
          <th>
            Detalles
          </th>
          <th>
            Fecha inicio
          </th>
          <th>
            Fecha Fin
          </th>
          <th>
            Acciones
          </th>
      </tr>
      </thead>

     {data&& 
    data.Proyectos.map((proyecto)=>{
      return(
      <div>
      {proyecto.nombre}
      </div>
      )
    })} 
    </table>
    

  </div>
  </div>);

};

export default ProyectosIndex;
