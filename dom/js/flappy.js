const conteudo = document.querySelector('div[wm-flappy]')



const obstaculo = document.createElement('div')
obstaculo.setAttribute('id','obstaculo')
conteudo.appendChild(obstaculo)

const canoCima = document.createElement('div')
const canoBaixo = document.createElement('div')

canoCima.classList.add('cano')
canoBaixo.classList.add('cano')

obstaculo.appendChild(canoCima)
obstaculo.appendChild(canoBaixo)

obstaculo.style.left = '100%'

let obsPos = 100

function obsMove(){
        obsPos = obsPos - 0.1
        obstaculo.style.left = obsPos + '%' 
        return obsPos
}

var timer = setInterval(function() {
  obsMove()
if (obsPos < -10) {
  clearInterval(timer);
  conteudo.removeChild(obstaculo)
  }
}, 5); 


