import components from '../front/pages/index.js';
const path = window.location.pathname.replace(/^\//, "");

const seo = [
  { route: "/product/6", url: "new-page1", file:"product"},
  { route: "/product/4", url: "new-page2", file:"product"},
  { route: "/product/3", url: "new-page3", file:"product"},
  { route: "/static/3", url: "static2", file:"static"},
  { route: "/static/2", url: "static1", file:"static"},
  { route: "/category/2", url: "category121", file:"category"},
  { route: "/category/2", url: "category122", file:"category"},
  { route: "/category/2", url: "category123", file:"category"},
];

let product_url = null;
let static_page_url = null;
let category_url = null;

seo.forEach((item) => {
  if (item.url === path) {
    if(item.file == "product"){
      product_url = item.url;
    }else if(item.file == "static"){
      static_page_url = item.url;
    }else if(item.file == 'category'){
      category_url = item.url;
    }
  }
});

console.log("reached...");

const routes = [
  { path: "/", element: <components.HomePage /> },
  { path: "/services", element: <components.ServicesPage /> },
  { path: "/about", element: <components.AboutPage /> },
  { path: "/contact", element: <components.ContactPage /> },
  { path: static_page_url ? `${static_page_url}` : "/static/:id", element: <components.StaticPage /> },
  { path: product_url ? `${product_url}` : "/product/:id", element: <components.Product /> }, 
  { path: category_url ? `${category_url}` : "/category/:id", element: <components.Product /> }, 
  { path: "/:path", element: <components.SetComponent /> }
];


export default routes;
