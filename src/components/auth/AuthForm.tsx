
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

type AuthMode = 'login' | 'register';

export function AuthForm() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (mode === 'login') {
        // In a real app, this would connect to an auth service
        // For MVP, we'll simulate a successful login
        localStorage.setItem('user', JSON.stringify({ email }));
        toast.success('Successfully logged in');
        window.location.href = '/dashboard';
      } else {
        // In a real app, this would register the user
        localStorage.setItem('user', JSON.stringify({ email }));
        toast.success('Account created successfully');
        window.location.href = '/dashboard';
      }
    } catch (error) {
      toast.error('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </CardTitle>
        <CardDescription>
          {mode === 'login' 
            ? 'Enter your email and password to access your account' 
            : 'Enter your details to create a new account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input 
              id="email"
              type="email" 
              placeholder="you@example.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          variant="link" 
          onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
        >
          {mode === 'login' 
            ? "Don't have an account? Sign up" 
            : "Already have an account? Sign in"}
        </Button>
      </CardFooter>
    </Card>
  );
}
