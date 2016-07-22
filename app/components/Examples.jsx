var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
			<div>
				<h1 className="text-center">Examples</h1>
				<p>A few example locations to try out:</p>
				<ol>
					<li>
						<Link to='/?location=Oklahoma City'>Oklahoma City, OK</Link>
					</li>
					<li>
						<Link to='/?location=Prague'>Prague, CZ</Link>
					</li>

				</ol>
			</div>
			);
};

module.exports = Examples;