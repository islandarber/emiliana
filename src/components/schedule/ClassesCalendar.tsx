import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

interface Event {
  title: string;
  start: string; // ISO date string
  end?: string;
  description?: string;
}

interface ClassesCalendarProps {
  events: any[]; // we’ll keep it flexible since it comes from FullCalendar
  onEventClick?: (event: any) => void;
}

const ClassesCalendar: React.FC<ClassesCalendarProps> = ({
  events,
  onEventClick,
}) => {
  const calendarRef = useRef<FullCalendar>(null);

  // Responsively switch between week grid and list view
  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (!calendarApi) return;

    const handleResize = () => {
      if (window.innerWidth < 768) {
        calendarApi.changeView("listWeek");
      } else {
        calendarApi.changeView("timeGridWeek");
      }
    };

    // Set initial view + listen for resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-primary-100">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        events={events}
        height="auto"
        nowIndicator
        editable={false}
        selectable={false}
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        allDaySlot={false}
        eventClick={(info) => {
          if (onEventClick) onEventClick(info.event);
        }}
        eventContent={(arg) => (
          <div className="bg-primary-200 text-primary-800 rounded-md px-2 py-1 text-sm font-medium truncate">
            <div>{arg.event.title}</div>
            <div className="text-[13px] font-semibold opacity-70">
              {arg.timeText}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ClassesCalendar;
