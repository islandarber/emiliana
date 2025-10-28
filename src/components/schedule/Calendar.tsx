import React, { useEffect, useState } from "react";

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

interface InterestFormProps {
  session: CalendarEvent;
  onClose: () => void;
  language: "en" | "gr";
}

const InterestForm: React.FC<InterestFormProps> = ({ session, onClose, language }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              {language === "en" ? "Thank you!" : "Ευχαριστούμε!"}
            </h2>
            <p className="text-gray-600">
              {language === "en" 
                ? "Your interest has been sent to Emiliana!" 
                : "Το ενδιαφέρον σας έχει σταλεί στην Emiliana!"}
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {language === "en"
                ? `Interested in "${session.summary}"?`
                : `Σας ενδιαφέρει το "${session.summary}";`}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="session" value={session.summary} />
              <input type="hidden" name="session_date" value={session.start.dateTime || session.start.date} />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "en" ? "Name:" : "Όνομα:"}
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "en" ? "Email:" : "Email:"}
                </label>
                <input 
                  type="email" 
                  name="_replyto" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "en" ? "Phone:" : "Τηλέφωνο:"}
                </label>
                <input 
                  type="text" 
                  name="phone" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === "en" ? "Message:" : "Μήνυμα:"}
                </label>
                <textarea 
                  name="message" 
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                  placeholder={language === "en" 
                    ? "Tell Emiliana why you're interested in this session..." 
                    : "Πείτε στην Emiliana γιατί σας ενδιαφέρει αυτή η συνεδρία..."}
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-primary-300 hover:bg-primary-400 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-50"
                >
                  {isSubmitting 
                    ? (language === "en" ? "Sending..." : "Αποστολή...") 
                    : (language === "en" ? "Send Interest" : "Αποστολή Ενδιαφέροντος")}
                </button>
                <button 
                  type="button" 
                  onClick={onClose}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md transition-colors"
                >
                  {language === "en" ? "Cancel" : "Ακύρωση"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

interface CalendarProps {
  language?: "en" | "gr";
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ 
  language = "en",
  className = "" 
}) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<CalendarEvent | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Environment variables from .env file (must use VITE_ prefix for client-side)
  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
  const API_KEY = import.meta.env.VITE_API_KEY;

  console.log("Using Calendar ID:", CALENDAR_ID);
  console.log("Using API Key:", API_KEY);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const now = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now}&singleEvents=true&orderBy=startTime&maxResults=10`;
      
      console.log("📅 Fetching calendar events from:", url);
      console.log("🔑 Using Calendar ID:", CALENDAR_ID);
      console.log("🗝️ Using API Key:", API_KEY.substring(0, 10) + "...");
      
      try {
        const response = await fetch(url);
        
        console.log("📡 Response status:", response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ API Error Response:", errorText);
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log("✅ API Response:", data);
        
        if (data.items) {
          console.log("📅 Found events:", data.items.length);
          setEvents(data.items);
        } else {
          console.log("📅 No events found in response");
          setEvents([]);
        }
      } catch (error) {
        console.error("❌ Error fetching calendar events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    if (CALENDAR_ID && API_KEY) {
      fetchEvents();
    } else {
      console.error("❌ Missing CALENDAR_ID or API_KEY");
      setLoading(false);
    }
  }, [CALENDAR_ID, API_KEY]);

  const formatDate = (startObj: { dateTime?: string; date?: string }) => {
    const isoString = startObj.dateTime || startObj.date || "";
    const dateObj = new Date(isoString);
    return dateObj.toLocaleString(language === "en" ? "en-GB" : "el-GR", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  // Helper functions for calendar generation
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.start.dateTime || event.start.date || '');
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthNames = language === "en" 
    ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    : ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];

  const dayNames = language === "en"
    ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    : ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"];

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-300 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            {language === "en" ? "Loading calendar..." : "Φόρτωση ημερολογίου..."}
          </p>
        </div>
      ) : (
        /* Custom Calendar */
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-200">
          {/* Calendar Header */}
          <div className="bg-gradient-to-r from-primary-300 to-primary-400 p-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-primary-500 rounded-lg transition-colors text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <h3 className="text-2xl font-bold text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-primary-500 rounded-lg transition-colors text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((day) => (
                <div key={day} className="p-3 text-center font-semibold text-gray-600 text-sm">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty cells for days before month starts */}
              {Array.from({ length: getFirstDayOfMonth(currentDate) }, (_, index) => (
                <div key={`empty-${index}`} className="h-24"></div>
              ))}
              
              {/* Days of the month */}
              {Array.from({ length: getDaysInMonth(currentDate) }, (_, index) => {
                const day = index + 1;
                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                const dayEvents = getEventsForDate(date);
                const isToday = date.toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={day}
                    className={`h-24 p-2 border rounded-lg transition-colors ${
                      isToday 
                        ? 'bg-primary-100 border-primary-300' 
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`text-sm font-semibold mb-1 ${
                      isToday ? 'text-primary-700' : 'text-gray-700'
                    }`}>
                      {day}
                    </div>
                    
                    {/* Events for this day */}
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <button
                          key={event.id}
                          onClick={() => setSelectedSession(event)}
                          className="w-full text-left p-1 bg-primary-200 hover:bg-primary-300 rounded text-xs text-primary-800 truncate transition-colors"
                          title={event.summary}
                        >
                          {event.summary}
                        </button>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500 text-center">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Interest Form Modal */}
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
