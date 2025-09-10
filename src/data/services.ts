import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    type: 'group',
    title: {
      en: 'Private and Group Yoga Sessions',
      el: 'Ιδιωτικά και Ομαδικά Μαθήματα Γιόγκα'
    },
    description: {
      en: 'Tailored for all levels, these sessions emphasize breath, embodied awareness, and nervous system regulation to support balance and inner connection.',
      el: 'Μαθήματα προσαρμοσμένα σε όλα τα επίπεδα, με έμφαση στην αναπνοή, την ενσώματη επίγνωση και τη ρύθμιση του νευρικού συστήματος, για ισορροπία και σύνδεση με τον εσωτερικό σας εαυτό.'
    },
    image: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg'
  },
  {
    id: 2,
    type: 'individual',
    title: {
      en: 'Individual Psychotherapy and Dramatherapy',
      el: 'Ατομική Ψυχοθεραπεία & Δραματοθεραπεία'
    },
    description: {
      en: 'Depth-oriented therapeutic support addressing emotional, relational, and trauma-related challenges through verbal and creative expression.',
      el: 'Ολιστική υποστήριξη για συναισθηματικές, διαπροσωπικές και τραυματικές προκλήσεις, μέσα από λεκτική επικοινωνία και δημιουργικές τεχνικές.'
    },
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg'
  },
  {
    id: 3,
    type: 'group',
    title: {
      en: 'Group Therapy & Creative Process Groups',
      el: 'Ομαδική Θεραπεία & Δημιουργικές Ομάδες Διαδικασίας'
    },
    description: {
      en: 'Safe, facilitated spaces for shared exploration, expression, and transformation through embodied, relational, and artistic methods.',
      el: 'Ασφαλείς και καθοδηγούμενοι χώροι για κοινή εξερεύνηση, έκφραση και προσωπική μεταμόρφωση μέσω ενσώματων, διαπροσωπικών και καλλιτεχνικών μεθόδων.'
    },
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg'
  },
  {
    id: 4,
    type: 'online',
    title: {
      en: 'Online Psychotherapy Sessions',
      el: 'Online Ψυχοθεραπεία'
    },
    description: {
      en: 'Flexible, confidential support available remotely, maintaining depth and presence wherever you are.',
      el: 'Ευέλικτη, εμπιστευτική υποστήριξη από απόσταση, διατηρώντας το βάθος και την παρουσία σε κάθε συνεδρία.'
    },
    image: 'https://images.pexels.com/photos/4473944/pexels-photo-4473944.jpeg'
  },
  {
    id: 5,
    type: 'group',
    title: {
      en: 'Workshops, Trainings & Retreats',
      el: 'Εργαστήρια, Εκπαιδεύσεις & Retreats'
    },
    description: {
      en: 'Immersive opportunities for personal growth, professional development, and spiritual inquiry through movement, creativity, and therapeutic practice.',
      el: 'Εμβληματικές ευκαιρίες για προσωπική ανάπτυξη, επαγγελματική εξέλιξη και πνευματική διερεύνηση μέσα από κίνηση, δημιουργικότητα και θεραπευτική πρακτική.'
    },
    image: 'https://images.pexels.com/photos/4473944/pexels-photo-4473944.jpeg'
  }
];
