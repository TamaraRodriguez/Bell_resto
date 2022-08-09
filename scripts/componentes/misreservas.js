Vue.component("mostrar", {
    data:function(){
        return {
            arr:[],
            sin_datos: ""
        }
    },
    template:`
    <div class="container">
        <div class="row">
            <div style="display: contents">
                <div class="col-12">
                    <v-card class="pt-3 pb-3">
                        <div class="text-center">
                            <h2 class="primary--text">Mis reservas</h2>
                        </div>
                    </v-card>
                </div>
            </div>
        </div>
        <transition appear enter-active-class="animate__animated animate__backInRight">
        <div class="row">
            <div style="display: contents">
                <div v-if="this.arr.length == 0" class="col-12 text-center">
                    <v-card class="mt-5 pt-6 mx-auto primary--text" align--center max-width="600" :elevation="14" style="height:4em;">
                        <p class="animate__animated animate__bounceIn animate__delay-2s animate__repeat-2">{{sin_datos}}</p> 

                    </v-card>
                    <v-card-actions class="justify-center">
                        <div class="container white--text text-center p-5 mb-5">
                          <v-btn href="#/reserva" rounded x-large color="primary">Reservar Mesa</v-btn>
                        </div>  
                    </v-card-actions>
                </div>
                <div class="col-12 lista" v-for="item in arr" :key="item.fecha" v-if="item.isTrusted != true">
                    <v-card class="mx-auto mt-5 pt-5" align--center max-width="600" :elevation="14" style="height:19em;">
                        <v-card-title class="text-center justify-center m-3">
                            <div class="text-left m-5 primary--text">
                                <h3 class="p-5 animate__animated animate__bounceIn animate__delay-2s">Datos de la reserva</h3>
                            </div> 
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <ul class="grey--text">
                                    <li><span>Nombre: </span>{{item.nombre}}</li> 
                                    <li><span>Apellido: </span>{{item.apellido}}</li> 
                                    <li><span>Email: </span>{{item.email}}</li>
                                    <li><span>Número de contacto: </span>{{item.telefono}}</li>
                                    <li><span>Fecha: </span>{{item.fecha}}</li>
                                    <li v-if="item.horario != ''"><span>Horario: </span>{{item.horario}}</li>
                                    <li v-if="item.select != null"><span>Turno: </span>{{item.select}}</li>
                                    <li v-if="item.checkbox != null"><span>Alergias: </span>Sí</li>
                                    <li v-if="item.mensaje != ''"><span>Mensaje: </span>{{item.mensaje}}</li>
                                </ul>
                            </div>
                        </v-card-text>
                        <v-card-actions class="text-center justify-center pb-5 m-3">
                            <div class="center">
                                <v-btn rounded class="borrar primary--text" @click="borrar(item)">Cancelar reserva</v-btn>
                            </div>  
                        </v-card-actions>
                    </v-card>
                </div> 
            </div>
        </div>
        </transition>     
    </div>`,

    mounted:function(){
        console.log("se monto")
        this.ver_local();
    },
    
    methods:{
        ver_local:function(){
            if(localStorage.dato){
                var dame=JSON.parse(localStorage.getItem("dato"))   
                this.arr = dame
            }
            if(this.arr.length == 0){
                this.sin_datos ="Aún no ha realizado ninguna reserva"
            }
        },

        borrar:function(item){
            arr= JSON.parse(localStorage.getItem ("dato"))
            for (var i=0; i < arr.length; i++){
                if (arr[i].fecha == item.fecha ) {
                    var rta=confirm("¿Quieres cancelar tu reserva " + arr[i].nombre + "?")
                    if (rta==true){
                        arr.splice(i, 1);
                    }   
                }
            }
            localStorage.setItem("dato", JSON.stringify(arr))
            this.ver_local(); 
        }
    },  
})