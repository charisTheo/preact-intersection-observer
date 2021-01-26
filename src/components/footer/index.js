import { h } from 'preact'

import "./style.css"

const Footer = ({ date }) => {
    return (
        <footer>
            <h2>Footer</h2>
            <h3>{date.toString()}</h3>
        </footer>
    )
}

export default Footer
