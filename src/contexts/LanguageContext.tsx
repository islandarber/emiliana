import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { LanguageOption, LanguageContent } from '../types';
import { contentData } from '../data/content';

// ✅ Define allowed languages once
export type Language = 'en' | 'el';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: Language) => void;
  t: LanguageContent;
  languages: LanguageOption[];
}

const defaultLanguage: Language = 'en';

const languages: LanguageOption[] = [
  { code: 'en', name: 'English' },
  { code: 'el', name: 'Ελληνικά' },
];

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  t: contentData[defaultLanguage],
  languages,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && contentData[savedLang]) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  const setLanguage = (code: Language) => {
    if (contentData[code]) {
      setCurrentLanguage(code);
      localStorage.setItem('language', code);
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t: contentData[currentLanguage],
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
