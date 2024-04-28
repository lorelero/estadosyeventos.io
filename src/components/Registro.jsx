
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import  Alert  from "./components/Alert"

const Registro = ({validacion,mensaje}) => {

return(
    <>
        <div className="bg-light formulario p-4 rounded-5">
            <h1 className="fs-1">Crea una cuenta</h1>
            <SocialButton
                redsocial1 = 'facebook'
                redsocial2 = 'github'
                redsocial3 = 'linkedin'
            />
            <Formulario mostrarMensaje={validacion}/>
            <Alert
                mensaje= {mensaje.msg}
                color= {mensaje.color}
            />
        </div>
    </>
    )
};

export default Registro;