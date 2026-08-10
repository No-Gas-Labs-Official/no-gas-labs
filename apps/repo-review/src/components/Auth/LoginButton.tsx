'use client';

import { useAuthStore } from '@/store/authStore';
import { GITHUB_AUTH_URL } from '@/config/oauth';

export const LoginButton = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  if (isAuthenticated) {
    return (
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Logout
      </button>
    );
  }

  return (
    <a
      href={GITHUB_AUTH_URL}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Login with GitHub
    </a>
  );
};
