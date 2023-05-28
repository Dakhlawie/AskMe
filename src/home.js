import React from 'react';
import footer from'./footer';
import navbar from './navbar';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
    <>
<header>{navbar()}</header>
<div>
<section class="hero-area bg-white overflow-hidden section-padding">
   
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mr-auto">
                <div class="hero-content">
                    
                    <h2 class="section-title fs-48 pb-3 text-black lh-50">Welcome to AskMe the ultimate Q&A network for developers</h2>
                    
                    <div class="hero-btn-box pt-30px">
                        <Link to="/ask" class="btn theme-btn mr-2 page-scroll"> AskMe</Link>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="generic-img-box generic-img-box-layout-2">
        <img class="lazy"  src="assets/images/img1.jpg" alt="image"/>
        <img class="lazy"  src="assets/images/img2.jpg" alt="image"/>
        <img class="lazy"  src="assets/images/img3.jpg" alt="image"/>
        <img class="lazy"  src="assets/images/img4.jpg" alt="image"/>
        <img class="lazy"  src="assets/images/img4.jpg" alt="image"/>
        <img class="lazy"  src="assets/images/img3.jpg" alt="image"/>
    </div>
</section>
</div>
<footer>{footer()}</footer>
</>




    );
  }
  
export default HomePage;