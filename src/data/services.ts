import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    type: 'individual',
    title: {
      en: 'Individual Yoga Sessions',
      el: 'Ατομικές Συνεδρίες Γιόγκα'
    },
    description: {
      en: 'Personalized one-on-one sessions tailored to your specific needs, goals, and experience level. Perfect for beginners or those with specific concerns.',
      el: 'Εξατομικευμένες συνεδρίες προσαρμοσμένες στις συγκεκριμένες ανάγκες, στόχους και επίπεδο εμπειρίας σας. Ιδανικό για αρχάριους ή άτομα με συγκεκριμένες ανησυχίες.'
    },
    image: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg'
  },
  {
    id: 2,
    type: 'group',
    title: {
      en: 'Group Drama Therapy',
      el: 'Ομαδική Δραματοθεραπεία'
    },
    description: {
      en: 'Collaborative sessions that harness the power of group dynamics to explore emotions, develop social skills, and foster community connection.',
      el: 'Συνεργατικές συνεδρίες που αξιοποιούν τη δύναμη της ομαδικής δυναμικής για να εξερευνήσουν συναισθήματα, να αναπτύξουν κοινωνικές δεξιότητες και να προωθήσουν την κοινοτική σύνδεση.'
    },
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg'
  },
  {
    id: 3,
    type: 'online',
    title: {
      en: 'Online Yoga & Therapy',
      el: 'Διαδικτυακή Γιόγκα & Θεραπεία'
    },
    description: {
      en: 'Convenient virtual sessions that bring the benefits of yoga and drama therapy to you, wherever you are. Flexible scheduling and personalized attention.',
      el: 'Βολικές εικονικές συνεδρίες που σας φέρνουν τα οφέλη της γιόγκα και της δραματοθεραπείας, όπου κι αν βρίσκεστε. Ευέλικτος προγραμματισμός και εξατομικευμένη προσοχή.'
    },
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg'
  },
  {
    id: 4,
    type: 'group',
    title: {
      en: 'Wellness Retreats',
      el: 'Αποδράσεις Ευεξίας'
    },
    description: {
      en: 'Immersive weekend or week-long experiences that combine yoga, drama therapy, nature, and community for profound healing and restoration.',
      el: 'Βιωματικές εμπειρίες Σαββατοκύριακου ή εβδομάδας που συνδυάζουν γιόγκα, δραματοθεραπεία, φύση και κοινότητα για βαθιά θεραπεία και αποκατάσταση.'
    },
    image: 'https://images.pexels.com/photos/4473944/pexels-photo-4473944.jpeg'
  }
];