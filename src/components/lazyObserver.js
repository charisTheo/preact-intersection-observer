import { h, createElement } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks';

const LazyObserver = ({ componentDir, componentProps }) => {
    const ref = useRef(null)
    const [Component, setComponent] = useState(null)
    let io = null

    useEffect(() => {
        const loadComponent = async () => {
            const module = await import(/* webpackChunkName: "LazyObserver-Component" */ "./" + componentDir)
            const element = createElement(module.default, {...componentProps})
            setComponent(element)
        }
        io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !Component) {
                    loadComponent()
                }
            })
        })
        io.observe(ref.current)

        return function cleanup() {
            if (io) {
                io.disconnect()
            }
        }
    })
    
    return (
        <div ref={ref} style={{ height: 150 }}>
            {Component ? Component : <div>Loading...</div>}
        </div>
    )
}

export default LazyObserver
