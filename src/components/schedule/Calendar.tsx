import React, { useEffect, useState } from "react";

// Types for Google Calendar events
interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
  htmlLink: string;
}

interface Session {
  id: string;
  title: string;
  start: string;
}

interface InterestFormProps {
  session: Session;
  onClose: () => void;
  language: "en" | "gr";
}

const InterestForm: React.FC<InterestFormProps> = ({ session, onClose, language }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>
          {language === "en"
            ? `Interested in ${session.title}?`
            : `Σου αρέσει το ${session.title};`}
        </h2>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="interest-form"
        >
          <input type="hidden" name="session" value={session.title} />
          <label>{language === "en" ? "Name:" : "Όνομα:"}</label>
          <input type="text" name="name" required />
          <label>{language === "en" ? "Email:" : "Email:"}</label>
          <input type="email" name="_replyto" required />
          <label>{language === "en" ? "Phone:" : "Τηλέφωνο:"}</label>
          <input type="text" name="phone" />
          <label>{language === "en" ? "Message:" : "Μήνυμα:"}</label>
          <textarea name="message"></textarea>
          <div className="modal-buttons">
            <button type="submit">
              {language === "en" ? "Send" : "Αποστολή"}
            </button>
            <button type="button" onClick={onClose}>
              {language === "en" ? "Cancel" : "Ακύρωση"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface CalendarProps {
  calendarId: string;
  apiKey: string;
  language: "en" | "gr";
}

const GoogleCalendarInterest: React.FC<CalendarProps> = ({
  calendarId,
  apiKey,
  language,
}) => {
  const [events, setEvents] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const now = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${now}&singleEvents=true&orderBy=startTime`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const sessions: Session[] = data.items.map((event: CalendarEvent) => ({
          id: event.id,
          title: event.summary,
          start: event.start.dateTime || event.start.date || "",
        }));
        setEvents(sessions);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [calendarId, apiKey]);

  const formatDate = (isoString: string) => {
    const dateObj = new Date(isoString);
    return dateObj.toLocaleString(language === "en" ? "en-GB" : "el-GR", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="calendar-interest-component">
      <h2>{language === "en" ? "Upcoming Sessions" : "Επερχόμενες Συνεδρίες"}</h2>
      {loading ? (
        <p>{language === "en" ? "Loading..." : "Φόρτωση..."}</p>
      ) : events.length === 0 ? (
        <p>{language === "en" ? "No upcoming sessions." : "Δεν υπάρχουν συνεδρίες."}</p>
      ) : (
        <div className="sessions-list">
          {events.map((session) => (
            <div key={session.id} className="session-card">
              <h3>{session.title}</h3>
              <p>{formatDate(session.start)}</p>
              <button onClick={() => setSelectedSession(session)}>
                {language === "en" ? "I'm Interested" : "Με ενδιαφέρει"}
              </button>
            </div>
          ))}
        </div>
      )}

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

export default GoogleCalendarInterest;
