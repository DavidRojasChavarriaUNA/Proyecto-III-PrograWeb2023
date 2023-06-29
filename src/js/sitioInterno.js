import '../css/siteInterno.css'
import {
    format as format_Date,
    parse as parse_Date
} from 'date-fns';

const urlBase =
    import.meta.env.VITE_BASE_URL;

const None = -1;
const CodeSuccess = 0;
const CodeUnautorized = 401;
const CodeExpired = 440;
const CodeNotFound = 404;
const CodeError = 99;
const EstadoEnProceso = 1;
const EstadoActivo = 2;
const EstadoInactivo = 3;
const OpcionesPorDefecto = 2;

export const Codigos = {
    None,
    CodeSuccess,
    CodeUnautorized,
    CodeExpired,
    CodeNotFound,
    CodeError,
    EstadoEnProceso,
    EstadoActivo,
    EstadoInactivo,
    OpcionesPorDefecto
};

export const obtenerFechaConFormato = (fechaString) => {
    if (!fechaString)
        return '';
    const fecha = new Date(fechaString);
    return format_Date(fecha, 'yyyy-MM-dd HH:mm').replace(' ', 'T');
}

export const obtenerFechaDesdeFormato = (fechaString) => {
    if (!fechaString)
        return '';
    fechaString = fechaString.replace('T', ' ');
    return parse_Date(fechaString, 'yyyy-MM-dd HH:mm', new Date());
}

export const _obtenerUsuarioAutenticado = async (idUsuario) => {
    try {
        const respuestaHttp = await fetch(`${urlBase}/seguridad/${idUsuario}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const datosUsuario = await respuestaHttp.json();
        return datosUsuario;
    } catch (error) {
        console.log(error);
        return {
            Code: Codigos.CodeError,
            message: "Ocurrió un error al obtener las votaciones pendientes del usuario"
        }
    }
}