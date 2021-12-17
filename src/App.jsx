import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Index from 'pages/Index';
import 'styles/globals.css';
import ProyectosIndex from 'pages/Proyectos';
import Perfil from 'pages/Perfil';
import Usuarios from 'pages/Usuarios';
import ProyectoNuevo from 'pages/ProyectoNuevo';

// import PrivateRoute from 'components/PrivateRoute';

const client = new ApolloClient({
  uri :'https://servidor-gql-ciclo4.herokuapp.com/graphql',
  cache : new InMemoryCache()
})

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Index />} />
              <Route path='/perfil' element={<Perfil />} />
              <Route path='/proyectos' element={<ProyectosIndex />} />
              <Route path='/proyectos/nuevo' element={<ProyectoNuevo/>}/>
              <Route path='/usuarios' element={<Usuarios />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>      
    </ApolloProvider>

  );
}

export default App;
