import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  console.log('ForgotPasswordPage loaded');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    console.log('Password reset request for:', email);
    // Simulate API call
    if (email.includes('@')) { // Basic validation
      setMessage(`If an account exists for ${email}, you will receive password reset instructions.`);
      setEmail('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Forgot Password?</CardTitle>
          <CardDescription>
            Enter your email and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {message && (
            <Alert variant="default" className="mb-4 bg-green-50 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-400">
              <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
              <AlertTitle>Request Sent</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p>
            Remember your password?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:underline dark:text-blue-500">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;