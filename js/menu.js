export class Menu {
    constructor () {
        // navs
        this.oBotonAbrir = document.querySelector('#abrir')
        this.oBotonCerrar = document.querySelector('#cerrar')
        this.oMenuSuperior =  document.querySelector('#menu-superior')
        // Otros
        this.aMenuItems = document.querySelectorAll(".desplegable a")
        this.aSections = document.querySelectorAll("section")
        this.oOffsets = []
        // Manejadores de eventos
        this.oBotonAbrir.addEventListener('click', this.toggleMenu.bind(this))
        this.oBotonCerrar.addEventListener('click', this.toggleMenu.bind(this))
        this.aMenuItems.forEach(
            (item) => { item.addEventListener('click', this.activarItem.bind(this))}
        )
        window.addEventListener('scroll', this.cambioEstiloItem.bind(this), {passive:true})
       
        this.prepararNavegacion()
    }
    toggleMenu(objetoEvento) {
        console.log('Pasa por toggle')
        objetoEvento.preventDefault()
        // cambia su visibilidad
        objetoEvento.target.classList.toggle('hide')
        // cambia la visibilidad del otro icono
        if (objetoEvento.target.previousElementSibling) {
            objetoEvento.target.previousElementSibling.classList.toggle('hide')
        } else {
            objetoEvento.target.nextElementSibling.classList.toggle('hide')
        }
         // cambia la visibilidad del menu top para mobile
        this.oMenuSuperior.classList.toggle('hide')
    }
    activarItem(objetoEvento) {
        
        this.aMenuItems.forEach(
            (item) => item.classList.remove('activo')
        )
        console.log('Activando Item: ', objetoEvento.target)
        objetoEvento.target.classList.add('activo')
    }
    cambioEstiloItem () {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >=  this.oOffsets['#home'] && pageOffset < this.oOffsets['#quien-soy']) {
            menuItem = 0
        } else if (pageOffset >= this.oOffsets['#quien-soy'] && pageOffset < this.oOffsets['#estudios']) {
             menuItem = 1
        } else if (pageOffset >= this.oOffsets['#estudios'] && pageOffset < this.oOffsets['#experiencia']) {
            menuItem = 2
        } else if (pageOffset >= this.oOffsets['#experiencia'] && pageOffset < this.oOffsets['#sobre-mi']) {
            menuItem = 3
        } else if (pageOffset >= this.oOffsets['#sobre-mi'] && pageOffset < this.oOffsets['#contacto']) {
            menuItem = 4
        } else {
            menuItem = 5
        }
        this.aMenuItems.forEach(
            (item) => item.classList.remove('activo')
        )
        this.aMenuItems[menuItem].classList.add('activo')
    }
    prepararNavegacion() {
        this.aSections.forEach(
            (item) => {
                let cumulative =  this.cumulativeOffset(item);
                this.oOffsets['#'+item.id] = cumulative;
            }
        )
    }
    cumulativeOffset (elemento) {
        var top = 0;
        do {
            top += elemento.offsetTop || 0;
            elemento = elemento.offsetParent;
        } while(elemento);
        
        return top;
    };
}
