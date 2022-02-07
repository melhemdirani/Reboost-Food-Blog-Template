import React from 'react';
import './Footer.styles.scss';

function Footer() {
  return     <div className="footer_container">
              <div class="footer-top footer-padding">
                 <div class="row d-flex justify-content-between">
                     <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
       <div class="single-footer-caption mb-50">
      
          
      <div className="footer_logo">
          <a href="#">
              <img src="https://preview.colorlib.com/theme/brber/assets/img/logo/xlogo2_footer.png.pagespeed.ic.BNM5MWvE-z.webp"></img>
          </a>
      </div>
      <div className="footer-title">
          <div className="footer-pera">
              <p className="info1">Receive updates and latest news direct from Simply enter.</p>
          </div>
      </div>
      <div class="footer-number">
      <h4><span>+564 </span>7885 3222</h4>
      <p>youremail@gmail.com</p>
      </div>
      </div>
                  </div>
                     <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5" id="section-container">
      <div class="single-footer-caption mb-50">
      <div class="footer-tittle">
      <h4>Location </h4>
        <ul>
           <li><a href="#">Advanced</a></li>
           <li><a href="#"> Management</a></li>
           <li><a href="#">Corporate</a></li>
           <li><a href="#">Customer</a></li>
           <li><a href="#">Information</a></li>
        </ul>
      </div>
      </div>
         
          
                   </div>
               <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                   <div class="single-footer-caption mb-50">
                     <div class="footer-tittle">
                     <h4>Explore</h4>
                       <ul>
                     <li><a href="#">Cookies</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Proparties</a></li>
                     <li><a href="#">Licenses</a></li>
                    </ul>
                    </div>
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8" id="foot">

              <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                 <h4>Location</h4>
                    <div class="footer-pera">
                    <p class="info1">Subscribe now to get daily updates</p>
                   </div>
              </div>
            
            
              <div class="footer-form">
                 <div id="mc_embed_signup">
                     <form target="_blank">
                     <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"/>
                   
                   
                          <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm">Send</button>
                           
                           <div class="mt-10 info">
                               
                           </div>
                     </form>
                 </div>
                 </div>
              
              </div>
              
              </div>
      </div>
      </div>
  </div>;
}

export default Footer ;
