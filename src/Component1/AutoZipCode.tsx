import { ChangeEvent,useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";

import "@reach/combobox/styles.css";
// import "styles.scss";

const  AutoZipCode =({setServiceArea})=> {
    const [ areaValue,setAreaValue]=useState('')
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();
//   useJsApiLoader

  const { isLoaded } = useLoadScript({
    // id: 'google-map-script',    &libraries=places&callback=initAutocomplete
    googleMapsApiKey: "AIzaSyCF_b0avoAPa-h76ELIZcudKMzrvxhAbBM",
    libraries:['places'],

  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    //
  };

  const handleSelect = (val: string): void => {
    // setValue(val, false);
    setValue(val, false)
    // console.log(val)
    // setAreaValue(val)
    // zipCod()


  };
  const zipCod=(description)=>{
      console.log(description)
    setServiceArea(description)

  }

  const renderSuggestions = (): JSX.Element => {
    const suggestions = data.map(({ place_id, description }: any) => (
      <ComboboxOption key={place_id} value={description}  onClick={()=>zipCod(description)  }/>
    ));

    return (
      <>
        {suggestions}

      </>
    );
  };

  return (
    <div className="App">
    {

        isLoaded &&
        <Combobox onSelect={handleSelect} aria-labelledby="demo">
       <ComboboxInput
        //   style={{ maxWidth: "100%" }}
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
    }

    </div>
  );
}

export default  AutoZipCode
