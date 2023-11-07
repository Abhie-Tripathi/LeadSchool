import React from "react";
import Form from "./components/Form";
import Find from "./assets/find-icon.png"

const App = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-700">
      <div className="flex-col md:flex-row py-5 md:py-0 flex gap-5 md:w-[650px] md:h-[300px] border bg-white border-[#999999] rounded-lg items-center px-10">
      <img src={Find} className="h-[230px]" alt="FindImage"/>
      <Form />
      </div>
    </div>
  );
};

export default App;
