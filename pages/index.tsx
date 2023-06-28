import Landing from '@/pages/public/landing';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext } from 'next';

export default function Home() {
  return <Landing />;
}
