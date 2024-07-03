import { signIn } from '@/app/login/action';

export default function Page() {
  return (
    <form action={signIn}>
      <button>ログイン</button>
    </form>
  );
}
