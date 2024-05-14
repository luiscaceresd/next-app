'use client';

import { useState } from "react";
import dynamic from 'next/dynamic'
const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {loading: () => <p>Loading...</p> });
import _ from 'lodash';

export default function Home() {
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />} 
      <button onClick={async ()=>{
        const _ = (await import('lodash')).default

        const users = [
          {name: 'c'},
          {name: 'a'},
          {name: 'b'},
        ]

        const sorted = _.orderBy(users, ['name'])

        console.log(sorted)
      }}></button>
    </main>
  )
}
