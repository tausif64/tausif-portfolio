
const portfolio = {
    render: () => {
      return `
        <section class="text-light portfolio">
          <h2 class="mx-5 mb-2 after-b">Projects</h2>
          <div class="row w-100 p-3">
            <div class="col-lg-6 col-md-12 col-sm-12 px-lg-5 border border-start-0 border-top-0 border-bottom-0">
                <div class="card mt-3 bg-transparent">
                  <img src="/assets/img/shiva.png" height="300px" alt="Project 1" />
                  <div class="p-3 p-details">
                    <div class="mb-2 mt-3">Project Name : <a target="_blank" href="https://shivaenvirolab.com/">SHIVA ENVIRO LAB AND RESEARCH CENTRE</a></div>
                    <div class="mb-2">My role : Front End Developer</div>
                    <div class="mb-2">
                      Discription : This website was created with the intention of monitoring the environment and learning more about it, also encouraging others to protect the environment.
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 px-5">
                <div class="card mt-3 bg-transparent">
                    <img src="/assets/img/idea.png" height="300px" alt="Project 2" />
                      <div class="p-3 p-details">
                        <div class="mb-2 mt-3">Project Name : <a target="_blank" href="http://www.idea4homes.com/">IDEA 4 HOMES</a></div>
                        <div class="mb-2">My role : Front End Developer</div>
                        <div class="mb-2">
                          Discription : This website was made to promote clients' businesses, and demonstrate the services to the customers.
                        </div>
                      </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 px-5">
                <div class="card mt-3 bg-transparent">
                    <img src="/assets/img/project-3.png" height="300px" alt="Project 3" />
                      <div class="p-3 p-details">
                        <div class="mb-2 mt-3">Project Name : <a target="_blank" href="https://modelschoolkanke.com/">CM SCHOOL OF EXELLENCE</a></div>
                        <div class="mb-2">My role : Front End Developer</div>
                        <div class="mb-2">
                          Discription : This website was made to promote clients' businesses, and demonstrate the services to the customers.
                        </div>
                      </div>
                </div>
            </div>
            
          </div>
        </section>
      `;
    }
} 


export default portfolio