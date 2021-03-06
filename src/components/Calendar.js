import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { formatDateString, transformDatesToMoment } from "../services/helpers";
import "moment/locale/sv";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/styles/Datepicker.css";

export default class Calendar extends Component {
  state = {
    startDate: moment(),
  }

  handleChange = (date) => {
    this.setState({ startDate: date });

    /* Component does not always receive these props,
    avoid errors by first checking if they exist. */
    const { updateDate, fetchSelectedDate, findSessionsForSelectedDate } = this.props;

    if (updateDate) {
      const newDate = formatDateString(date);
      updateDate(newDate);

      if (findSessionsForSelectedDate) {
        findSessionsForSelectedDate(newDate);
      }
    }

    if (fetchSelectedDate) {
      const formattedDateString = formatDateString(date);
      const encodedDate = encodeURIComponent(formattedDateString);
      fetchSelectedDate(encodedDate);
    }
  }

  renderBookingDatePicker = () => {
    const { startDate } = this.state;
    const { fullyBookedDates } = this.props;

    return(
      <React.Fragment>
        <DatePicker
          locale="sv"
          minDate={moment()}
          dateFormat="YYYY/MM/DD"
          selected={startDate}
          onChange={this.handleChange}
          excludeDates={fullyBookedDates}
        />
      </React.Fragment>
    );
  }

  /* Admin datepicker does not have a minDate,
  since admin should be able to select bookings from past dates. */
  renderAdminDatePicker = () => {
    const { startDate } = this.state;
    const { bookedDates, fullyBookedDates } = this.props;

    const highlightedDates = [{
      "bookings" : transformDatesToMoment(bookedDates)
    },
    {
      "fullyBooked": transformDatesToMoment(fullyBookedDates)
    }];

    return(
      <React.Fragment>
        <DatePicker
          inline
          dateFormat={ "YYYY/MM/DD" }
          selected={ startDate }
          onChange={ this.handleChange }
          highlightDates={ highlightedDates }
        />
      </React.Fragment>
    );
  }

  render() {
    const { showAdminCalendar } = this.props;
    return (
      <React.Fragment>
        { showAdminCalendar
          && (
          <React.Fragment>
            { this.renderAdminDatePicker() }
          </React.Fragment>
          )
        }
        { !showAdminCalendar
          && (
          <React.Fragment>
            { this.renderBookingDatePicker() }
          </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
};