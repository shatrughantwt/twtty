import React from 'react'
import { SectionSubheading } from './section-subheading';
import { mockLafdaData } from '@/mock-data/mock-lafda-data';
import { LafdaCard } from '../lafda/lafda-card';

function LafdaSection() {
  const visibleLafda = mockLafdaData.slice(0,4);
  const hasMore = mockLafdaData.length > 4;
  return (
    <section className='py-12 w-full px-4 font-poppins'>
      <SectionSubheading
        title="Trending E-lafda"
        subtitle="Discover the latest and most popular e-lafda on the platform"
      />

      <div>
        {visibleLafda.map((card)=>(
          <LafdaCard key={card.id} data={card}/>
        ))}
      </div>
    </section>
  )
}

export {LafdaSection};
