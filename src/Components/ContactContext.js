// ContactContext.js
import React, { createContext, useContext } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  // Define your contact state or any other relevant logic here
  const contactState = {
    name: 'Michelle Cedeno',
    email: 'luchastrategies@gmail.com',
    title: 'Digital Deputy Director',
    role: 'Deputy Director',
    organization: 'Biden Harris for President',
    rev: '2024-05-01T17:08:22.834Z',
  };

  return (
    <ContactContext.Provider value={contactState}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
