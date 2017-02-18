var React = require('react');
var ReactDOM = require('react-dom');
import { TimerComponent } from "TimerComponent";

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
	<TimerComponent/>,
    document.getElementById('timerApp')
);
