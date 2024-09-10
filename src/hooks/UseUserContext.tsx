import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a dynamic user object interface
interface UserProfile {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allows any properties with any type
}

// Define the context type, including the setter function
interface UserContextType {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
}

// Create the context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Create a Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile>({}); // Initialize with an empty object

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;