import React from "react";
import Home from "./components/home/Home"
// import Contacts from "./components/contacts/Contacts";
import CounterClick from "./container/counter/CounterClick";
import Parent from "./container/parent/Parent";

const app = ()=>{
  return (
    <div>
        <Home></Home>
        <hr/>
        <CounterClick initNum={200}/>
      {/*
        <Contacts/>
        
        <br/>
      */}
      <hr/>
      <Parent></Parent>

  </div>
  );
}

export default app;