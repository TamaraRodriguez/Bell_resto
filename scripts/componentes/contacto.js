Vue.component('contacto', {
	template: 
		`<div class="container">
            <div class="row">
                <div style="display: contents">
                    <div class="col-12">
                        <v-card class="pt-3 pb-3">
                            <div class="text-center">
                                <h2 class="primary--text">Contacte con nosotros</h2>
                            </div>
                        </v-card>
                    </div>
                </div>
            </div>
            <transition appear enter-active-class="animate__animated animate__backInRight">
            <div class="row"> 
                <div style="display: contents">
                    <div class="col-12">
                        <v-card class="pt-3 pb-3">
                            <div class="text-center">
                                <p class="mb-5">Horario de atención:</p>
                                <p class="mb-0 grey--text">Lunes cerrado</p>
                                <p class="grey--text">Martes a Domingo: 7:00 a.m. - 00:00 p.m.</p>
                            </div>
                        </v-card>
                    </div>
                    <div class="col-12 col-sm-6 text-center">
                        <v-card class="mt-5 pt-5 pb-4" align--center max-width="600" :elevation="14" style="height:7em;">    
                            <v-list-item-action>
                        		<v-icon>mdi-phone</v-icon>
                      		</v-list-item-action>
                            <div><p>+54 (11) 123-4567</p></div>
                        </v-card>
                    </div>
                    <div class="col-12 col-sm-6 text-center">
                        <v-card class="mt-5 pt-5 pb-4" align--center max-width="600" :elevation="14" style="height:7em;">
                            <v-list-item-action>
                                <v-icon>mdi-email</v-icon>
                            </v-list-item-action>
                            <p class="d-block" href="mailto:contacto@bellresto.com">contacto@bellresto.com</p>
                        </v-card>
                    </div>
                </div>
            </div>
            </transition>
		</div>`,
});