import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import ReactIntersectionObserverPage from '../routes/react-intersection-observer';
import LazyObserver from './lazyObserver';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<ReactIntersectionObserverPage path="/react-intersection-observer/" />
		</Router>
		{/* componentDir - relative to /src/components/ directory */}
		<LazyObserver componentDir="footer" componentProps={{ date: new Date() }} />
	</div>
)

export default App;
