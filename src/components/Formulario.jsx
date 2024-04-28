import {useState} from 'react'
import { limpiar } from '../utils/limpiar'

const Formulario = ({setAlert}) => {
const [nombre, setNombre] = useState('')
const [email, setEmail] = useState('')
const [contraseña, setContraseña] = useState('')
const [confirmarContraseña, setConfirmarContraseña] = useState('')

const validarDatos = (e) => {
    e.preventDefault();
    if (nombre === '' || email === '' || contraseña === '' || confirmarContraseña === ''){
        setAlert({
            msg:'Debes llenar todos los campos',
            color:'primary'})
            

        return

    }
    else if (email !== '' && contraseña !== '' && confirmarContraseña !== ''){
        if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
            setAlerte({
                msg:'El correo no es válido',
                color:'danger'
            })
            return
        }else if(contraseña !== confirmarContraseña){
            setAlert({
                msg:'Las contraseñas no coinciden',
                color:'danger'
            })
            return
        }
    }
    setAlert({
        msg:'Registrado con éxito',
        color:'success'
    })
    setNombre('')
    setEmail('')
    setContraseña('')
    setConfirmarContraseña('')
}
return(
    <>
    
    <div className="rrss-icon">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
        <h6>O usa tu Email para registrarte</h6>
        <form className="formulario" onSubmit={validarDatos}>
            <div className="form-group">
                <label>Nombre</label>
                <input
                type="text"
                name="nombre"
                className="form-control"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                /> 
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                type="password"
                name="contraseña"
                className="form-control"
                onChange={(e) => setContraseña(e.target.value)}
                value={contraseña}  
                />
            </div>
            <div className="form-group">
                <label>Confirmar Contraseña</label>
                <input
                type="password"
                name="confirmar-contraseña"
                className="form-control"
                onChange={(e) => setConfirmarContraseña(e.target.value)}
                value={confirmarContraseña} 
                />
            </div>
            <div className="d-grid">
                <button className="btn btn-success" type="submit">Registrarse</button>
            </div>
    </form>
</>
)
}
export default Formulario;