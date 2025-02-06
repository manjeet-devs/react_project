import React from 'react';
import ProductPage from "./ProductPage"
import NotFound from "./NotFoundPage";
import StaticPage from "./StaticPage"
import CategoryPage from "./CategoryPage"
import { useParams } from "react-router-dom";

const SetComponent = (getpage) => {
  const { path } = useParams();  
  const seo = [
    { url: "new-page1", file:"product"},
    { url: "new-page2", file:"product"},
    { url: "new-page3", file:"product"},
    { url: "static2", file:"static"},
    { url: "static1", file:"static"},
    { url: "category121", file:"category"},
    { url: "category122", file:"category"},
    { url: "category123", file:"category"},
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