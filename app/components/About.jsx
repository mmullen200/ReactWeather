var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<ul>
				<li>This app was built with <a href='https://facebook.github.io/react/'>React.js</a></li>
				<li>Weather data comes from <a href="http://openweathermap.org/">Open Weather Map</a></li>
			</ul>
		</div>
		);
};

module.exports = About;