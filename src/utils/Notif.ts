import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Importa los estilos

// Configuración personalizada de Notyf
export const notyf = new Notyf({
  duration: 3000, // Duración en milisegundos
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'primary',
      background: '#7367F0',
      icon: { className: 'icon-[tabler--circle-check] !text-primary', tagName: 'i' },
      duration: 3000,
      dismissible: true
    },
    {
      type: 'warning',
      background: '#FCAA1D',
      icon: { className: 'icon-[tabler--alert-triangle] !text-warning', tagName: 'i' },
      duration: 3000,
      dismissible: true
    },
  ],
});



          
         