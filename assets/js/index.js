import { parsRequestUrl } from "./utils.js";


import home from "./components/home.js";
import about from "./components/about.js";
import ErrorPage from "./components/ErrorPage.js";
import portfolio from "./components/portfolio.js";
import contact from "./components/contact.js";





const routes = {
    '/': home,
    '/about': about,
    '/portfolio': portfolio,
    '/contact': contact
}

const router = () => {
    const request = parsRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') + 
    (request.id? '/:id': '') +
    (request.verb ? `/${request.verb}` : '');

    const screen = routes[parseUrl] ? routes[parseUrl] : ErrorPage;

    let main = document.getElementById("main-container");
    
    main.innerHTML = screen.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);