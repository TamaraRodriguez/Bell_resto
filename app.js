let componentinicio = { template:`<div class="title"><inicio></inicio></div>` }
let componentmenu = { template:`<div class="title"><galeria></galeria></div>` }
let componentreserva = { template:`<div class="title"><reserva></reserva></div>` } 
let componentmostrar = { template:`<div class="title"><mostrar></mostrar></div>` } 
let componentcontacto = { template:`<div class="title"><contacto></contacto></div>` }

let router = new VueRouter({
  routes: [
    { path: '/home', name: 'Home', component: componentinicio, },
    { path: '/menu', name: 'Menú', component: componentmenu, },
    { path: '/reserva', name: 'Reserva', component: componentreserva, },
    { path: '/mis/reservas', name: 'Mis Reservas', component: componentmostrar, },
    { path: '/contacto', name: 'Contacto', component: componentcontacto, },
    { path: '*', redirect: '/home' }
  ]
})

new Vue({
  el: '#app',
  router,
  vuetify: 
    new Vuetify({
      theme: {
        themes: {
          light: {
            primary: "#c69c6d",
            secondary: "#03a9f4", //celeste
            accent: "#ff9800", //naranja
            error: "#f44336", //rojo
            warning: "#ffeb3b", //amarillo
            info: "#00bcd4", //celeste turquesa
            success: "#4caf50" //verde
            },
          // theme: { disable: true },
        }
      }
    }),

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-instagram'
    ],
    items:[
      { titulo: 'Inicio', icono: 'home', path:'/home' },
      { titulo: 'Menú', icono: 'silverware-fork-knife', path:'/menu' },
      { titulo: 'Reserva', icono: 'calendar-edit', path:'/reserva' },
      { titulo: 'Mis Reservas', icono: 'calendar-check', path:'/mis/reservas' },
      { titulo: 'Contacto', icono: 'phone', path:'/contacto' },
    ],
    drawer: null,
  }),

  props: {
    source: String,
  },
})