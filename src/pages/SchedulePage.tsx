import React from 'react';
import Calendar from '../components/schedule/Calendar';

const SchedulePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-green-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white text-center">
            Schedule
          </h1>
        </div>
      </div>
      
      <Calendar />
      
      {/* Booking Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif text-green-900 mb-6">
              How to Book
            </h2>
            
            <p className="text-gray-700 mb-8">
              To book a class, workshop, or individual session, please contact me directly 
              or use the online booking system. I recommend booking at least 24 hours in 
              advance to secure your spot.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition">
                Book a Session
              </button>
              
              <button className="bg-white text-green-700 border border-green-700 px-6 py-3 rounded-md font-medium hover:bg-green-50 transition">
                Contact Me
              </button>
            </div>
            
            <div className="mt-10 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-green-900 mb-3">
                Cancellation Policy
              </h3>
              
              <p className="text-gray-700 text-sm">
                Please provide at least 24 hours notice for cancellations or rescheduling. 
                Late cancellations (less than 24 hours) may be subject to a 50% fee. 
                No-shows will be charged the full session rate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;