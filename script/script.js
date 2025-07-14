class mainObj{
    constructor(){
        const bodyTag = document.querySelector('body');
        this.currentPress = [];
        this.buttonHistory = [];
        this.tempObject = {};
        this.pLatestKeyPress = document.querySelector('.pLatestKeyPress');

        bodyTag.addEventListener(('keydown'),(e)=>{
            this.currentPress = this.inputDown(e,this.currentPress, this.getTime());
        });
        bodyTag.addEventListener(('keyup'),(e)=>{
            this.tempObject = this.inputUp(e,this.currentPress, this.getTime(), this.buttonHistory);
            this.currentPress = this.tempObject['currentPress'];
            this.buttonHistory = this.tempObject['buttonHistory'];
            console.log(this.buttonHistory);
        });   
        bodyTag.addEventListener(('mousedown'),(e)=>{
        });
        bodyTag.addEventListener(('mouseup'), (e)=>{
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
                    keyTimeStart: buttonTime,
                    keyTimeEnd: ""
                }
            );
            return currentPress;
        }
    }
    inputUp(buttonStats,currentPress, buttonTime, buttonHistory){
        let check = false;
        let tempObject = {"buttonHistory": buttonHistory, "currentPress": []};
        for(const key of currentPress){
            if(key['keyCode'] == buttonStats['keyCode']){
                key['keyTimeEnd'] = buttonTime;
                tempObject['buttonHistory'].push(key);
                continue;
            } else {
                tempObject['currentPress'].push(key);
            }
        }
        return(tempObject);
    }
}

const main = new mainObj();     