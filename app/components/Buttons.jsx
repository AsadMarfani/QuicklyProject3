var React = require('react');
var ReactDOM = require('react-dom');
export class Buttons extends React.Component { 
	startTimer(event) {
		return this.props.startTimer(this.props.time);
	}

	render(){
		return (
			<button className = "btn btn-primary btn-lg" type = "button" onClick = {this.startTimer.bind(this)}>{this.props.time} Seconds</button>
		);
	}

}