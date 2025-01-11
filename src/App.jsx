import React from "react";
import FrontApp from "./front/App";
import AdminApp from "./admin/App";

function App(){
  const pathname = window.location.pathname;
  
  if(pathname.startsWith('/admin')){
    return <AdminApp />;
  }
  return <FrontApp />
}

export default App;