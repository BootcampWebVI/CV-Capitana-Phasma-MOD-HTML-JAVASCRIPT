import { FormContacto} from './form-contacto.js'
import { Menu } from './menu.js'
import { Footer } from './footer.js'

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
 *  - la clase Footer, responsable de los estilos de los botones del footer
 * 
 */

export class Index {
    constructor() {
        // elementos del DOM
        this.oMenus = new Menu()
        this.oFormContact = new FormContacto()
        this.oFooter = new Footer()
    }
}

