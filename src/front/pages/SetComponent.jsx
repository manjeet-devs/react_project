import React from 'react';
import ProductPage from "./ProductPage"
import NotFound from "./NotFoundPage";
import StaticPage from "./StaticPage"
import CategoryPage from "./CategoryPage"
import { useParams } from "react-router-dom";

const SetComponent = () => {
  const { path } = useParams();  
  const seo = [
    { url: "new-page1", route_path:"product"},
    { url: "new-page2", route_path:"product"},
    { url: "new-page3", route_path:"product"},
    { url: "static2", route_path:"static"},
    { url: "static1", route_path:"static"},
    { url: "category121", route_path:"category"},
    { url: "category122", route_path:"category"},
    { url: "category123", route_path:"category"},
  ];
  let isSeoUrl = null;
  seo.forEach((item) => {
    if (item.url === path) {
      if(item.route_path == "product"){
        isSeoUrl = item.route_path;
      }else if(item.route_path == 'static'){
        isSeoUrl = item.route_path;
      }else if(item.route_path == 'category'){
        isSeoUrl = item.route_path;
      }
    }
  });
     

  return (
    <> 
     {isSeoUrl && (isSeoUrl === 'product') ? <ProductPage /> :  
      isSeoUrl && (isSeoUrl === 'category') ? <CategoryPage /> :  
      isSeoUrl && (isSeoUrl === 'static') ? <StaticPage /> :  
                                            <NotFound />}
    </>
  );
}
export default SetComponent;