'use client';

import Link from 'next/link';
import { Route } from 'next';

const Home = () => {
  return (
    <div>
      <h1>Home3</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href={'/about' as Route}>About</Link> page.
      </p>
    </div>
  );
};

export default Home;
