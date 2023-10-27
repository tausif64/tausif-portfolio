

const about = {
    render: () => {
        return `
        <section>
          <div class="about text-light">
            <div class="row mt-5 w-100">
              <div class="col-lg-4 col-md-12 col-sm-12 be px-5 py-4">
                <div class="d-flex flex-wrap justify-content-center align-item-center">
                  <div class="flex-column text-center" style="height=215px; width=200px;">
                    <img src="/assets/img/dp.jpg" height="214px" width="200px" class="rounded-circle" height="auto" width="200px" alt="Dispaly Picture">
                    
                    <div class="info">
                      <h3 class="mt-3 mb-2">Tausif Ansari</h3>
                      <div class="mail">Email : developer.642003@gmail.com</div>
                      <div>Phone : +91 90766 42874</div>
                      <div>Address : Ranchi Jharkhand (834001), India</div>
                      <div>Job/Intern : HITCS PVT LTD </div>
                    </div>
                  </div>                  
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12 px-5 py-4 be">
                <h4 class="after">Who am I ?</h4>
                <h5 class="mt-4 mb-2">A Web Designer / Developer Located In Our Lovely Earth</h5>
                <div class="my-3">
                  Hi! folk's i'm a second year CS(IT) student at Marwari College Ranchi. I love to solve problems.Whether it's finding the most elegant way to write a line of code or figuring out which chord fits best into a progression, I love the challenge of finding a way and discovering solutions.Maybe that's why i love my passion of coding.
                </div>
                
                <div class="download-cv">
                  <a target="_blank" href="/assets/details/Tausif_Resume.pdf"><button>Download My CV</button></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12 px-5 py-4">
                <div class="skills text-light">
                <h4 class="after">Skills</h4>
                <div class="d-flex flex-column mt-4">
                    <div data-width="80%" id="html" class="skill-progress html">
                        <div class="language">HTML 5</div>
                        <div class="progress-bar"></div>
                    </div>
                    <div data-width="60%" class="skill-progress css">
                        <div class="language">CSS 3</div>
                        <div class="progress-bar"></div>
                    </div>
                    <div data-width="50%" class="skill-progress js">
                        <div class="language">JS</div>
                        <div class="progress-bar"></div>
                    </div>
                    <div data-width="30%" class="skill-progress bootstrap">
                        <div class="language">Bootstrap 5</div>
                        <div class="progress-bar"></div> 
                    </div>
                    <div data-width="20%" class="skill-progress cpp">
                        <div class="language">C++</div>
                        <div class="progress-bar"></div>
                    </div>
              </div>
          </div>
              </div>
            </div>
          </div>
        </section>
        `;
    }
}

export default about