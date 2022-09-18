import FirstContext from './FirstContext';
import { useState } from "react";

function FirstProvider({ children }) {
  const [person, setPerson] = useState({
    name: '',
    email: '',
  });

  function createPerson(newPerson) {
    if (!person.name && !person.email) return setPerson(newPerson);

    setPerson({...person, newPerson});
  };

  const context = {
    person,
    createPerson,
  };

  return(
    <FirstContext.Provider value={ context }>
      {children}
    </FirstContext.Provider>
  )
}

export default FirstProvider;
