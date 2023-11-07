import React, { useState } from "react";
import Search from "../assets/search.png";

import { InfinitySpin } from "react-loader-spinner";
import Details from "./Details";

const Form = () => {
  const [postalCode, setPostalCode] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      const data = await response.json();
      setDetails({
        country: data.country,
        state: data.places[0].state,
        place: data.places[0]["place name"],
      });
    } catch (error) {
      alert("Please Enter Valid Pincode Try 400093");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!navigator.onLine) {
      alert("OOPS! You are offline.");
      return;
    }
    getDetails();
  };

  return (
    <div className="w-full flex justify-center items-center">
      {!loading ? (
        !details ? (
          <form>
            <div className="flex items-center w-full relative">
              <input
                required
                className="outline-none rounded-lg border border-[#999999] px-3 py-3 w-full text-2xl"
                type="text"
                placeholder="Enter postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <img
                alt="search"
                src={Search}
                onClick={() => handleSubmit()}
                className="h-[28px] right-[23px] absolute cursor-pointer"
              />
            </div>
          </form>
        ) : (
          <Details data={details} />
        )
      ) : (
        <InfinitySpin />
      )}
    </div>
  );
};

export default Form;
