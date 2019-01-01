export class Footer {
    constructor () {
        this.oGrupoLinkedin = document.querySelector('#linkedin .fa-stack')
        this.oCirculoLinkedin = document.querySelector('#linkedin .fa-circle')
        this.oIconoLinkedin = document.querySelector('#linkedin .fa-linkedin-in')

        this.oGrupoInstagram = document.querySelector('#instagram .fa-stack')
        this.oCirculoInstagram = document.querySelector('#instagram .fa-circle')
        this.oIconoInstagram = document.querySelector('#instagram .fa-instagram')

        this.oGrupoGithub = document.querySelector('#github .fa-stack')
        this.oCirculoGithub = document.querySelector('#github .fa-circle')
        this.oIconoGithub = document.querySelector('#github .fa-github')

        this.oGrupoLinkedin.addEventListener('mouseover', this.estilosOver.bind(this, this.oCirculoLinkedin, this.oIconoLinkedin))
        this.oGrupoLinkedin.addEventListener('mouseout', this.estilosOut.bind(this, this.oCirculoLinkedin, this.oIconoLinkedin))

        this.oGrupoInstagram.addEventListener('mouseover', this.estilosOver.bind(this, this.oCirculoInstagram, this.oIconoInstagram))
        this.oGrupoInstagram.addEventListener('mouseout', this.estilosOut.bind(this, this.oCirculoInstagram, this.oIconoInstagram))

        this.oGrupoGithub.addEventListener('mouseover', this.estilosOver.bind(this, this.oCirculoGithub, this.oIconoGithub))
        this.oGrupoGithub.addEventListener('mouseout', this.estilosOut.bind(this, this.oCirculoGithub, this.oIconoGithub))

    }

    estilosOver( circulo, icono, objetoEvento ){
        objetoEvento.preventDefault()
        console.log('pasa por estilos Over')
        circulo.classList.remove('fas')
        circulo.classList.add('far')
        icono.classList.remove('fa-inverse')
    }
    
    estilosOut( circulo, icono, objetoEvento){
        objetoEvento.preventDefault()
        console.log('pasa por estilos Out')
        circulo.classList.add('fas')
        circulo.classList.remove('far')
        icono.classList.add('fa-inverse')
    }
}