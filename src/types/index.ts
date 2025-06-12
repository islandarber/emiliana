export interface LanguageOption {
  code: string;
  name: string;
}

export interface LanguageContent {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    learnMore: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    schedule: string;
    testimonials: string;
    resources: string;
    contact: string;
    FAQ: string;
  };
  footer: {
    copyright: string;
    rights: string;
  };
  services: {
    title: string;
    yoga: {
      title: string;
      description: string;
    };
    drama: {
      title: string;
      description: string;
    };
    retreats: {
      title: string;
      description: string;
    };
    cta: string;
  };
  about: {
    title: string;
    description: string[];
    experience: string;
  };
  testimonials: {
    title: string;
    viewAll: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
  };
  dramaTherapy: {
    introTitle: string;
    intro: string;
    purpose: string;
    method: string;
    groupTherapyTitle: string;
    groupTherapy: string;
    individualTherapyTitle: string;
    individualTherapy: string;
    empowermentNote: string;
    therapistRoleTitle: string;
    therapistRole: string;
    aboutEmilianaTitle: string;
    aboutEmiliana: string;
    background: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  serviceType: 'yoga' | 'drama' | 'retreat';
}

export interface Service {
  id: number;
  type: 'individual' | 'group' | 'online';
  title: {
    en: string;
    el: string;
  };
  description: {
    en: string;
    el: string;
  };
  image: string;
}

export interface BlogPost {
  id: number;
  title: {
    en: string;
    el: string;
  };
  excerpt: {
    en: string;
    el: string;
  };
  date: string;
  image: string;
  category: 'yoga' | 'drama' | 'wellness' | 'retreat';
}

export interface Resource {
  id: number;
  title: {
    en: string;
    el: string;
  };
  description: {
    en: string;
    el: string;
  };
  type: 'guide' | 'audio' | 'video';
  url: string;
}
