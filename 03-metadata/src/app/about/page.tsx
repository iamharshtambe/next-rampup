import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'About Page',
  },
};

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">About</h1>
    </div>
  );
}
