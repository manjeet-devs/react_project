import React from 'react';
import ProductPage from "./ProductPage"
import NotFound from "./NotFoundPage";
import StaticPage from "./StaticPage"
import CategoryPage from "./CategoryPage"
import { useParams } from "react-router-dom";

const SetComponent = (getpage) => {
  const { path } = useParams();  
  const seo = [
    { route: "/product/6", url: "new-page1", file:"product"},
    { route: "/product/4", url: "new-page2", file:"product"},
    { route: "/product/3", url: "new-page3", file:"product"},
    { route: "/static/3", url: "static2", file:"static"},
    { route: "/static/2", url: "static1", file:"static"},
    { route: "/category/2", url: "category121", file:"category"},
    { route: "/category/5", url: "category122", file:"category"},
    { route: "/category/3", url: "category123", file:"category"},
  ];
  let isSeoUrl = null;
  seo.forEach((item) => {
    if (item.url === path) {
      if(item.file == "product"){
        isSeoUrl = item.file;
      }else if(item.file == 'static'){
        isSeoUrl = item.file;
      }else if(item.file == 'category'){
        isSeoUrl = item.file;
      }
    }
  });
     console.log(path,isSeoUrl,"manjeet");
     

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