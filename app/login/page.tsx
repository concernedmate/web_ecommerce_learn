import Link from 'next/link';
import LoginForm from './components/login-form';

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center pb-60">
        <LoginForm></LoginForm>
    </main>
  );
}
