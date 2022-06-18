/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';

export const UserContext = React.createContext({
  user: {}
});

export const UserProvider = UserContext.Provider;

export default UserProvider;
