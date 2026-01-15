"use client";
import { LafdaCardData } from "@/mock-data/mock-lafda-data";
import { useState } from "react";
import { Card } from "../ui/card";
import { FireIcon } from "@phosphor-icons/react";
import { Badge, EyeIcon, Link } from "lucide-react";

interface LafdaCardProps{
  className?: string;
  data: LafdaCardData;
}


function LafdaCard({
  className,
  data,
}: LafdaCardProps){

const [voteCount, setVoteCount] = useState(data.votes);
const [userVote, setUserVote] = useState<"up" | "down" | null>(data.userVote || null);

const visibleTags = data.tags.slice(0,2);
const remainingTags = Math.max(0, data.tags.length -2);
  return <div className={cn("flex flex-col", className)}>
    <Card className="rounded-2xl p-6 flex flex-col min-h-[280px]">
        <div className="flex items-center jsutify-baseline mb-3">
          {data.trendingRank && (
            <div className="flex items-center gap-2">
              <FireIcon className="size-4 text-primary" weight="bold"/>
              <span className="text-xs font-semibold text-primary tracking-tight"></span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <EyeIcon className="size-4" fontWeight="bold" />
            <span className="text-medium tracking-tight">{data.views} views</span>
          </div>
        </div>



        <Link href={`/lafda/${data.id}`}>
        <h3 className="line-clamp-2 text-xl font-semibold tracking-tight">{data.title}</h3></Link>

        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed flex-1">
          {data.description}
        </p>


        <div className="pt-4 border-t border-border/60 bg-muted/30 m-6 px-6 pb-4 rounded-b-2xl mt-auto">
        <div>
          {visibleTags.map((tag)=>(
            <Badge key={tag} variant="outline">
               {tag}
            </Badge>
          ))}
          {remainingTags > 0 && (
            <Badge variant="outline">
              +{remainingTags} more
            </Badge>
          )}
        </div>
        </div>

    </Card>

  </div>;
}

export { LafdaCard };
