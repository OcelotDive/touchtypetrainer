import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row1 extends Component {
	
	//Start keypress listener.
	componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
	document.addEventListener("keyup", this.handleKeyUp.bind(this));	
}
	
	
	

	
	handleKeyPress = (e) => {
	
		e.preventDefault();
		

	
	
	if(e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93){
		return false;
	}
		
	else{	
		
	let currentKey = document.getElementById(e.code);
	this.props.classChange(currentKey);	
	}
		
	}
	
	
	
	handleKeyUp = (e) => {
	if(e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93){
		return false;
	}
	else {
	let releasedKey = document.getElementById(e.code);
	this.props.classChangeOff(releasedKey);
		}
	}
	
	
	
	render() {

		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="~">
			~<br/>
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='@'>
			@<br/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="#">
			#<br/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<br/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<br/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<br/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<br/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
			:
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="¬">
			¬<br/>
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='"'>
			"<br/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="£">
			£<br/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<br/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<br/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<br/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<br/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		flagSelect1: state.flagSelect1,
		flagSelect2: state.flagSelect2

	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})},
		deleteChar: () => {dispatch({type: 'DELETE'})},
		classChange: (id) => {dispatch({type: 'PRESSED', id: id})},
		classChangeOff: (id) => {dispatch({type: 'RELEASED', id: id})}
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row1);