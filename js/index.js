import { FormContacto} from './form-contacto.js'
import { Menu } from './menu.js'

/**
 * 
 * @class Index
 * 
 * Se instancia al acceder a la página index
 * Depende de:
 *  - la clase Menu para gestionar los menus, 
 *      compartidos con la otra página del sitio
 *  - la clase FormCoctacto, responsable del 
 *      formulario de contactos
 * 
 */

export class Index {
    constructor() {
        // elementos del DOM
        //this.oInputName = document.querySelector('#name')
        this.oMenus = new Menu()
        this.oFormContact = new FormContacto()
        console.log(this)
        //this.defineEventListeners()
    }
/*
    defineEventListeners() {
        this.oInputName.addEventListener('change', this.probarInput.bind(this))
        this.oInputName.addEventListener('input', this.probarInput.bind(this))
    }

    probarInput(objetoEvento) {
        if(objetoEvento.type == "change") {
            console.log('change')
            console.dir(objetoEvento.target.value)
        } else if (objetoEvento.type == "input") {
            console.log('input')
            console.dir(objetoEvento.target.value)
        }
    }
    */
}

