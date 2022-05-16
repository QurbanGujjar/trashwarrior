// import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import React, { useEffect, useRef, useState } from "react";
import "../App.css";
// import { Search, GpsFixed } from "@material-ui/icons";
import data from '../convertcsv.json'
// import { ownerDocument } from "@material-ui/core";
const apiKey = "AIzaSyCF_b0avoAPa-h76ELIZcudKMzrvxhAbBM";
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";

// load google map api js

function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}
const extractAddress = (place) => {
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",

    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
      let ZipCode =Number(value)
      // console.log(ZipCode)
      data.map((row,index)=>{
       if(row.zip===ZipCode){
        address.zip = index
         return address.zip
        // return address.zip =row
       }

      })
      // return address.zip
    }

    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};
const FirstForm = ({rate}) => {

  let [serviceArea, setServiceArea] = useState({
    county: "",
    city: "",
    zip: "",
    junk_removal:"$75.00",
    cardboard_removal:"$125.00",
    dump_trailer:"$225.00",
  });
  // const [serviceArea ,setServiceArea]=useState({})

  const searchInput = useRef(null);
  const [address, setAddress] = useState({});
  // const [services,setServices] =useState({})



  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if(window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&country=usa&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  }

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
    // console.log(place)
    // serviceSolution()
  }
  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));
  }
  const reverseGeocode = ({ latitude: lat, longitude: lng}) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    searchInput.current.value = "Getting your location...";
    fetch(url)
        .then(response => response.json())
        .then(location => {
          const place = location.results[0];
          const _address = extractAddress(place);
          setAddress(_address);
          searchInput.current.value = _address.plain();
        })
  }
  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        reverseGeocode(position.coords)
      })
    }
  }
  const serviceSolution=()=>{
    // console.log("serviceSolution")
    // setServices()
    // console.log(address.zip)
  }
  // load map script after mounted




 useEffect(() => {
      initMapScript().then(() => initAutocomplete())

    }, []);


useEffect(() => {
    console.log()
    setServiceArea(data[address.zip])
  }, [address.zip]);
  return (
    <div className='menu_body'>

          <div className='item'>
            <p>Service starts at</p>
            <h2>  {serviceArea?.junk_removal ? serviceArea.junk_removal:rate} </h2>

            {/*  {console.log(services)} */}
            {/* <h2>  { serviceArea &&  rate==="75"?serviceArea.junk_removal:rate==='85'?serviceArea.cardboard_removal:rate==='135'?serviceArea.dump_trailer}  </h2> */}
         {/* <h2>{rate}</h2> */}
         </div>
          <div className='item'>

            <p>
              {address.zip? "Yes we Deliever":"Not" }
          {/* {serviceArea}<span>{ address.zip==="Yes we DElever"?address.zip:"We cannot supply there"}</span> */}
          </p>

            <input
            ref={searchInput}
            type='text'
            placeholder='Search location....'
          />

          </div>
          <div className='item'>
          <Link to='/booking'> <button >Book Now</button></Link>
          </div>
          {/* <div className='item'>
         <p>  {serviceArea?.junk_removal} </p>
          </div> */}
        </div>
  )
}

export default FirstForm
