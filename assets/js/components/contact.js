

const contact = {
    render: () => {
      return `
        <section class="contact text-light">
          <h5 class="text-center mt-4">
          &#8220;Develop a passion for learning. If you do, you will never cease to grow.&#8221;
          </h5>
          <div class="row w-100">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="d-flex mt-5 justify-content-center align-items-center">
                <img src="/assets/img/contact.svg" height="400px" width="90%" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="form mt-5">   
                  <div class="form-header">
                    <h4 class="text-center">Get in Touch</h4>
                  </div>
                <form class="" name="form1" class="form1" 
                    action="https://formsubmit.co/2b9174b73a1c59cf170c76448da99fe8" 
                    method="POST">
  
                        <input id="name" class="my-1" type="text" name="name" placeholder="Your Name" required>
                        <input id="email" class="my-1" type="email" name="email" placeholder="Email Address" required>   
                        <input id="subject" class="my-1" type="text" name="subject" placeholder="Subject" required>                 
                        <textarea id="textArea" class="my-1" name="message" placeholder="Type your Message" required></textarea>
                        <input type="hidden" name="_captcha" value="false">
                        
                        <div id="main" class="my-3 w-100 text-center">
                            <button id="lnch" type="submit" value="Send">Send 
                            <span id="lnch_btn"><i class="fas fa-space-shuttle"></i></span>
                            </button>
                            
                          </div>
                  </form>
              </div>
            </div>
          </div>
  
        </section>
      `;
    }
}


export default contact;