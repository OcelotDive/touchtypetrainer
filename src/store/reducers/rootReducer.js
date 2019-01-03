const initState = {
    timeOn: false,
    capsOnOff: false,
    shiftOnOff: false,
    currentClass: '',
    classChange: 'keyStruck',
    currentKey: null,
    testString: '',
    stringLength: 0,
    fetchText: true,
    letterCorrect: false,
    usedString: ' ',
    displayLessonsMenu: false,
    activeLesson: [],
    lessonKeys: [],
    intervalId: [],
    mistakes: [],
    mistakesLength: 0,
    mistakesTemp: 0,
    timevalue: '00:00',
    stringEnd: false,
    wpm: 0,
    finishShow: false,
    flagSelect1: 'usLayout flagHighlighted',
    flagSelect2: 'ukLayout',
	keyboardIsOn: true
  
}


const rootReducer = (state = initState, action) => {

    switch (action.type) {


        //handles general key presses
        case 'PRESSED':
            //start timer
            state.timeOn = true;
			
			

            //return className to default after any key press (coloured keys)
            state.lessonKeys.map((_, i, a) => {
                let x = document.getElementById(_);
                x.className = x.className.split(' ')[0];
				if(x.id === 'Backslash'){x.className = 'mainKey specialKeyRule'};
			
            })


            //null return in case unwanted key pressed
            if (action.id === null) {
                return {
                    capsOnOff: state.capsOnOff,
                    shiftOnOff: state.shiftOnOff,
                    currentClass: state.currentClass,
                    classChange: state.classChange,
                    currentKey: state.currentKey,
                    testString: state.testString,
                    stringLength: state.stringLength,
                    fetchText: state.fetchText,
                    letterCorrect: state.letterCorrect,
                    usedString: state.usedString,
                    activeLesson: state.activeLesson,
                    displayLessonsMenu: state.displayLessonsMenu,
                    lessonKeys: state.lessonKeys,
                    timeOn: state.timeOn,
                    intervalId: state.intervalId,
                    mistakes: state.mistakes,
                    mistakesLength: state.mistakesLength,
                    mistakesTemp: state.mistakesTemp,
                    timevalue: state.timevalue,
                    stringEnd: state.stringEnd,
                    wpm: state.wpm,
                    finishShow: state.finishShow,
                    flagSelect1: state.flagSelect1,
                    flagSelect2: state.flagSelect2,
					keyboardIsOn: state.keyboardIsOn
                   

                }
            }


            //start timer 
            state.timeOn = true;


            let alpha;
            //check for alpha for use with capslock

            if (action.id.id === 'KeyA' ||
                action.id.id === 'KeyB' ||
                action.id.id === 'KeyC' ||
                action.id.id === 'KeyD' ||
                action.id.id === 'KeyE' ||
                action.id.id === 'KeyF' ||
                action.id.id === 'KeyG' ||
                action.id.id === 'KeyH' ||
                action.id.id === 'KeyI' ||
                action.id.id === 'KeyJ' ||
                action.id.id === 'KeyK' ||
                action.id.id === 'KeyL' ||
                action.id.id === 'KeyM' ||
                action.id.id === 'KeyN' ||
                action.id.id === 'KeyO' ||
                action.id.id === 'KeyP' ||
                action.id.id === 'KeyQ' ||
                action.id.id === 'KeyR' ||
                action.id.id === 'KeyS' ||
                action.id.id === 'KeyT' ||
                action.id.id === 'KeyU' ||
                action.id.id === 'KeyV' ||
                action.id.id === 'KeyW' ||
                action.id.id === 'KeyX' ||
                action.id.id === 'KeyY' ||
                action.id.id === 'KeyZ') {
                alpha = true;

            }

            //has caps been pressed
            if (action.id.id === 'CapsLock') {

                state.capsOnOff = !state.capsOnOff;

                state.currentKey = null;
            } else if (action.id.id === 'ShiftLeft' || action.id.id === 'ShiftRight') {
                state.shiftOnOff = true;
                state.currentKey = null;

            } else {

                state.currentKey = state.shiftOnOff || state.capsOnOff && alpha ? action.id.attributes[3].value : action.id.attributes[2].value;
                //console.log('this is the current key ' + state.currentKey)
                //a test for mistakes
                if (state.currentKey !== state.testString[0]) {
                    state.mistakes.push('x');
                    //console.log(state.mistakes.length)
                    state.mistakesLength = state.mistakes.length;


                }

            }

            //dealing withe the class of the struck key;
            state.currentClass = action.id.className;
            action.id.className = `${state.currentClass} ${state.classChange}`
            console.log(action.id.className);
		
            //setting the current key



            if (state.currentKey === state.testString[0]) {
                state.usedString = state.usedString.concat(state.testString[0]);
                state.testString = state.testString.substring(1, state.testString.length);
                state.mistakesTemp = state.mistakesLength;


                state.letterCorrect = true;


            }



            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                letterCorrect: state.letterCorrect,
                usedString: state.usedString,
                activeLesson: state.activeLesson,
                displayLessonsMenu: state.displayLessonsMenu,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
              



            }



            //handles general key release
        case 'RELEASED':

            
             
            //return key to unpressed class
            state.currentKey = null;
           


            //null return incase unwanted key pressed keeps everything the same
            if (action.id === null) {
                state.currentKey = null;
                return {
                    capsOnOff: state.capsOnOff,
                    shiftOnOff: state.shiftOnOff,
                    currentClass: state.currentClass,
                    classChange: state.classChange,
                    currentKey: state.currentKey,
                    testString: state.testString,
                    stringLength: state.stringLength,
                    fetchText: state.fetchText,
                    letterCorrect: state.letterCorrect,
                    displayLessonsMenu: state.displayLessonsMenu,
                    usedString: state.usedString,
                    activeLesson: state.activeLesson,
                    lessonKeys: state.lessonKeys,
                    timeOn: state.timeOn,
                    intervalId: state.intervalId,
                    mistakes: state.mistakes,
                    mistakesLength: state.mistakesLength,
                    mistakesTemp: state.mistakesTemp,
                    timevalue: state.timevalue,
                    stringEnd: state.stringEnd,
                    wpm: state.wpm,
                    finishShow: state.finishShow,
                    flagSelect1: state.flagSelect1,
                    flagSelect2: state.flagSelect2,
					keyboardIsOn: state.keyboardIsOn
                  


                }
            }
                //test for shift release
            if (action.id.id === 'ShiftLeft' || action.id.id === 'ShiftRight') {
                state.shiftOnOff = false;

            }
            
            // test for shift classes due to update of current key whilst shift held down
             if (action.id.id === 'ShiftLeft' && state.flagSelect1 === 'usLayout flagHighlighted') {
                action.id.className = 'shiftFullUSLeft';
                state.currentKey = null;
             
            } else if (action.id.id === 'ShiftLeft') {
                action.id.className = 'shiftHalf';
                state.currentKey = null;
            } else if (action.id.id === 'ShiftRight') {
                action.id.className = 'shiftFull';
                state.currentKey = null;
            } else if (action.id.id === 'Space') {
                action.id.className = 'spaceKey';
                state.currentKey = null;
            } else if (action.id.id === 'Enter' && state.flagSelect2 === 'ukLayout flagHighlighted') {
                action.id.className = 'enterKey';
                state.currentKey = null;
            } else if (action.id.id === 'Enter' && state.flagSelect1 === 'usLayout flagHighlighted') {
                action.id.className = 'usEnter';
                state.currentKey = null;
            } else if (action.id.id === 'Backspace') {
                action.id.className = 'doubleKey';
                state.currentKey = null;
            } else if (action.id.id === 'Tab') {
                action.id.className = 'doubleKey';
                state.currentKey = null;
            } else if (action.id.id === 'CapsLock') {

                action.id.className = state.capsOnOff ? 'doubleKeyandAbitOn' : 'doubleKeyandAbit';
                state.capsOnOff = state.capsOnOff;
                state.currentKey = null;
            } else if (action.id.id === 'IntlBackslash' && state.flagSelect1 === 'usLayout flagHighlighted') {
                action.id.className = 'usBackSlash';
                state.currentKey = null;
            } else if (action.id.id === 'Backslash' && state.flagSelect2 === 'ukLayout flagHighlighted') {
                action.id.className = 'mainKey specialKeyRule';
                state.currentKey = null;
            } else {
                action.id.className = 'mainKey'
                state.currentKey = null;

            }
            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                letterCorrect: state.letterCorrect,
                usedString: state.usedString,
                activeLesson: state.activeLesson,
                displayLessonsMenu: state.displayLessonsMenu,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
             


            }



            //handles initial string data set
        case 'SENDSTRING':



            state.testString = action.value;
            state.stringLength = action.value.length;
            state.fetchText = false;
            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
            


            }


        case 'LESSONSMENU':

            //returning className to default after menu open
            state.lessonKeys.map((_, i, a) => {
                let x = document.getElementById(_);
                x.className = x.className.split(' ')[0];
            })
            state.displayLessonsMenu = !state.displayLessonsMenu

            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
               


            }

        case 'STARTLESSON':
            //reset most variable on new lesson start
            state.timeOn = false;
            state.finishShow = false;
            state.stringEnd = false;
            console.log(state.intervalId)
            clearInterval(state.intervalId[0]);
            state.mistakes = [];
            state.mistakesLength = 0;
            state.mistakesTemp = 0;
            state.usedString = '';
            state.activeLesson = action.lessonNumber;

            state.lessonKeys = action.keys;
            if (action.code === 1) {
                state.displayLessonsMenu = !state.displayLessonsMenu
            }
            //assigning colours to the left and right hand keys
          
                if (state.flagSelect1 === 'usLayout flagHighlighted') {

                    state.lessonKeys.map((_, i, a) => {
                        if (_ === 'KeyQ' || _ === 'KeyW' || _ === 'KeyE' || _ === 'KeyR' || _ === 'KeyT' || _ === 'KeyA' || _ === 'KeyS' || _ === 'KeyD' || _ === 'KeyF' || _ === 'KeyG' || _ === 'KeyX' || _ === 'KeyZ' || _ === 'KeyC' || _ === 'KeyV' || _ === 'KeyB' || _ === 'Digit1' || _ === 'Digit2' || _ === 'Digit3' || _ === 'Digit4' || _ === 'Digit5' || _ === 'ShiftLeft' || _ === 'Backquote') {
                            let x = document.getElementById(_);

                            x.className = x.className + ' animated pulse infinite green';
                        } else if (_ === 'Space') {
                            let x = document.getElementById(_);
                            x.className = x.className;
                        } else {

                            let x = document.getElementById(_);

                            x.className = x.className + ' animated pulse infinite yellow';

                        }
                    })
                }
                if (state.flagSelect2 === 'ukLayout flagHighlighted') {
                    state.lessonKeys.map((_, i, a) => {
                        if (_ === 'KeyQ' || _ === 'KeyW' || _ === 'KeyE' || _ === 'KeyR' || _ === 'KeyT' || _ === 'KeyA' || _ === 'KeyS' || _ === 'KeyD' || _ === 'KeyF' || _ === 'KeyG' || _ === 'KeyX' || _ === 'KeyZ' || _ === 'KeyC' || _ === 'KeyV' || _ === 'KeyB' || _ === 'Digit1' || _ === 'Digit2' || _ === 'Digit3' || _ === 'Digit4' || _ === 'Digit5' || _ === 'ShiftLeft' || _ === 'IntlBackslash' || _ === 'Backquote') {
                            let x = document.getElementById(_);

                            x.className = x.className + ' animated pulse infinite green';
                        } else if (_ === 'Space') {
                            let x = document.getElementById(_);
                            x.className = x.className;
                        } else {
                            let x = document.getElementById(_);

                            x.className = x.className + ' animated pulse infinite yellow';

                        }
                    })

                }
            
            state.displayLessonsMenu = !state.displayLessonsMenu
            state.fetchText = true;

            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
            



            }

        case 'INTERVALID':
            state.intervalId = action.value;
            console.log(state.intervalId)

            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
         



            }


        case 'SENDTIMEVALUE':
            state.timevalue = action.time;
            console.log('this is the time value ' + state.timevalue)

            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
         



            }

        case 'SENDEND':
            state.stringEnd = true;
            state.finishShow = true;
            clearInterval(state.intervalId[0]);
            console.log(state.newClass);

            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
       



            }
        case 'SENDWPM':

            state.wpm = Math.round(action.value);

            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
        



            }

        case 'PANELOFF':

            state.finishShow = false;

            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                usedString: state.usedString,
                displayLessonsMenu: state.displayLessonsMenu,
                activeLesson: state.activeLesson,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
          



            }

        case 'FLAGCLICK':
            //return all key classes to normal
            clearInterval(state.intervalId[0]);
            state.lessonKeys.map((_, i, a) => {
                let x = document.getElementById(_);
                x.className = x.className.split(' ')[0];
            })
            
            
            
            switch (action.flag) {

                case 'usLayout flagHighlighted':
                    state.flagSelect1 = `${action.flag} flagHighlighted`;
                    state.flagSelect2 = `ukLayout`;
                    break;
                case 'usLayout':
                    state.flagSelect1 = `${action.flag} flagHighlighted`;
                    state.flagSelect2 = `ukLayout`;
                    break;
                case 'ukLayout':
                    state.flagSelect2 = `${action.flag} flagHighlighted`;
                    state.flagSelect1 = `usLayout`;
                    break;
                default:
                    state.flagSelect1 = `usLayout flagHighlighted`;
                    break;


            }
            
            return {
                timeOn: false,
                capsOnOff: false,
                shiftOnOff: false,
                currentClass: '',
                classChange: 'keyStruck',
                currentKey: null,
                testString: '',
                stringLength: 0,
                fetchText: true,
                letterCorrect: false,
                usedString: ' ',
                displayLessonsMenu: false,
                activeLesson: [],
                lessonKeys: [],
                intervalId: [],
                mistakes: [],
                mistakesLength: 0,
                mistakesTemp: 0,
                timevalue: '00:00',
                stringEnd: false,
                wpm: 0,
                finishShow: false,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
     
            }
			
			case 'KEYBOARDONOFF':
            
         	state.keyboardIsOn = !state.keyboardIsOn;
            
            
            
      
            
            return {
                capsOnOff: state.capsOnOff,
                shiftOnOff: state.shiftOnOff,
                currentClass: state.currentClass,
                classChange: state.classChange,
                currentKey: state.currentKey,
                testString: state.testString,
                stringLength: state.stringLength,
                fetchText: state.fetchText,
                letterCorrect: state.letterCorrect,
                usedString: state.usedString,
                activeLesson: state.activeLesson,
                displayLessonsMenu: state.displayLessonsMenu,
                lessonKeys: state.lessonKeys,
                timeOn: state.timeOn,
                intervalId: state.intervalId,
                mistakes: state.mistakes,
                mistakesLength: state.mistakesLength,
                mistakesTemp: state.mistakesTemp,
                timevalue: state.timevalue,
                stringEnd: state.stringEnd,
                wpm: state.wpm,
                finishShow: state.finishShow,
                flagSelect1: state.flagSelect1,
                flagSelect2: state.flagSelect2,
				keyboardIsOn: state.keyboardIsOn
     



            }

			default:
            break;

    }



    return state;
}

export default rootReducer;
