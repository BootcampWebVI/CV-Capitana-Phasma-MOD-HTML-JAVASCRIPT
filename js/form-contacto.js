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

        

    }
    
    leerContacto(objetoEvento) {
        console.log('pasa por leerContacto')
        objetoEvento.preventDefault()
        if (this.validar()) {
            this.guardarDatos()
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
        if (this.validarTextarea(10)){
            return true
        }
    }
   
    validarTextarea(maxNumeroPalabras){
        console.log('pasa por validar textarea')
        let palabrasMensaje = this.oTextoMensaje.value
        let arrayPalabras = palabrasMensaje.split(" ")
        let numeroPalabras = arrayPalabras.length
        if (numeroPalabras > maxNumeroPalabras){
            this.oTooltipText.innerHTML = 'El mensaje no puede tener más de 10 palabras'
            this.oTooltip.classList.add('visible')
            console.log('longitud array palabras: ', numeroPalabras)
            return false
        } else {
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

}
