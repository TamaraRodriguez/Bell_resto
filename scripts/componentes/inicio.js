Vue.component('inicio', {
  template: 
    `<div>
      <v-layout>
        <v-flex>
          <v-card>
            <v-img src="assets/img/banner-pc.jpg" aspect-ratio="2.75"> 
              <div class="container text-center p-5 mb-5 mt-9"> 
                <h1 class="container p-5 p-3 mt-9 white--text font-weight-bold">{{h1 | mayuscula}}</h1> 
              </div>
              <v-card-actions class="justify-center">
                <div class="container text-center p-5 mb-5">
                  <v-btn href="#/reserva" rounded x-large color="primary">{{boton}}</v-btn>
                </div>  
              </v-card-actions>
            </v-img>
            <v-card-title>
              <div>
                <p class="text-white-50 mb-4">{{p2}}</p>
                <p class="text-white-50 mb-4">{{p3}}</p>
                <p class="text-white-50 mb-4">{{p4}}</p>
                <p class="text-white-50 mb-4">{{p5}}</p>
              </div>
            </v-card-title>
          </v-card>
          <v-card>
            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item v-for="(item,i) in items" :key="i">
                <v-img :src="item.src" :att="item.titulo" height="100%">
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3 white--text">
                      {{ item.titulo | mayuscula }}
                      <div class="text-center">
                        <v-btn x-large href="#/menu" rounded x-large color="primary">{{ver}}</v-btn>
                      </div>  
                    </div>
                  </v-row>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-flex>
      </v-layout>
    </div>`,

    data:function(){
    	return {
        h1:"una experiencia única para tu paladar",
        acercade: "acerca de",
        p2: "Bell Resto es un lugar íntimo en el que podes saborear a gusto y conversar de forma relajada.",
        p3: "Hacemos todo de forma casera y procuramos poner siempre un toque personal en nuestro trabajo diario, por eso somos un restaurante artesanal. Contamos con un gran equipo de profesionales dispuestos a cuidar cada detalle para que los platos sean una experiencia única en tu paladar.",
        p4: "Cocina rica, hecha con mucha ilusión, para gente que le gusta comer y disfrutar cada bocado de la vida... En Bell Resto vas a encontrar platos de carnes rojas, pastas de elaboración propia, menú veggie y postres artesanales.",
        p5: "Más de 10 años de experiencia nos avalan... ¡Te Esperamos!",
        boton:"Reservar Mesa",
        ver:"Ver Menú",
        items: [
          { id: 1, titulo: 'pescados de Mar', src: 'assets/img/slider/1.jpg', },
          { id: 2, titulo: "pizzas", src: 'assets/img/slider/2.jpg', },
          { id: 3, titulo: "pastas Italianas", src: 'assets/img/slider/3.jpg' },
          { id: 4, titulo: "carnes Rojas", src: 'assets/img/slider/4.jpg', },
          { id: 5, titulo: "platos Veggies", src: 'assets/img/slider/5.jpg', }, 
          { id: 6, titulo: "postres", src: 'assets/img/slider/6.jpg',},
        ],
      }
    }
})

Vue.filter('mayuscula', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})//filtro que se aplicará al componente 