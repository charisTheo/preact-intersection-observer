import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks';

const ObserveOnce = ({ children, height }) => {
    const [hasBeenVisible, setHasBeenVisible] = useState(false)
    const ref = useRef(null)
    let io = null

    useEffect(() => {
        io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setHasBeenVisible(entry.isIntersecting)
                }
            })
        })
        io.observe(ref.current)
        
        return function cleanup() {
            if (io) {
                io.disconnect()
            }
        }
    }, [])

    return (
        <div style={{ height }} ref={ref}>{hasBeenVisible && children}</div>
    )
}


export default ObserveOnce
