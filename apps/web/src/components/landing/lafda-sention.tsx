import React from "react";
import { SectionSubheading } from "./section-subheading";
import { mockLafdaData } from "@/mock-data/mock-lafda-data";
import { LafdaCard } from "../lafda/lafda-card";
import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react";
import Link from "next/link";

function LafdaSection() {
  const visibleLafda = mockLafdaData.slice(0, 4);
  const hasMore = mockLafdaData.length > 4;
  return (
    <section className="py-12 w-full px-4 font-poppins">
      <SectionSubheading
        title="Trending E-lafda"
        subtitle="Discover the latest and most popular e-lafda on the platform"
      />

      <div
        className={cn(
          "mt-8 grid gap-6",
          "grid-cols-1",
          "md:grid-cols-2",
          "lg:grid-cols-2",
          "xl:grid-cols-2"
        )}
      >
        {visibleLafda.map((card) => (
          <LafdaCard key={card.id} data={card} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Link href="/lafda">
          <Button variant="outline">Show More E-lafda</Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export { LafdaSection };
