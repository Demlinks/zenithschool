import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
interface CalendarComponentProps {
  events?: { title: string; start: Date; end: Date; }[];
}
const CalendarComponent: React.FC<CalendarComponentProps> = ({ events = [] }) => {
  return (
    <div className="mb-[17px] xl:mb-[42px] h-[300px] md:h-[350px] xl:h-[400px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        className="calendar-styling"
      />
      {/* <div>{evente}</div> */}
    </div>
  );
};

export default CalendarComponent;
