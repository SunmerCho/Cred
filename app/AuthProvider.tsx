import React from 'react';
import { getToken, setToken } from './database/KVHelper';

const AuthContext = React.createContext<{ signIn: () => void; signOut: () => void; session?: string | null, isLoading: boolean } | null>(null);

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
     
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  getToken().then((result) => {
    // if (result) {
    //   alert("🔐 Here's your value 🔐 \n" + result);
    // } else {
    //   alert('No values stored under that key.');
    // }
  })

  return (
    <AuthContext.Provider
      value={null}>
      {props.children}
    </AuthContext.Provider>
  );
}
