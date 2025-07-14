class mainObj{
    constructor(){
        const bodyTag = document.querySelector('body');
        this.currentPress = [];
        this.buttonHistoryRaw = [];
        this.buttonHistoryClean = [];
        this.pLatestKeyPress = document.querySelector('.pLatestKeyPress');

        bodyTag.addEventListener(('keydown'),(e)=>{
            this.currentPress = this.inputDown(e,this.currentPress, this.getTime());
        });
        bodyTag.addEventListener(('keyup'),(e)=>{
            //this.buttonHistoryRaw.push(this.eventListenerFunctionPress(e));
        });   
         elementTag.addEventListener(('mousedown'),(e)=>{
        });
        elementTag.addEventListener(('mouseup'), (e)=>{
        });
    }
    getTime(){
        const options = {hour12: false};
        const currentTime = new Date().toLocaleTimeString('en-US', options);

        return currentTime;
    }
    eventListenerGamepad(elementTag){
        // Work in Progress
    }
    inputDown(buttonStats,currentPress, buttonTime){
        console.log(buttonStats, currentPress, 'test');
        let check = false;
        for (const key of currentPress){
            if(key['keyCode'] == buttonStats['keyCode']){
                check = true;
            }
        }
        if(check == true){
            return currentPress;
        } else if(check == false){
            currentPress.push(
                {
                    key: buttonStats['key'],
                    keyCode: buttonStats['keyCode'],
                    keyTime: buttonTime
                }
            );
            return currentPress;
        }
    }
    inputUp(buttonStats,currentPress, buttonTime){
    }
}

const main = new mainObj();     