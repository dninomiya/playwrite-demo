'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const signOut = async () => {
  const cookie = cookies();

  cookie.delete('anonymousSession');

  redirect('/login');
};
