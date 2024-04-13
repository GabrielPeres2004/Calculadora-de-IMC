export const modal = {
    Wrapper: document.querySelector('.modal-wrapper'),
    Message: document.querySelector('.modal h2'),
    ButtonClose: document.querySelector('.modal button'),

    open(){
        modal.Wrapper.classList.add('open')
    },

    close(){
        modal.Wrapper.classList.remove('open')
    }

}

modal.ButtonClose.onclick = function () {
    modal.close()
}


window.addEventListener('keydown', pressTheKeyToClose)

function pressTheKeyToClose(event){
    if(event.key === 'Escape')
{
    modal.close()   
}
}

