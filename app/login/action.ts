'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const signIn = async () => {
  const cookie = cookies();

  cookie.set('anonymousSession', 'true');

  redirect('/');
};
