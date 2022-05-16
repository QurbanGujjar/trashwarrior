import React, { useState } from "react";
import FirstForm from "./FirstForm";
import "./main_menu.css";
import NavBar from "./NavBar";

const MainPage = () => {
  const [service, setService] = useState("J Removel");
  const rate = { JR: 87, CR: 97, DR: 137 };

  return (
    <div className=''>
      <div className='main_menu'>
        <NavBar setService={setService} service={service} />
        {service === "J Removel" && (
          <FirstForm
            rate={rate.JR}

          />
        )}
        {service === "C Removel" && (
          <FirstForm
            rate={rate.CR}

          />
        )}
        {service === "D Removel" && (
          <FirstForm
            rate={rate.DR}

          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
