import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedUser = localStorage.getItem('tshirt-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    const fakeUser = { name: 'Demo User', email: userData.email };
    localStorage.setItem('tshirt-user', JSON.stringify(fakeUser));
    setUser(fakeUser);
    toast({
      title: "Login Successful!",
      description: `Welcome back, ${fakeUser.name}!`,
    });
  };

  const logout = () => {
    localStorage.removeItem('tshirt-user');
    setUser(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return { user, login, logout };
};