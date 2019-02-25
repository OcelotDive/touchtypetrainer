import React, { Component } from 'react';
import { connect } from 'react-redux';





class Clock extends Component {


    render() {

        const intervalIdArray = [];
        const startTimer = (display, sendfunction) => {
            let seconds = 0;
            let minutes = '0' + Math.floor(seconds / 60);

            const intervalId = setInterval(() => {

                if (seconds < 10) seconds = '0' + seconds;

                if (seconds === 60) {
                    
                    minutes = minutes < 10 ? '0' + ++minutes : ++minutes;
                    seconds = '0' + 0;
                }

                display.textContent = minutes + ":" + seconds;
                
                sendfunction(display.textContent);
                
                seconds++;
            }, 1000);

            intervalIdArray.push(intervalId);
            this.props.sendIntervalId(intervalIdArray);
        }

        //if timer started start else display 00:00
        setTimeout(() => {

            if (this.props.timeOn) {

                let clock = document.getElementById('clock');
                
                startTimer(clock, this.props.sendTimeValue);

            } else {

                let clock = document.getElementById('clock');
                clock.textContent = '00:00';
            }
        }, 200);




        return (


            <div className = "clockDisplay" id= "clock" >< /div>

        )
    }
}





const mapStateToProps = (state) => {
    return {
        timeOn: state.timeOn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendIntervalId: (value) => { dispatch({type: 'INTERVALID', value: value}) },
        sendTimeValue: (time) => { dispatch({type: 'SENDTIMEVALUE', time: time}) }
    }





}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
