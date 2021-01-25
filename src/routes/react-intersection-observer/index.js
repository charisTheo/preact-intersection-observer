import { h } from 'preact';
import { useInView } from 'react-intersection-observer';
import Section from "./../../components/section"

import style from './style.css';

const Wrapper = ({ initialInView, height, children }) => {
	const { ref, inView } = useInView({
		// Add any options here (https://www.npmjs.com/package/react-intersection-observer#options)
		threshold: 0.3,
		triggerOnce: true,
		initialInView
	})

	return (
		<div ref={ref} style={{ height }}>
			{inView && children} 
		</div>
	)
}

const ReactIntersectionObserver = () => {

	return (
		<div class={style.container}>
			<Wrapper initialInView={true}>
				<Section style={{ backgroundColor: "aquamarine" }} />
			</Wrapper>
			<Wrapper height={"100vh"}>
				<Section style={{ backgroundColor: "coral" }} />
			</Wrapper>
			<Wrapper height={"100vh"}>
				<Section style={{ backgroundColor: "blueviolet" }} />
			</Wrapper>
			<Wrapper height={"100vh"}>
				<Section style={{ backgroundColor: "yellow" }} />
			</Wrapper>
			<Wrapper height={"100vh"}>
				<Section style={{ backgroundColor: "goldenrod" }} />
			</Wrapper>
			<Wrapper height={"100vh"}>
				<Section style={{ backgroundColor: "greenyellow" }} />
			</Wrapper>
		</div>
	);
}

export default ReactIntersectionObserver;
