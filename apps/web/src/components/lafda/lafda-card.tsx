"use client";
import { LafdaCardData } from "@/mock-data/mock-lafda-data";
import { useState } from "react";
import { Card } from "../ui/card";
import { ArrowFatDownIcon, ArrowFatUpIcon, FireIcon } from "@phosphor-icons/react";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface LafdaCardProps {
  className?: string;
  data: LafdaCardData;
}

function LafdaCard({ className, data }: LafdaCardProps) {
  const [voteCount, setVoteCount] = useState(data.votes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(
    data.userVote || null
  );

  const handleVote = (voteType: "up" | "down") => {
    if (userVote === voteType) {
      setVoteCount((prev) => prev + (voteType === "up" ? -1 : 1));
      setUserVote(null);
    } else if (userVote === null) {
      setVoteCount((prev) => prev + (voteType === "up" ? 1 : -1));
      setUserVote(voteType);
    } else {
      setVoteCount((prev) => prev + (voteType === "up" ? 2 : -2));
    }
  };

  const formatVoteCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const formatViewsCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const visibleTags = data.tags.slice(0, 2);
  const remainingTags = Math.max(0, data.tags.length - 2);
  return (
    <div className={cn("flex flex-col", className)}>
      <Card className="rounded-2xl p-6 flex flex-col min-h-[280px]">
        <div className="flex items-center justify-between">
          {data.trendingRank && (
            <div className="flex items-center gap-2">
              <FireIcon className="size-4 text-primary" weight="bold" />
              <span className="text-xs font-semibold text-primary tracking-tight"></span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <EyeIcon className="size-4" />
            <span className="text-medium tracking-tight">
              {formatViewsCount(data.views)} views
            </span>
          </div>
        </div>

        <Link href={`/lafda/${data.id}`}>
          <h3 className="line-clamp-2 text-xl font-semibold tracking-tight leading-tight min-h-12">
            {data.title}
          </h3>
        </Link>

        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed flex-1">
          {data.description}
        </p>

        <div className="pt-4 border-t border-border/60 bg-muted/30 m-6 px-6 pb-4 rounded-b-2xl mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">

            {visibleTags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
            {remainingTags > 0 && (
              <Badge variant="outline">+{remainingTags} more</Badge>
            )}
            </div>
               <div className="flex items-center gap-0.5 rounded-md border border-border bg-card overflow-hidden">
            <Button
              onClick={() => handleVote("up")}
              variant={"ghost"}
              size="icon"
              className={cn("h-auto p-1.5 hover:bg-transparent")}
            >
              <ArrowFatUpIcon
                className={cn(
                  "size-4 transition-colors duration-200",
                  userVote === "up" ? "text-green-500" : "text-muted-foreground"
                )}
                weight={userVote === "up" ? "fill" : "bold"}
              />
            </Button>

            <div className="px-2 py-1 min-w-8 text-center">
              <span
                className={cn(
                  "text-xs font-semibold tracking-tight",
                  voteCount > 0 && "text-primary",
                  voteCount < 0 && "text-destructive",
                  voteCount === 0 && "text-muted-foreground"
                )}
              >
                {formatVoteCount(voteCount)}
              </span>
              </div>
              <Button
                onClick={() => handleVote("down")}
                variant={"ghost"}
                size="icon"
                className={cn("h-auto p-1.5 hover:bg-transparent")}
              >
                <ArrowFatDownIcon
                  className={cn(
                    "size-4 transition-colors duration-200",
                    userVote === "down"
                      ? "text-red-500"
                      : "text-muted-foreground"
                  )}
                  weight={userVote === "down" ? "fill" : "bold"}
                />
              </Button>
          </div>
          </div>
       
        </div>
      </Card>
    </div>
  );
}

export { LafdaCard };
