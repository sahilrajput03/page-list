import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

let log = console.log;

export const PageList = ({list}) => {
	const Breaker = Array(20)
		.fill()
		.map((e, k) => <br key={k} />);
	return (
		<>
			<Router
				children={
					<>
						<Switch
							children={list.map(([path, component]) => (
								<Route key={path} path={path} children={component} />
							))}
						/>

						<div>
							{Breaker}
							<br />
							<h2>Visit apps:</h2>
							{list.map(([path]) => (
								<div key={path}>
									<Link to={path}>{path}</Link>
									<br />
								</div>
							))}
						</div>
					</>
				}
			/>
		</>
	);
};

const Pages = ({children}) => {
	return <Router children={<Switch children={children} />} />;
};
