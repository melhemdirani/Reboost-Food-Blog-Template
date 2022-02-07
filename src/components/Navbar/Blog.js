import React from 'react';
import "./Blog.styles.scss"

function Blog() {
  return <section className="home-blog-area-section-padding30">
           <div  class="blog_container">
           <div class="row justify-content-center">
         <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10" id="container1">
         <div class="section-tittle text-center mb-90"> 
         <span>Our recent news</span>
         <h2>Hipos and tricks from recent blog</h2>
            </div>
            </div>
            </div>
            <div class="row">
           <div class="col-xl-6 col-lg-6 col-md-6" id="container2">
           <div class="home-blog-single mb-30">
           <div class="blog-img-cap">
           <div class="blog-img">
           <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" data-pagespeed-url-hash="46289030" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>

            <div class="blog-date text-center">
            <span>24</span>
            <p>Now</p>
            </div>
            </div>
            <div class="blog-cap">
            <p>| Physics</p>
            <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
             <a href="blog_details.html" class="more-btn">became a member »</a>
            </div>
            </div>
            </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
        <div class="home-blog-single mb-30">
        <div class="blog-img-cap">
        <div class="blog-img">
        <img src="https://images.unsplash.com/photo-1596728325488-58c87691e9af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" data-pagespeed-url-hash="340788951" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>

        <div class="blog-date text-center">
        <span>24</span>
        <p>Now</p>
        </div>
        </div>
        <div class="blog-cap">
        <p>| Physics</p>
        <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
        <a href="blog_details.html" class="more-btn">became a member »</a>
        </div>
        </div>
        </div>
        </div>
        </div>
         </div>
            
            
   </section>;
}

export default Blog;
