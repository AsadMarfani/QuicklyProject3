var React = require('react');
var ReactDOM = require('react-dom');
export class ShowTimeComponent extends React.Component {
	render(){
		if(this.props.timeLeft === null)
			return <div/>
		if( this.props.timeLeft === 0)
			return <h1>Time's Up!</h1>
		return (
			<div>
				<h1>Time Left : <b>{this.props.timeLeft} seconds</b></h1>
			</div>
		);
	}
}