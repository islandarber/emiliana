import { Resource } from '../types';

export const resources: Resource[] = [
  {
    id: 1,
    title: {
      en: "5-Minute Morning Yoga Sequence",
      el: "5λεπτη Ακολουθία Γιόγκα για το Πρωί"
    },
    description: {
      en: "A simple, energizing sequence to start your day with intention and presence.",
      el: "Μια απλή, ενεργητική ακολουθία για να ξεκινήσετε την ημέρα σας με πρόθεση και παρουσία."
    },
    type: "guide",
    url: "/resources/morning-yoga-guide.pdf"
  },
  {
    id: 2,
    title: {
      en: "Guided Relaxation Meditation",
      el: "Καθοδηγούμενος Διαλογισμός Χαλάρωσης"
    },
    description: {
      en: "A 15-minute audio guide to help you release tension and find deep relaxation.",
      el: "Ένας 15λεπτος ηχητικός οδηγός για να σας βοηθήσει να απελευθερώσετε την ένταση και να βρείτε βαθιά χαλάρωση."
    },
    type: "audio",
    url: "/resources/relaxation-meditation.mp3"
  },
  {
    id: 3,
    title: {
      en: "Drama Therapy Exercises for Self-Expression",
      el: "Ασκήσεις Δραματοθεραπείας για Αυτο-έκφραση"
    },
    description: {
      en: "Simple exercises you can do at home to explore emotions and foster creative expression.",
      el: "Απλές ασκήσεις που μπορείτε να κάνετε στο σπίτι για να εξερευνήσετε συναισθήματα και να ενισχύσετε τη δημιουργική έκφραση."
    },
    type: "guide",
    url: "/resources/drama-therapy-guide.pdf"
  },
  {
    id: 4,
    title: {
      en: "Breathwork Techniques for Stress Relief",
      el: "Τεχνικές Αναπνοής για Ανακούφιση του Στρες"
    },
    description: {
      en: "Learn four powerful breathing techniques to manage stress and anxiety in the moment.",
      el: "Μάθετε τέσσερις ισχυρές τεχνικές αναπνοής για τη διαχείριση του στρες και του άγχους στη στιγμή."
    },
    type: "video",
    url: "/resources/breathwork-video.mp4"
  }
];