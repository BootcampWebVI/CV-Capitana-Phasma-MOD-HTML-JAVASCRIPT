import { Menu } from './menu.js'

/**
 * 
 * @class Condiciones
 * 
 * Se instancia al acceder a la página index
 * Depende de la clase Menu para gestionar los menus, 
 * comportidos con la otra página del sitio
 * 
 */

export class Condiciones {
    constructor() {
        this.oMenus = new Menu()
    }
}
