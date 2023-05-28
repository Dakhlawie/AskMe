import React from 'react';
import footer from'./footer';
import navbar from './navbar';
function About(){
    return(<div>
        <header>{navbar()}</header>
        <section class="hero-area section-padding bg-gray">
    <span class="icon-shape icon-shape-1 is-scale"></span>
    <span class="icon-shape icon-shape-2 is-bounce"></span>
    <span class="icon-shape icon-shape-3 is-swing"></span>
    <span class="icon-shape icon-shape-4 is-spin"></span>
    <span class="icon-shape icon-shape-5 is-spin"></span>
    <span class="icon-shape icon-shape-6 is-bounce"></span>
    <span class="icon-shape icon-shape-7 is-tilt"></span>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="hero-content">
                    <h3 class="fs-16 fw-medium pb-3">Who we are</h3>
                    <h2 class="section-title fs-40 pb-3 lh-55">Helping developers and technologists write the script of the future.</h2>
                    <p class="lh-26 pb-3">Our public platform <strong class="fw-medium text-black">serves 100 million people every month</strong>, making it one of the 50 most popular websites in the world.</p>
                    <p class="section-desc pb-3">Founded in 2023, AskMe's public platform is used by almost everyone who codes to learn, share their knowledge, collaborate, and build their careers in the field of information technology. Our products and tools help developers and technologists in their professional and personal lives.</p>
                       
                </div>
            </div>
            <div class="col-lg-6">
                <div class="generic-img-box h-100">
                    <img class="lazy"  src="assets/images/img1.jpg" alt="image"/>
                    <img class="lazy"  src="assets/images/img2.jpg" alt="image"/>
                    <img class="lazy"  src="assets/images/img3.jpg" alt="image"/>
                    <img class="lazy"  src="assets/images/img4.jpg" alt="image"/>
                </div>
            </div>
        </div>
    </div>
</section>

          
        <footer>{footer()}</footer>

    </div>);
}
export default About;