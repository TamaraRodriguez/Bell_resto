Vue.component('reserva', {
    data:function(){
        return {
            form_data:{
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                fecha: '',
                horario: '',
                select: null,
                checkbox: null,
                mensaje: '',
            },
            items: [
                'Almuerzo',
                'Cena',
            ],
            arr:[],
            errores:[],
            submitted: false,
            red: 'error',
            green: 'success',
            datos: true,
        }
    },
    computed:{
        hayErrores: function(){
            // Devuelve true en el caso de contener errores algún error
            return this.errores.length; 
        }
    },
    template:`
        <div class="container">
            <div class="row">
                <div style="display: contents">
                    <div class="col-12">
                        <v-card class="pt-3 pb-3">
                            <div class="text-center">
                                <h2 class="primary--text">Reserva</h2>
                            </div>
                        </v-card>
                    </div>
                </div>
            </div>
            <div class="row">
                <div style="display: contents">
                    <v-card class="ml-3 mr-3 p-5">
                        <form v-on:submit.prevent="guardar" class="row g-3 p-5" novalidate>
                            <div class="col-12 m-3 pl-8 pr-8 pt-10">
                                <div class="row">
                                    <div name="Nombre" class="col-md-6 m-3">
                                        <v-text-field v-model="form_data.nombre" label="Nombre *"></v-text-field>
                                    </div>
                                    <div name="Apellido" class="col-md-6 m-3">
                                        <v-text-field v-model="form_data.apellido" label="Apellido *"></v-text-field>
                                    </div>
                                    <div name="email" rules="required|email" class="col-md-6 m-3">
                                        <v-text-field v-model="form_data.email" label="E-mail *"></v-text-field>
                                    </div>
                                    <div name="telefono" rules="required|max:10" class="col-md-6 m-3">
                                        <v-text-field v-model="form_data.telefono" :counter="10" label="Teléfono *"></v-text-field>
                                    </div>
                                    <div name="fecha" class="col-md-6 m-3">
                                        <v-text-field v-model="form_data.fecha" label="Fecha de reserva *" type="date"></v-text-field>
                                    </div>
                                    <div name="horario" class="col-md-6 m-3">
                                        <v-text-field v-model="form_data.horario" label="Hora" type="time"min="13:00" max="23:00" step="3600"></v-text-field>
                                    </div>
                                    <div name="select" rules="required" class="col-md-6 m-3">
                                        <v-select v-model="form_data.select" :items="items" label="Turno" data-vv-name="select" required></v-select>
                                    </div>
                                    <div name="personas" class="col-md-6 m-3">
                                        <btn-contador></btn-contador>
                                    </div>
                                    <div rules="required" name="checkbox" class="col-md-6 m-3">
                                        <p style="font-size:0.8em" class="grey--text">¿Desea notificar alergias?</p> 
                                        <v-checkbox value="item" label="Sí" v-model="form_data.checkbox" color="primary"></v-checkbox>
                                        <p style="font-size:0.6em" class="grey--text">En caso afirmativo defina la/s alérgia/s en el mensaje</p>  
                                        <div>
                                            <p style="font-size:0.7em" class="grey--text">(*) Campos obligatorios para hacer la reserva</p>
                                        </div>
                                    </div>
                                    <div name="mensaje" class="col-md-6 m-3">
                                        <v-textarea label="Mensaje" v-model="form_data.mensaje" placeholder="Si viene con niños o tiene otra alergia dejanos tu mensaje"></v-textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="container text-center p-5 mb-5">
                                <v-btn rounded x-large color="primary" class="mr-4" type="submit" @click="guardar(form_data)">Enviar</v-btn>
                            </div>
                        </form>
                        <div v-if="submitted === true" class=" col-12 mt-5 white--text" v-bind:class="[datos ? green : red]" >
                            <div v-if="hayErrores" class="reserva pt-2 pb-6 pl-7">
                                <h3 class="mt-3 pt-3"><span>No ha sido posible realizar la reserva</span></h3>
                                <p>Compruebe los siguientes datos obligatorios</p>
                                <ul>
                                    <li v-for="x in errores">{{x}}</li>
                                </ul>
                            </div>
                            <div v-else>
                                <h3 class="mt-3 pt-7 text-center"><span>Reserva realizada con éxito</span></h3>
                                <div class="container text-center pt-5 mb-5">
                                    <p style="font-size:0.7em" class="white--text">Ya puede ver los datos de su reserva en el apartado "Mis reservas"</p>
                                    <v-btn rounded x-large color="primary" class="mr-4 mb-5" type="submit" @click="enviar">Ver Reserva</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </div>    
            </div>
        </div>`, 
    methods:{
        guardar:function(form_data){
            this.datos = false;
            this.submitted = true;
            this.errores = [];

            if (!this.form_data.nombre) {
                this.errores.push('El nombre es obligatorio.');
            }
            if(this.form_data.nombre && this.form_data.nombre.length <3) {
                this.errores.push('Nombre invalido, debe tener mas de 3 caracteres.');
            }
            if (!this.form_data.apellido) {
                this.errores.push('El apellido es obligatorio.');
            }
            if(this.form_data.apellido && this.form_data.apellido.length <3) {
                this.errores.push('Apellido invalido, debe tener mas de 3 caracteres.');
            }
            if (!this.form_data.email) {
                this.errores.push('El email es obligatorio, para disfrutar de la reserva.');
            }
            if(this.form_data.email && this.form_data.email.length <3) {
                this.errores.push('Email invalido, debe tener mas de 3 caracteres.');
            }
            if (!this.form_data.telefono) {
                this.errores.push('El telefono es obligatorio, para notificar el aviso de la reserva.');
            }
            if(this.form_data.telefono && this.form_data.telefono.length <8) {
                this.errores.push('Telefono invalido, debe tener 8 dígitos.');
            }
            if (!this.form_data.fecha) {
                this.errores.push('El fecha es obligatorio, para realizar la reserva.');
            }
            if(this.form_data.fecha && this.form_data.fecha.length <0) {
                this.errores.push('Fecha invalida.');
            }

            if(this.errores.length == 0){
                this.datos = true;
            
                form_data = Object.assign({}, form_data,)
                console.log(form_data)

                if(!localStorage.dato){
                    arr=[]
                }else{
                    arr=JSON.parse(localStorage.getItem("dato"))
                    console.log(arr)
                }
                arr.push(form_data)
                localStorage.setItem("dato",JSON.stringify(arr))
            }
        },

        enviar: function(){ 
            this.$router.push('/mis/reservas');
        },
    },
})

Vue.component('btn-contador', {
    data: function () {
        return {
            sumar: 1,
            texto1: "Mesa para",
            texto2:"personas"
        }
    },
    template: 
        `<div>
            <p style="font-size:0.8em" class="grey--text">{{texto1}} {{sumar}} {{texto2}}</p>
            <v-btn class="mr-4 col-3 primary--text" v-model="sumar" v-on:click="sumar++"> + </v-btn>
            <v-btn class="mr-4 col-3 primary--text" v-model="sumar" v-on:click="sumar--" v-if="sumar > 1"> - </v-btn>
        </div>`
})