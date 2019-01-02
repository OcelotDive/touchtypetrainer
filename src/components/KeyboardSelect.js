import React, { Component } from 'react';
import { connect } from 'react-redux';

class KeyboardSelect extends Component {
	
	
	handleFlagClick = (e) => {
			let flag = e.target.className;
			
		
		
			this.props.flagClick(flag);
		
		
		}
	
	
	
	
	
	render() {
	
		let flagClass1 = this.props.flagSelect1;
		let flagClass2 = this.props.flagSelect2;
		
		
		return (
		
		<section className="keyboardPanel">
			<h4 className="keyboardSelectLabel">KEYBOARD LAYOUT</h4>
			<div className="flagContainer">
			<div className={flagClass1} onMouseDown={this.handleFlagClick}></div>
			<div className={flagClass2} onMouseDown={this.handleFlagClick}></div>
			</div>
		</section>
		
		)
	}
}

const mapStateToProps = (state) => {
	return {
		flagSelect1: state.flagSelect1,
		flagSelect2: state.flagSelect2,
		activeLesson: state.activeLesson,
		lessonKeys: state.lessonKeys
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        flagClick: (flag) => {dispatch({type: 'FLAGCLICK', flag: flag})},
		startLesson: (lessonNumber,keys, code) => {dispatch({type: 'STARTLESSON', lessonNumber: lessonNumber, keys: keys, code: code})},
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardSelect);