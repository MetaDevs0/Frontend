import React , {useState, useRef}from 'react'

const Perfil = () => {
    
   const [edicion, setEdicion] = useState(false) 
   const form = useRef(null)



    return (
        <div className=" flex flex-col">
            <div className="text-white text-center text-2xl -ml-20 mt-36 mb-8">
                 MI PERFIL
                 <button>
                     {edicion ? <i className="fas fa-check ml-6 text-green-400"/> :
                     <i className="fas fa-edit ml-6" onClick={()=>setEdicion(true)}/> }                
                 </button>
            </div>
            <div className="contenedor ml-96 h-96 w-96">

                {edicion ? <div className="grid grid-row-2 justify-evenly">
                    <form ref={form}>
                        <div>
                          <label className="ml-5 text-white text-lg text-center mt-40"> Nombre</label>
                          <input type="text" placeholder="Nombre" className="bg-transparent ring-transparent m-4 focus:outline-none rounded-md shadow-sm border-b-2" />  
                        </div>
                      <div>
                      <label className="ml-5 text-white text-lg text-center mt-40"> Apellido</label>
                      <input type="text" placeholder="Apellido" className="bg-transparent ring-transparent m-4 focus:outline-none rounded-md shadow-sm border-b-2" />
                      </div>
                     <div>
                     <label className="ml-5 text-white text-lg text-center mt-40"> Documento</label>
                      <input type="text" placeholder="Documento" className="bg-transparent ring-transparent m-4 focus:outline-none rounded-md shadow-sm border-b-2" /> 
                     </div>
                     <div>
                     <label className="ml-5 text-white text-lg text-center mt-40"> Correo</label>
                      <input type="email" placeholder="Correo" className="bg-transparent ring-transparent m-4 focus:outline-none rounded-md shadow-sm border-b-2" />
                     </div>
                     <div>
                     <label className="ml-5 text-white text-lg text-center mt-40"> Nueva Contraseña</label>
                      <input type="email" placeholder="password" className="bg-transparent ring-transparent m-4 focus:outline-none rounded-md shadow-sm border-b-2" />
                     </div>
                     <div>
                     <label className="ml-5 text-white text-lg text-center mt-40">Confirmar Nueva Contraseña</label>
                      <input type="email" placeholder="password" className="bg-transparent ring-transparent m-4 focus:outline-none rounded-md shadow-sm border-b-2" />
                     </div>

                       
                    </form>
                    </div>
                    : <div className='mt-10 grid grid-cols-2 justify-around '>
                        <div>
                          <span className="m-5 text-white text-lg text-center"> Nombre</span>                                      
                        </div>
                        <div>
                        <span className="m-5 text-white text-lg text-center"> Apellido</span>
                        </div>
                        <div>
                          <span className="m-5 text-white text-lg text-center"> Documento</span>   
                        </div>
                        <div>
                          <span className="m-5 text-white text-lg text-center"> Correo</span>                            
                        </div>  

                          <span className="m-5 text-white text-lg text-center"> Rol</span> 

                </div>}
                

            </div>  
        </div>
    )
}

export default Perfil
