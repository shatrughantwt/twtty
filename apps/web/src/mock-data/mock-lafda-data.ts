export interface LafdaCardData {
  id: string;
  title: string;
  description: string;
  views: number;
  trendingRank?: number;
  tags: string[];
  votes: number;
  userVote?: "up" | "down" | null;
}

export const mockLafdaData: LafdaCardData[] = [
  {
    id: "1",
    title: "Dhruv Rathee vs Manu Arora",
    description: "Who explains political topics better?",
    views: 1520,
    trendingRank: 1,
    tags: ["politics", "youtube", "cricket", "sports"],
    votes: 320,
    userVote: null,
  },
  {
    id: "2",
    title: "Virat Kohli vs Rohit Sharma",
    description: "Who is the better Indian captain?",
    views: 2840,
    trendingRank: 2,
    tags: ["cricket", "sports"],
    votes: 510,
    userVote: "up",
  },
  {
    id: "3",
    title: "React vs Angular",
    description: "Which frontend framework should beginners choose?",
    views: 980,
    trendingRank: 3,
    tags: ["tech", "frontend", "backend"],
    votes: 210,
    userVote: "down",
  },
  {
    id: "4",
    title: "Messi vs Ronaldo",
    description: "Who is the greatest footballer of all time?",
    views: 5600,
    trendingRank: 4,
    tags: ["football", "sports", "volleyball"],
    votes: 1120,
    userVote: null,
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
    userVote: null,
  },
];
