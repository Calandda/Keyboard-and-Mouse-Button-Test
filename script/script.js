class mainObj{
    constructor(){
        let currentPress = '';
        const pLatestKeyPress = '';
        this.querySelectorAssign();
        this.eventListenerAll();
    }
    buttonPressActivate(){
        
    }
    querySelectorAssign(){
        this.pLatestKeyPress = document.querySelector('.pLatestKeyPress');
    }
    eventListenerAll(){
        const body = document.querySelector('body');

        this.eventListenerKeyboard(body);
        this.eventListenerMouse(body);
    }
    getTime(){
        return new Date().toLocaleTimeString();
    }
    eventListenerKeyboard(elementTag){
        elementTag.addEventListener(('keydown'),(e)=>{
            this.currentPress = e.key;
            this.pLatestKeyPress.textContent = e.key;
        });
    }
    eventListenerMouse(elementTag){
        elementTag.addEventListener(('mousedown'),(e)=>{
            this.currentPress = e.button;
        })
    }
}

const main = new mainObj();     