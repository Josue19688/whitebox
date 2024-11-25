
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


export const formatearFecha = (fecha: Date) => {
    // Convierte la fecha en formato ISO y luego la ajusta al horario de Guatemala (UTC-6)
    //const fechaFormateada = parseISO(fecha);
    return format(fecha, 'dd/MM/yyyy HH:mm:ss', { locale: es });
};