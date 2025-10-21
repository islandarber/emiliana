import React, { useEffect } from "react";

interface BookASessionProps {
  calendlyUrl: string;
}

const BookASession: React.FC<BookASessionProps> = ({ calendlyUrl }) => {
  useEffect(() => {
    const container = document.getElementById("calendly-inline-widget");
    if (!container) return;

    // Clear any previous widget to prevent duplicates
    container.innerHTML = "";

    // Initialize Calendly widget
    if ((window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: container,
        prefill: {},
        utm: {},
        styles: {
          height: "700px"
        }
      });

      // Prevent iframe resizing after initialization
      setTimeout(() => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
          iframe.style.height = '700px';
          iframe.style.minHeight = '700px';
          iframe.style.maxHeight = '700px';
          iframe.style.width = '100%';
          iframe.style.border = 'none';
          iframe.style.overflow = 'hidden';
          
          // Prevent the iframe from changing size
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const target = mutation.target as HTMLElement;
                if (target.tagName === 'IFRAME') {
                  target.style.height = '700px';
                  target.style.width = '100%';
                }
              }
            });
          });
          
          observer.observe(iframe, {
            attributes: true,
            attributeFilter: ['style']
          });
        }
      }, 1000);
    }
  }, []); // <- Run only once on mount

  
  return (
    <div
      style={{
        width: "100%",
        height: "700px",
        position: "relative",
        overflow: "hidden",
        border: "none",
      }}
    >
      <div
        id="calendly-inline-widget"
        style={{
          width: "100%",
          height: "700px",
          minHeight: "700px",
          maxHeight: "700px",
          overflow: "hidden",
          border: "none",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
    </div>
  );
};

export default BookASession;
