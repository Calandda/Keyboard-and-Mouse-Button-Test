class mainObj{
    constructor(){
        let currentPress = '';
        const body = document.querySelector('body');
        this.eventListenerKeyboard(body);
    }
    buttonPressActivate(){
        
    }
    eventListenerKeyboard(body){
        body.addEventListener(('keydown'),(e)=>{
            console.log(e);
        });
    }
}

const main = new mainObj();