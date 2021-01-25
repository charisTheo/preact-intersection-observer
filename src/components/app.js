import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import ReactIntersectionObserverPage from '../routes/react-intersection-observer';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<ReactIntersectionObserverPage path="/react-intersection-observer/" />
		</Router>
	</div>
)

export default App;
