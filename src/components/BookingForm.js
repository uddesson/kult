import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "./Calendar";
import clock from "../assets/images/clock.png";
import calendar from"../assets/images/calendar.svg";
import persons from"../assets/images/person.png";

export default function BookingForm(){
  return(
    
    <form action="/api/create_booking/" method="POST">
    <div className="bookings">
    <label htmlFor="create_date"></label>
    <div className="box">
    <img className="icons"src={calendar} alt="calendar"/>
    </div>
    <Calendar/>
    <label htmlFor="create_session"></label>
    <div className="box">
    <img className="icons"src={clock} alt="clock"/>
    </div>
      <select name="create_session">
        <option value="18:00">18:00</option>
        <option value="21:00">21:00</option>
      </select>
     <label htmlFor="create_guests"></label>
     <div className="box">
     <img className="icons"src={persons} alt="persons"/>
     </div>

      <br />

      <select name="create_guests">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      </div>
      <div class="infos">
        <p>Fyll i dina kontaktuppgifter</p>
        </div>
      <div className="contact">
      
      <br/>
      <label htmlFor="create_name"></label>
      <br/>
      <input placeholder="Namn" name="create_name" id="create_name"/>
      <br/>
      <label htmlFor="create_email"></label>
      <br/>
      <input placeholder="Email" name="create_email" id="create_email"/>
      <br/>
      <label htmlFor="create_phone"></label>
      <br/>
      <input placeholder="Telefon" name="create_phone" id="create_phone" required/>
      <br/>
      </div>

      <div className="bookbutton">
      <button className="findtable" type="submit">BOKA BORD</button>
     </div>
      <br />
      <br />

    </form>
  )
}