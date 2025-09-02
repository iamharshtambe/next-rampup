import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'About Us',
  },
  description: 'This is About US page',
};

export default function About() {
  return <div>About</div>;
}
