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
            seleccion: ''
        }
        
        this.oFormContacto.addEventListener('submit', this.leerContacto.bind(this)) 
        this.oSelectOtros.addEventListener('click', this.mostrarInputExtra.bind(this)) 

        

    }
    mostrarInputExtra(){

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
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value
        }
        console.dir(this.oData)
        
    }

    getRadio(aNodos) {
        let value
        aNodos.forEach(
            (item) => {if(item.checked) {value = item.value}}
        )
        return value
    }
    
    validar() {
        console.log('pasa por validar')
        this.validarNombre()
        this.validarEmail()
        this.validarTextarea(10) 
        this.validarCheckbox()
        this.validarSelect()
        return true
    }
    validarNombre(){
        console.log('pasa por validar nombre')
        if ( this.oInputNombre.value == null || this.oInputNombre.value.length == 0 || /^\s+$/.test(this.oInputNombre.value) ) {
            this.oTooltipText.innerHTML = 'El nombre es obligatorio'
            this.oTooltip.classList.add('visible')
            return false
        } else {
            return true
        }
    }
    validarEmail() {
        console.log('pasa por validar email')
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
         if ( !(regexEmail.test(this.oInputEmail.value)) ) {
            this.oTooltipText.innerHTML = 'El email es obligatorio'
            this.oTooltip.classList.add('visible')
            return false
        } else {
            return true
        }
    }
    validarTelefono(){
        console.log('pasa por validar telefono')
        let telefono = this.oInputTelefono.value
        if ( !(/^([0-9])*$/.test(telefono)) ){
            console.log( typeof telefono)
            this.oTooltipText.innerHTML = 'El teléfono tiene que tener 9 dígitos'
            this.oTooltip.classList.add('visible')
            return false
        } else {
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
    validarCheckbox(){
        console.log('pasa por validar checkbox')
        if (!this.oCheckCondiciones.checked){
            this.oTooltipText.innerHTML = 'Tienes que acceptar las condiciones antes de continuar'
            this.oTooltip.classList.add('visible')
            return false
        } else {
            return true
        }
    }
    validarRadio(){
        console.log('pasa por validar radio')
        if (!this.getRadio(this.oRadioOpciones)){
            this.oTooltipText.innerHTML = 'Tienes que seleccionar una opción antes de continuar'
            this.oTooltip.classList.add('visible')
            return false
        } else {
            return true
        }
    }
    validarSelect(){
        console.log('pasa por validar select')
        if (!this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value){
            this.oTooltipText.innerHTML = 'Tienes que seleccionar una opción antes de continuar'
            this.oTooltip.classList.add('visible')
            return false
        } else {
            return true
        }
    }
}
