import {modal} from './modal.js'
import { alertError } from './Alert-Error.js'
import { calculateIMC , IsNotANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()



form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightORheightIsNotNumber = IsNotANumber(weight) || IsNotANumber(height)

    if(weightORheightIsNotNumber){
        alertError.open()
        return
    } 

    alertError.close()
    const result = calculateIMC(weight, height)

    resultMessage(result)
    pressTheKeyToOpen(event)

}

function resultMessage(result){
    const message = `Seu IMC é de ${result}`
    modal.Message.innerText = message
    modal.open()
}

function pressTheKeyToOpen(event){
    if(event.key === 'Enter'){
    modal.open()
}
}



