'use client';

import { LoginButton } from '@/components/Auth/LoginButton';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white space-y-6">
        <h1 className="text-5xl font-bold">Repo Review</h1>
        <p className="text-xl text-blue-100">Review all your GitHub repositories in one place</p>
        <p className="text-lg text-blue-200 mb-8">Capture screenshots, export reports, and analyze your entire repository portfolio</p>
        <LoginButton />
      </div>
    </div>
  );
}
