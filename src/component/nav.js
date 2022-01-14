import React from 'react';
import './nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-nav bg-light">
            <ul class="nav" style={{width:500}}>
                <li class="nav-item">
                    <a class="nav-link active" href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SHOP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">PRODUCT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link transition-duration-500" href="#">PAGES <i class="pi pi-angle-down"></i></a>
                    
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">ABOUT</a>
                        <a class="dropdown-item" href="#">CONTACT</a>
                        <a class="dropdown-item" href="#">LOGIN</a>
                        <a class="dropdown-item" href="#">FAQs</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;