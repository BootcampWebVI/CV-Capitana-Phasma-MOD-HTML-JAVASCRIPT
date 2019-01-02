export class FormContacto {
    constructor() {
        // elementos del DOM
        this.oFormContacto =  document.querySelector('#formulario')
        this.oInputNombre = document.querySelector('#nombre')
        this.oInputEmail = document.querySelector('#email')
        this.oInputTelefono = document.querySelector('#telefono')
        this.oTextoMensaje = document.querySelector('#mensaje')
        this.oCheckCondiciones = document.querySelector('#condiciones')
        this.oRadioOpciones = document.querySelectorAll('[name=opciones]')
        this.oSelectSeleccion = document.querySelector('#seleccion')
        this.oTooltip = document.querySelector('#tooltip')
        this.oTooltipText = document.querySelector('#tooltip-text')
        this.oSelectOtros = document.querySelector('#otros')
        this.oAgradecer = document.querySelector('#agradecer')
        this.oAgradecerText = document.querySelector('#agradecer-text')
        this.oEnviar = document.querySelector('#enviar')
        
        this.oData = {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: '',
            condiciones: '',
            opciones: '',
            seleccion: '',
            otros: ''
        }
        
        this.oFormContacto.addEventListener('submit', this.leerContacto.bind(this)) 
        this.oSelectSeleccion.addEventListener('change', this.mostrarInputExtra.bind(this)) 
        this.oTextoMensaje.addEventListener('change', this.validarTextarea.bind(this)) 
        this.oEnviar.addEventListener('mouseout', this.eliminarDisolver.bind(this)) 

    }
    
    leerContacto(objetoEvento) {
        console.log('pasa por leerContacto')
        objetoEvento.preventDefault()
        if (this.validar()) {
            this.guardarDatos()
            this.agradecerEnvio()
            console.log('Pasa por guardar datos: ', this.oData)
        }
    }

    guardarDatos() {
        this.oData = {
            nombre:  this.oInputNombre.value,
            email: this.oInputEmail.value,
            telefono: this.oInputTelefono.value,
            mensaje: this.oTextoMensaje.value,
            condiciones: this.oCheckCondiciones.checked,
            opciones: this.getRadio(this.oRadioOpciones),
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value,
            otros: this.oSelectOtros.value
        }
    }
    getRadio(aNodos) {
        let value
        aNodos.forEach(
            (item) => {if(item.checked) {value = item.value}}
        )
        return value
    }
    
    validar() {
        if (this.validarTextarea()){
            this.oTooltip.classList.remove('visible')
            return true
        }
    }
   
    validarTextarea(){
        console.log('pasa por validar textarea')
        let palabrasMensaje = this.oTextoMensaje.value
        let arrayPalabras = palabrasMensaje.split(" ")
        let numeroPalabras = arrayPalabras.length
        let maxNumeroPalabras = 10
        if (numeroPalabras > maxNumeroPalabras){
            this.oTooltipText.setAttribute( 'title', 'El mensaje no puede tener más de 10 palabras')
            this.oTooltip.classList.add('visible')
            console.log('longitud array palabras: ', numeroPalabras)
            return false
        } else {
            this.oTooltip.classList.remove('visible')
            return true
        }
    }
    
    mostrarInputExtra(evento){
        console.log('Estoy en mostrarInputExtra: ',evento.target.value )
        if( evento.target.value == 'otros'){
            this.oSelectOtros.classList.add('visible')
            console.log('Estoy en otros')
        }
    }

    agradecerEnvio(){
        console.log('pasa por agradecer')
        this.oAgradecer.classList.remove('visible', 'disolver')
        this.oAgradecerText.setAttribute( 'title', 'Gracias por unirte a mi red de malvados contactos. Espero que hayas leído mis condiciones.')
        this.oAgradecer.classList.add('visible', 'disolver')
        this.oAgradecer.classList.remove('ya')
    }
    eliminarDisolver(){
        console.log('pasa por eliminarDisolver')
        this.oAgradecer.classList.add('ya')
    }
}
