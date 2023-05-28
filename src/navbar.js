import React from 'react';
import { Link } from 'react-router-dom';
function navbar(){
return(
    <div class="header-area bg-dark">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-2">
                <div class="logo-box">
                    <a href="index.html" class="logo"><img src="assets/images/favicon.png" /></a>
                    <div class="user-action">
                        <div class="search-menu-toggle icon-element icon-element-xs shadow-sm mr-1" data-toggle="tooltip" data-placement="top" title="Search">
                            <i class="la la-search"></i>
                        </div>
                        <div class="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm" data-toggle="tooltip" data-placement="top" title="Main menu">
                            <i class="la la-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-10">
                <div class="menu-wrapper">
                    <nav class="menu-bar mr-auto menu-bar-white">
                        <ul>
                            <li>
                            <Link to="/">Accueil</Link>
                                
                            </li>
                            <li class="is-mega-menu">
                                <Link to="/about">About US</Link>
                               
                            </li>
                            <li>
                            <Link to="/contact">Contact US</Link>
                               
                            </li>
                            <li>
                            <Link to="/ask">Ask a Question</Link>
                               
                            </li>
                            <li>
                            <Link to="/listeQ">All Questions</Link>
                               
                            </li>
                        </ul>
                    </nav>
                
                    <div class="nav-right-button">
                        <Link to="/login" class="btn theme-btn theme-btn-outline theme-btn-outline-white mr-2" data-toggle="modal" data-target="#loginModal"><i class="la la-sign-in mr-1"></i> Login</Link>
                        <Link to="/register" class="btn theme-btn theme-btn-white" data-toggle="modal" data-target="#signUpModal"><i class="la la-user mr-1"></i> Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  

</div>
);
}
export default navbar;