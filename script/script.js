class mainObj{
    constructor(){
        const bodyTag = document.querySelector('body');
        const tableTag = document.querySelector('.tableKeyHistory').querySelector('tbody');;

        this.currentPress = [];
        this.buttonHistory = [];
        this.tempObject = {};
        this.pLatestKeyPress = document.querySelector('.pLatestKeyPress');

        bodyTag.addEventListener(('keydown'),(e)=>{
            this.currentPress = this.inputDown(e,this.currentPress, this.getTime());
            this.refreshCurrentPressDisplay(this.currentPress);
        });
        bodyTag.addEventListener(('keyup'),(e)=>{
            this.tempObject = this.inputUp(e,this.currentPress, this.getTime(), this.buttonHistory);
            this.currentPress = this.tempObject['currentPress'];
            this.buttonHistory = this.tempObject['buttonHistory'];
            this.clearCurrentPressDisplay();
            this.refreshTableKeyHistory(tableTag, this.buttonHistory);
        });   
        bodyTag.addEventListener(('mousedown'),(e)=>{
        });
        bodyTag.addEventListener(('mouseup'), (e)=>{
            this.clearCurrentPressDisplay();
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
    clearCurrentPressDisplay(){
    };
    refreshCurrentPressDisplay(currentPress){
        const divLatest = document.querySelector('.divLatestHistory');
        divLatest.replaceChildren();
        for(const key of currentPress){
            this.refreshCurrentPressDisplay_Single(key, divLatest);
        }
    }
    refreshCurrentPressDisplay_Single(singlePress, divHistory){
        const template = document.querySelector('.templateSingleButton');

        const clonePress = template.content.cloneNode(true);
        const pKey = clonePress.querySelector('.pLatestKeyPress');
        const pTime = clonePress.querySelector('.pTime');

        pKey.textContent = singlePress['key'];
        pTime.textContent = singlePress['keyTimeStart'];
        divHistory.appendChild(clonePress);
    }
    createKeyboardLayout(){
    }
    createKeyboardLayout_Single(keyboardElement,keyboardKey){
    }
    refreshTableKeyHistory(tableElement,buttonHistory){
        for(let i = 0; i<buttonHistory.length-1;i++){
            console.log('test',i);
            tableElement.deleteRow(0);
        }
        for(const key of buttonHistory){
            let row = tableElement.insertRow(-1);

            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.textContent = key['key'];
            cell2.textContent = key['keyTimeStart'];
            cell3.textContent = key['keyTimeEnd']
            console.log(key)
        }
    };
}

const main = new mainObj();     