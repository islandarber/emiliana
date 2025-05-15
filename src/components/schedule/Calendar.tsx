import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Generate weekly schedule - placeholder data
  const weeklySchedule = [
    { day: 'Monday', events: [
      { time: '09:00 - 10:30', title: 'Morning Yoga Flow', type: 'yoga' },
      { time: '17:00 - 18:30', title: 'Drama Therapy Group', type: 'drama' }
    ]},
    { day: 'Tuesday', events: [
      { time: '10:00 - 11:30', title: 'Gentle Yoga', type: 'yoga' }
    ]},
    { day: 'Wednesday', events: [
      { time: '09:00 - 10:30', title: 'Morning Yoga Flow', type: 'yoga' },
      { time: '18:00 - 19:30', title: 'Individual Sessions', type: 'individual' }
    ]},
    { day: 'Thursday', events: [
      { time: '17:00 - 18:30', title: 'Drama Therapy Group', type: 'drama' }
    ]},
    { day: 'Friday', events: [
      { time: '09:00 - 10:30', title: 'Morning Yoga Flow', type: 'yoga' },
      { time: '11:00 - 12:30', title: 'Individual Sessions', type: 'individual' }
    ]},
    { day: 'Saturday', events: [
      { time: '10:00 - 12:00', title: 'Weekend Workshop', type: 'workshop' }
    ]},
    { day: 'Sunday', events: [] }
  ];
  
  // Upcoming retreats - placeholder data
  const upcomingRetreats = [
    {
      id: 1,
      title: 'Spring Renewal Retreat',
      date: 'May 15-18, 2025',
      location: 'Evia Island, Greece',
      description: 'A 4-day immersive experience combining yoga, drama therapy, and nature connection.'
    },
    {
      id: 2,
      title: 'Summer Solstice Retreat',
      date: 'June 21-24, 2025',
      location: 'Pelion Mountain, Greece',
      description: 'Celebrate the longest day of the year with yoga, meditation, and creative expression.'
    }
  ];
  
  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };
  
  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Mini Calendar */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-medium text-green-900">
                {formatDate(currentDate)}
              </h3>
              <div className="flex space-x-2">
                <button 
                  onClick={prevMonth}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button 
                  onClick={nextMonth}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  aria-label="Next month"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center">
              {weekdays.map(day => (
                <div key={day} className="py-2 text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
              
              {/* Calendar days placeholder - simplified for illustration */}
              {Array.from({ length: 35 }, (_, i) => (
                <div 
                  key={i} 
                  className={`py-2 border rounded-md text-sm
                    ${i % 7 === 0 || i % 7 === 6 ? 'text-gray-400' : 'text-gray-800'}
                    ${i === 14 ? 'bg-green-100 border-green-300 text-green-800 font-medium' : 'hover:bg-gray-50'}
                  `}
                >
                  {(i + 1 <= 31) ? i + 1 : ''}
                </div>
              ))}
            </div>
          </div>
          
          {/* Weekly Schedule */}
          <div>
            <h2 className="text-2xl font-serif text-green-900 mb-6">
              Weekly Schedule
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {weeklySchedule.map((day, index) => (
                <div 
                  key={index}
                  className={`divide-y ${index !== weeklySchedule.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="px-6 py-4 bg-gray-50">
                    <h3 className="font-medium text-gray-900">{day.day}</h3>
                  </div>
                  
                  {day.events.length > 0 ? (
                    <div className="px-6 py-3 space-y-3">
                      {day.events.map((event, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-32 flex-shrink-0 text-sm text-gray-600">
                            {event.time}
                          </div>
                          <div className={`flex-1 p-2 rounded-md text-sm
                            ${event.type === 'yoga' ? 'bg-green-50 text-green-800' : ''}
                            ${event.type === 'drama' ? 'bg-orange-50 text-orange-800' : ''}
                            ${event.type === 'individual' ? 'bg-blue-50 text-blue-800' : ''}
                            ${event.type === 'workshop' ? 'bg-purple-50 text-purple-800' : ''}
                          `}>
                            {event.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-6 py-4 text-sm text-gray-500 italic">
                      No scheduled classes
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Retreats */}
          <div>
            <h2 className="text-2xl font-serif text-green-900 mb-6">
              Upcoming Retreats
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingRetreats.map(retreat => (
                <div key={retreat.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-medium text-green-900 mb-2">
                    {retreat.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">When:</span> {retreat.date}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Where:</span> {retreat.location}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    {retreat.description}
                  </p>
                  <button className="text-green-700 font-medium text-sm hover:text-green-800 transition">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;