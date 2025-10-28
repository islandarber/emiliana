import React, { useEffect, useState } from "react";
import ClassesCalendar from "./ClassesCalendar";
import { InterestForm } from "./InterestForm";

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

interface CalendarProps {
  language?: "en" | "gr";
}

const Calendar: React.FC<CalendarProps> = ({ language = "en" }) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<CalendarEvent | null>(
    null
  );

  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const now = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
      )}/events?key=${API_KEY}&timeMin=${now}&singleEvents=true&orderBy=startTime`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.items) setEvents(data.items);
      } catch (err) {
        console.error("Error fetching events", err);
      } finally {
        setLoading(false);
      }
    };
    if (CALENDAR_ID && API_KEY) fetchEvents();
  }, [CALENDAR_ID, API_KEY]);

  // Transform Google Calendar data to FullCalendar format
  const formattedEvents = events.map((e) => ({
    id: e.id,
    title: e.summary,
    start: e.start.dateTime || e.start.date,
    end: e.end?.dateTime || e.end?.date,
    extendedProps: e, // keep original data for InterestForm
  }));

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-300 mx-auto" />
        <p className="mt-4 text-gray-600 text-lg">
          {language === "en"
            ? "Loading calendar..."
            : "Φόρτωση ημερολογίου..."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <ClassesCalendar
        events={formattedEvents}
        onEventClick={(event) =>
          setSelectedSession(event.extendedProps as CalendarEvent)
        }
      />

      {selectedSession && (
        <InterestForm
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
          language={language}
        />
      )}
    </div>
  );
};

export default Calendar;
