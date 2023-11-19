// src/components/header.js
import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header() {
    return (
        <header>
            <Link className="header-link-home" to="/">Home</Link>
            <Link className="header-link-home" to="/about/">About</Link>
            <hr/>
        </header>
    )
}