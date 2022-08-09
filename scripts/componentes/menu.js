Vue.component('galeria', {
	template:
	    `<div class="container">
	    	<div class="row">
	            <div style="display: contents">
		            <div class="col-12">
                        <v-card class="pt-3 pb-3">
                            <div class="text-center">
                                <h2 class="primary--text">Menú</h2>
                            </div>
                        </v-card>
                    </div>
	            </div>
        	</div>
        	<transition appear enter-active-class="animate__animated animate__backInRight">
			<div class="row">
				<div style="display: contents">
					<div class="col-12 col-sm-6" v-for="plato in platosfav" v-bind:key="plato.id">
						<v-card class="mt-5" align--center max-width="600" :elevation="14">
							<v-img height="200" :src="plato.src"></v-img>
							<v-card-title>{{plato.titulo}}</v-card-title>
							<v-card-text class="pl-0">
      							<v-row align="center" class="mx-0">
      								<ul class="pl-4">
      									<li style="list-style:none">
      									<v-rating :value="plato.value" color="amber" dense half-increments readonly size="14"></v-rating>
      									</li>
        								<li style="list-style:none; font-weight: 800;">$ {{plato.precio}}</li>
        								<li style="list-style:none" class="mt-1">{{plato.descripcion}}</li>
        							</ul>
      							</v-row>
      						</v-card-text>
      					</v-card>
      				</div>
      			</div>
      		</div>
			</transition>
		</div>`,

	data:function(){
		return {
			platosfav: [
				{ id: 1, titulo: 'Pizza Muzzarella', src: 'assets/img/menu/muzzarella.jpg', descripcion: 'Base de pan de trigo con salsa de tomate, muzzarella, olivas verdes y moradas.', precio: 650, value: 5, },
				{ id: 2, titulo: 'Pizza Especial', src: 'assets/img/menu/especial.jpg', descripcion: 'Salsa de tomate, morrones rojos, queso muzzarella, jamón cocido y olivas verdes.', precio: 680, value: 4, },
				{ id: 3, titulo: 'Gnocchi de Papa', src: 'assets/img/menu/gnocchi.jpg', descripcion: 'Gnocchi de papa con salsa de tomate, receta original de la casa.', precio: 850, value: 3.5, },
				{ id: 4, titulo: 'Spaghetti al Huevo', src: 'assets/img/menu/spaghetti.jpg', descripcion: 'Spaghetti al huevo con salsa de tomate, receta autentica de Bell Resto.', precio: 780, value: 4.5, },
				{ id: 5, titulo: 'Sorrentinos Genoveses', src: 'assets/img/menu/sorrentinos.jpg', descripcion: 'Sorrentinos de espinaca con el verdadero pesto genovese.', precio: 890, value: 4, },
				{ id: 6, titulo: 'Milanesa Napolitana', src: 'assets/img/menu/milanesa.jpg', descripcion: 'Milanesa napolitana con papas cortas finas.', precio: 550, value: 5, },
				{ id: 7, titulo: 'Milanesa Con Puré', src: 'assets/img/menu/milanesa-pure.jpg', descripcion: 'Milanesa napolitana con puré de papas o calabaza.', precio: 500, value: 4, },
				{ id: 8, titulo: 'Filet de Merluza', src: 'assets/img/menu/filet.jpg', descripcion: 'Filet de merluza a la romana con finas hierbas.', precio: 690, value: 3, },
				{ id: 9, titulo: 'Trucha a la Manteca de Hierbas', src: 'assets/img/menu/pescado.jpg', descripcion: 'Trucha a la manteca cubierto de finas hierbas.', precio: 1200, value: 5, },
				{ id: 10, titulo: 'Bife de Chorizo', src: 'assets/img/menu/bife.jpg', descripcion: 'Bife de Chorizo, a punto y con sabor argentino.', precio: 980, value: 3.2, },
			],
		}
	}
});
