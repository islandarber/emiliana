// BookASession.tsx
import React, { useEffect } from "react";

interface BookASessionProps {
  /** Your Calendly scheduling URL, e.g. "https://calendly.com/emiliana/30min" */
  calendlyUrl: string;
}

const BookASession: React.FC<BookASessionProps> = ({ calendlyUrl }) => {
  useEffect(() => {
    // Dynamically load Calendly widget script
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="book-a-session-container" style={{ minHeight: "600px" }}>
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "100%", minHeight: "600px" }}
      ></div>
    </div>
  );
};

export default BookASession;
