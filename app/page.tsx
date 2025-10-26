import { ProfileCard } from '@/components/ui/profileCard';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 gap-4">
      <ProfileCard />
      <footer>
        <p className="text-sm text-gray-500 text-center">made by anon</p>
      </footer>
    </div>
  );
}
