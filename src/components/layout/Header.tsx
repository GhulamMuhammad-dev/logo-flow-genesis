
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          BrandCraft AI
        </Link>
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/create">
                <Button variant="outline">Create Brand</Button>
              </Link>
              <Button variant="ghost" onClick={handleLogout}>Sign Out</Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/auth">
                <Button>Sign In</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
