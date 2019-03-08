import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson0Instructions extends Component {
	
	
	render() {
		
	
	
	let basics = "When beginning to type, your fingers should always rest on the third row of keys or the 'Home Row'. With the index fingers find the small raised bumps on the F and J keys. From here spread each finger of both hands outwards so the fingers are lightly resting on the Row 3 three keys as in the following chart. The left and right Thumbs are used to control the space bar. The most important rule is DON'T LOOK AT YOUR KEYBOARD. If you must look try to use the on screen keyboard to check which key is being struck. To start choose a lesson."
	

	
		return (
		
			
			<div className="instructionArea">
			<h6>BASICS</h6>
			<article>
			{basics}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>A</div>
			<div style={{backgroundColor: "green"}}>S</div>
			<div style={{backgroundColor: "green"}}>D</div>
			<div style={{backgroundColor: "green"}}>F</div>
			<div style={{backgroundColor: "green"}}>G</div>
			<div style={{backgroundColor: "yellow"}}>H</div>
			<div style={{backgroundColor: "yellow"}}>J</div>
			<div style={{backgroundColor: "yellow"}}>K</div>
			<div style={{backgroundColor: "yellow"}}>L</div>
			<div style={{backgroundColor: "yellow"}}>;</div>
			</div>
			<div className="col">
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "aliceblue"}}>R4</div>
			<div style={{backgroundColor: "aliceblue"}}>R5</div>
			</div>
			</div>
			</div>
            
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		activeLesson: state.activeLesson,
		lessonKeys: state.lessonKeys	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
	
	}		
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson0Instructions);