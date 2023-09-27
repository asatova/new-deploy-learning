import  React from "react"
import {Link} from "gatsby";
import Navbar from "./navbar";
import '../components/global.css'
export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Copyright 2023</p>
            </footer>
        </div>
    )
}
