import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { LanguageOption, LanguageContent } from '../types';
import { contentData } from '../data/content';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  t: LanguageContent;
  languages: LanguageOption[];
}

const defaultLanguage = 'en';

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
  const [currentLanguage, setCurrentLanguage] = useState<string>(defaultLanguage);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && contentData[savedLang]) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  const setLanguage = (code: string) => {
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
