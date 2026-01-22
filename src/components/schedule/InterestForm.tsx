import React, { useState } from "react";

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

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export const InterestForm: React.FC<InterestFormProps> = ({ session, onClose, language }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Create a hidden iframe to submit the form without leaving the page
    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    form.target = "hidden_iframe";
    form.action = FORM_ENDPOINT;
    form.method = "POST";

    iframe.onload = () => {
      setIsSubmitted(true);
      setTimeout(onClose, 2000);
      document.body.removeChild(iframe);
    };

    form.submit();
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            {language === "en" ? "Thank you!" : "Ευχαριστούμε!"}
          </h2>
          <p className="text-gray-600">
            {language === "en"
              ? "Your interest has been sent to Emiliana!"
              : "Το ενδιαφέρον σας έχει σταλεί στην Emiliana!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          {language === "en"
            ? `Interested in "${session.summary}"?`
            : `Σας ενδιαφέρει το "${session.summary}";`}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="session" value={session.summary} />
          <input
            type="hidden"
            name="session_date"
            value={session.start.dateTime || session.start.date}
          />

          <div>
            <label className="block text-sm font-medium mb-1">
              {language === "en" ? "Name:" : "Όνομα:"}
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="_replyto"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {language === "en" ? "Phone:" : "Τηλέφωνο:"}
            </label>
            <input
              type="text"
              name="phone"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {language === "en" ? "Message:" : "Μήνυμα:"}
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-300"
              placeholder={
                language === "en"
                  ? "Tell Emiliana why you're interested..."
                  : "Πείτε στην Emiliana γιατί σας ενδιαφέρει..."
              }
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-primary-300 hover:bg-primary-400 text-white py-2 px-4 rounded-md"
            >
              {language === "en" ? "Send Interest" : "Αποστολή Ενδιαφέροντος"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
            >
              {language === "en" ? "Cancel" : "Ακύρωση"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
