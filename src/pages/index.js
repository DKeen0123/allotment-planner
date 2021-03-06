import React from 'react';
import { Helmet } from 'react-helmet';
import ComingSoon from '../components/ComingSoon';

export default () => (
	<React.Fragment>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Allotment Planner</title>
		</Helmet>
		<ComingSoon />
	</React.Fragment>
);
