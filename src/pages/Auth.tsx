
import { useEffect } from 'react';
import { AuthForm } from "@/components/auth/AuthForm";
import { useNavigate } from 'react-router-dom';
import { Header } from "@/components/layout/Header";

const Auth = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 gradient-bg">
        <AuthForm />
      </main>
      
      <footer className="bg-white border-t border-border py-4 px-4">
        <div className="container mx-auto">
          <p className="text-sm text-center text-muted-foreground">
            © 2025 BrandCraft AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Auth;
