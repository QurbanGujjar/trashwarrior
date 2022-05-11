import React from "react";
import "./timeDate.css";

const TimeAndDate = () => {
  return (
    <div className='time_date'>
      <div className='time_date_body'>
        <div className='time_title'>
          <p>Pickup</p>
        </div>
        <div className='time_desc1'>
          <p>
            Time zone is America/Los_Angeles based on the address/zip code you
            just entered
          </p>{" "}
        </div>

        <div className='time_desc2'>
          {" "}
          <p>
            Provider will arrive within half an hour of your selected time. Eg.,
            if you select 11 AM, provider will target to arrive between 10:30 -
            11:30 AM
          </p>
        </div>
        <div className='time_Date_input'>
         <div className="date">
         <label htmlFor='date' className="dtl1">Date</label>
          <input type='date' id='date' />
         </div>

        <div className="time">
        <label htmlFor='time' className="dtl2">Time</label>
          <input type='text' name='' id='time' />
        </div>
        </div>
        <div className='time_frequently'>
          <p>Frequency</p>
        </div>
        <div className='time_desc3'>
          <p>
            If you book a recurring frequency, you will be only charged for the
            first booking today. Your card will then be charged automatically 4
            days ahead of your next booking.
          </p>
        </div>
        <div className='time_radiobtn'>
          <input type='radio' name='charge' id='once' />
          <label htmlFor='once'>Once</label>
          <input type='radio' name='charge' id='weekly' />
          <label htmlFor='weekly'>Weekly</label>
          <input type='radio' name='charge' id='monthly' />
          <label htmlFor='monthly'>Monthly</label>
        </div>
        <div className='time_desc4'>
          <p>Need help? We are here for you! You can chat with us here.</p>
        </div>
        <div className='continue_btn'>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default TimeAndDate;
