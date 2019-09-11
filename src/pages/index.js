import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default () => (
	<React.Fragment>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Allotment Planner</title>
		</Helmet>
		<div>
			<h1>Landing page</h1>
			<Link to="/blog">Check the blog</Link>
		</div>
	</React.Fragment>
);
