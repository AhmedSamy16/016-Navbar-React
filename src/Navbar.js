import { useState, useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const containerRef = useRef(null)
    const linksRef = useRef(null)
    useEffect(() => {
        const height = linksRef.current.getBoundingClientRect().height
        if (showLinks) {
            containerRef.current.style.height = `${height}px`
        } else {
            containerRef.current.style.height = `0px`
        }
    }, [showLinks])
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt="logo" />
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className={`links-container ${showLinks && 'show-container'}`} ref={containerRef}>
                    <ul className='links' ref={linksRef}>
                        {
                            links.map(link => {
                                const { id, url, text } = link
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                    {
                        social.map(c => {
                            const { id, url, icon } = c
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar