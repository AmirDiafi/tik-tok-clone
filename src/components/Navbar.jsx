import React from 'react'
import Home from './Home'
import Profile from './Profile'
import './stylesheets/navbar.css'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import * as Icons from 'react-icons/all'

class Navbar extends React.Component {

    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>
                                <Icons.RiHome4Line />
                            </Link>
                        </li>
                        <li>
                            <Icons.FiSearch />
                        </li>
                        <li className='add'>
                            <Icons.FiPlus />
                        </li>
                        <li>
                            <Icons.RiMessageLine />
                        </li>
                        <li>
                            <Link to='/profile'>
                                <Icons.RiUserLine/>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Route exact path='/' component={Home} />
                <Route path='/profile' component={Profile} />
            </Router>
        )
    }

}

export default Navbar