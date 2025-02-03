import components from '../front/pages/index.js';
const path = window.location.pathname.replace(/^\//, "");
console.log(components);

const seo = [
  { route: "/product6", url: "new-page", file:"product"},
  { route: "/product/4", url: "new-page1", file:"product"},
  { route: "/product/3", url: "new-page2", file:"product"},
  { route: "/static/3", url: "static4", file:"static"},
  { route: "/static/2", url: "static1", file:"static"},
];

let product_url = null;
let static_page_url = null;

seo.forEach((item) => {
  if (item.url === path) {
    if(item.file == "product"){
      product_url = item.url;
    }else if(item.file == "static"){
      static_page_url = item.url;
    }
  }
});


const routes = [
  { path: "/", element: <components.HomePage /> },
  { path: "/services", element: <components.ServicesPage /> },
  { path: "/about", element: <components.AboutPage /> },
  { path: "/contact", element: <components.ContactPage /> },
  { path: static_page_url ? `${static_page_url}` : "/static/:id", element: <components.StaticPage /> },
  { path: product_url ? `${product_url}` : "/product/:id", element: <components.Product /> }, 
  { path: "*", element: <components.NotFoundPage /> },
];


export default routes;
