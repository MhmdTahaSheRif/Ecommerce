import React, { useContext } from 'react';
import './About.css'

function About() {
    return (
        <div className="about_page">
        <h1 className="text-center mt-4" id = "aboutheading"><strong>About Us</strong></h1>
      <div className="container-my d-flex align-items-center justify-content-center border shadow-lg rounded py-4">
        <div className="content">
        <p className="txt py-5">
        Welcome to Ecommerce, where we redefine the way you shop online. As pioneers in ecommerce, we strive to create an exceptional shopping experience for every customer.
Our Mission

At Ecommerce, our mission is to provide you with a seamless online shopping journey. We aim to offer a curated selection of high-quality products, backed by excellent customer service and innovative technology.        </p>
      </div>
      
      <div className='container-2 d-flex flex-column align-items-center justify-content-center border-1'>
        <h2 className='text-center mb-4'><strong>Why Choose Us ?</strong></h2>
        <div class="accordion" style={{ width: '1000px' }} id="accordionExample">
        <div class="accordion-item shadow">
          <h2 class="accordion-header">
            <button class="accordion-button text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: "#ff4141"}} >
            Affordable Online Shopping at Your Fingertips
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show text-body" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Enjoy peace of mind with our secure payment gateway and data protection measures, We ensure prompt delivery of your orders to your doorstep.            </div>
          </div>
        </div>
        <div class="accordion-item shadow">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{background: "#ff4141"}}>
            A Huge Collection of Clothes Across All Categories
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse text-light" data-bs-parent="#accordionExample">
            <div class="accordion-body text-body">
              We have a very wide range of clothes in all categories. For men, women and kids.  In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. 
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>    );
}

export default About;