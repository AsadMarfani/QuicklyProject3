var React = require('react');
var ReactDOM = require('react-dom');
import { Buttons } from 'Buttons';
import { ShowTimeComponent } from'ShowTimeComponent';
export class TimerComponent extends React.Component {  
	constructor(props) {
	    super(props)
	    this.state = {timeLeft: null, timer: null};
	    this.startTimer = this.startTimer.bind(this);
      }
      startTimer(timeLeft){
      	clearInterval(this.state.timer);
      	let timer = setInterval(()=> {
      		let timeLeft = this.state.timeLeft - 1;
      		if(timeLeft === 0)
      			clearInterval(timer);
      		this.setState({timeLeft: timeLeft});
      	},1000);
      	return this.setState({timeLeft: timeLeft, timer: timer});
      }
      render() {
		    return (
		        <div className = "row">
		            <div className = "jumbotron">
		            <h1>Timer App</h1>
		            <hr/>
		            </div>
		            <div className = "col-md-4">
		            	<Buttons  className = "btn btn-primary" time = "5" startTimer = {this.startTimer}/>
		            </div>
		            <div  className = "col-md-4">
		            	<Buttons className = "btn btn-lg btn-primary" time = "10" startTimer = {this.startTimer}/>
		            </div>
		            <div  className = "col-md-4">	
		            	<Buttons className = "btn btn-lg btn-primary" time = "15" startTimer = {this.startTimer}/>
		            </div>
		            <br/><br/><br/><br/><br/>
		            <ShowTimeComponent timeLeft = {this.state.timeLeft}/>
	             </div>
	         );
      } 
}
