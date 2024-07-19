import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {

    const { login } = useContext( AuthContext );

    const [ name, setName ] = useState('');
    const [ error, setError ] = useState(false);

    const navigate = useNavigate();

    const onChange = (e) => {
        setName(e.target.value);
    }

    const onLogin = (e) => {
        e.preventDefault();

        if ( name == 0 ) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        } else {
            login( name );

            const lastPath = localStorage.getItem('lastPath') || '/';

            navigate( lastPath, {
                replace: true
            })
        }
    }

    return (
        <>
            <h1 className='mt-8 mb-8 text-center text-white font-extrabold text-5xl'>MoviesApp</h1>

            <hr/>

            <div className="mt-8 text-center text-white h-450">
                <h3 className='font-bold text-lg mb-8'>Por favor, introduzca su nombre para acceder a MoviesApp</h3>
                <form className='flex flex-col flex-wrap items-center gap-8' onSubmit={ e => onLogin(e) }>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        <p className=''>Nombre:</p>
                        <input className="ml-2 px-4 py-2 border rounded text-black font-light focus-within:no-underline focus-within:text-black outline-purple-800 shadow-lg" type="text" placeholder="Nombre" onChange={ onChange } value={ name }  />
                    </div>
                    <button className='bg-indigo-900 pt-2 pb-2 pr-5 pl-5 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80' >Log In</button>
                </form>
                { error && <p className='mt-4 font-bold'>❌ El campo nombre es requerido!</p>  }
            </div>
        </>
    )
}

export default LoginPage