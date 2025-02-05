import React from 'react';
import Product from "./Product"
import NotFound from "./NotFoundPage";
import StaticPage from "./StaticPage"

const SetComponent = () => {
  const isSeoProductUrl = true;
  const isSeoStaticUrl = true;
  return (
    <> 
      {isSeoProductUrl ? <Product /> : isSeoStaticUrl ? <StaticPage /> : <NotFound />}
    </>
  );
}
export default SetComponent;