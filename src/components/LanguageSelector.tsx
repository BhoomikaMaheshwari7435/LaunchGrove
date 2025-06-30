import React from 'react';
import { Globe } from 'lucide-react';
import { supportedLanguages } from '../data/languages';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded-lg transition-colors">
        <Globe size={16} />
        <span className="text-sm">
          {supportedLanguages.find(lang => lang.code === currentLanguage)?.nativeName}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-white border-2 border-yellow-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2 min-w-[150px]">
          {supportedLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => onLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 hover:bg-yellow-50 transition-colors ${
                currentLanguage === language.code ? 'bg-yellow-100 text-yellow-800' : 'text-gray-700'
              }`}
            >
              <div className="font-medium">{language.nativeName}</div>
              <div className="text-xs text-gray-500">{language.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};