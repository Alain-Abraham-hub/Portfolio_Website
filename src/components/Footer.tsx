import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-violet-500/20 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Built with{' '}
            <Heart className="inline w-4 h-4 text-red-500 fill-red-500" />{' '}
            using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} S. J. Alain Abraham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
