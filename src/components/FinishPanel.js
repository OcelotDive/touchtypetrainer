import React, { Component } from 'react';
import { connect } from 'react-redux';



class FinishPanel extends Component {

// removed class names for finish panel

    render() {

  

        return (

            this.props.finishShow ?

            <section className ='finishPanel animated lightSpeedIn'>
            
                <h2> COMPLETED! </h2> 
                <h3> WELL DONE </h3> 
                <div className = "circle">< /div> 
            
            </section> :
            
            <section>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        finishShow: state.finishShow
    }
}


export default connect(mapStateToProps)(FinishPanel);
