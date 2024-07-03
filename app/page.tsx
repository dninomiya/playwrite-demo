import { signOut } from '@/app/action';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default function Home() {
  const cookie = cookies();
  const session = cookie.get('anonymousSession');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <div>
          <h1>ようこそ</h1>
          <form action={signOut}>
            <button>ログアウト</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>ログインしてください</h1>
          <Link href="/login">ログイン</Link>
        </div>
      )}
    </main>
  );
}
