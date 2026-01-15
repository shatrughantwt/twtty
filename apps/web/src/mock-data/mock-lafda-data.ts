export interface LafdaCardData {
  id: string;
  title: string;
  description: string;
  views: number;
  trendingRank?: number;
  tags: string[];
  votes: number;
  uservote?: "up" | "down" | null;
}

export const mockLafdaData: LafdaCardData[] = [
  {
    id: "1",
    title: "Dhruv Rathee vs Manu Arora",
    description: "Who explains political topics better?",
    views: 1520,
    trendingRank: 1,
    tags: ["politics", "youtube"],
    votes: 320,
    uservote: null,
  },
  {
    id: "2",
    title: "Virat Kohli vs Rohit Sharma",
    description: "Who is the better Indian captain?",
    views: 2840,
    trendingRank: 2,
    tags: ["cricket", "sports"],
    votes: 510,
    uservote: "up",
  },
  {
    id: "3",
    title: "React vs Angular",
    description: "Which frontend framework should beginners choose?",
    views: 980,
    trendingRank: 3,
    tags: ["tech", "frontend"],
    votes: 210,
    uservote: "down",
  },
  {
    id: "4",
    title: "Messi vs Ronaldo",
    description: "Who is the greatest footballer of all time?",
    views: 5600,
    trendingRank: 4,
    tags: ["football", "sports"],
    votes: 1120,
    uservote: null,
  },
  {
    id: "5",
    title: "Remote Job vs Office Job",
    description: "Which work style is better for productivity?",
    views: 1340,
    trendingRank: 5,
    tags: ["career", "work"],
    votes: 275,
  },
  {
    id: "6",
    title: "Android vs iOS",
    description: "Which mobile OS offers better value in 2026?",
    views: 3420,
    tags: ["technology", "mobile"],
    votes: 640,
    uservote: null,
  },
];
