import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { Search, GpsFixed } from "@material-ui/icons";
import data from '../convertcsv.json'
import { ownerDocument } from "@material-ui/core";

// const apiKey = import.meta.env.example.VITE_APP_GMAP_API_KEY;
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
    rowData:{},
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      const rowData = this.rowData ? this.rowData + ", " : {};

      return city + zip + state + this.country + this.rowData;
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
      // address.zip = value;
      let ZipCode =Number(value)
      console.log(ZipCode)
      data.map((row,index)=>{
       if( row.zip==ZipCode){
        // setServices(row)
        address.rowData=row
         return address.zip ="Yes we DElever"
       }

      })
    }

    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};

const LastTest = () => {


    const searchInput = useRef(null);
    const [address, setAddress] = useState({});
    const [services,setServices] =useState({})


    // init gmap script
    const initMapScript = () => {
      // if script already loaded
      if(window.google) {
        return Promise.resolve();
      }
    //   const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
      const src = `${mapApiJs}?key=${apiKey}&country=usa&libraries=places&v=weekly`;
      return loadAsyncScript(src);
    }

    // do something on address change
    const onChangeAddress = (autocomplete) => {
      const place = autocomplete.getPlace();
      setAddress(extractAddress(place));
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





    // load map script after mounted
    useEffect(() => {
      initMapScript().then(() => initAutocomplete())
    }, []);





  return (
    <div className='App'>
      <div>
      <div className='address'>
          {/* <p>
            City: <span>{address.city}</span>
          </p>
          <p>
            State: <span>{address.state}</span>
          </p> */}
          <p>
            Zip: <span>{address.zip==="Yes we DElever"?address.zip:"We cannot supply there"}</span>
          </p>
          {/* <p>
            Country: <span>{address.country}</span>
          </p> */}

        </div>
        <div className='search'>
          {/* <span>
            <Search />
          </span> */}
          <input
            ref={searchInput}
            type='text'
            placeholder='Search location....'
          />
          {/* <button onClick={findMyLocation}>
            <GpsFixed />
          </button> */}
        </div>


      </div>
    </div>
  );
};

export default LastTest;
