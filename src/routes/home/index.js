import { h } from 'preact';
import style from './style.css';
import Section from '../../components/section';
import ObserveOnce from '../../components/ObserverOnce';

const Home = () => (
	<div class={style.home}>
		<Section style={{ backgroundColor: "aquamarine" }} />
		<ObserveOnce height={"100vh"}>
			<Section style={{ backgroundColor: "coral" }} />
		</ObserveOnce>
		<ObserveOnce height={"100vh"}>
			<Section style={{ backgroundColor: "blueviolet" }} />
		</ObserveOnce>
		<ObserveOnce height={"100vh"}>
			<Section style={{ backgroundColor: "yellow" }} />
		</ObserveOnce>
		<ObserveOnce height={"100vh"}>
			<Section style={{ backgroundColor: "goldenrod" }} />
		</ObserveOnce>
		<ObserveOnce height={"100vh"}>
			<Section style={{ backgroundColor: "greenyellow" }} />
		</ObserveOnce>
	</div>
);

export default Home;
