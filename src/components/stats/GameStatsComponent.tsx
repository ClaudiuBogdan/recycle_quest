import React from "react";
import { GameStats } from "@/models/Game";
import ScoreComponent from "./ScoreComponent";
import StatsItemsListComponent from "./StatsItemsListComponent"; // Adjust the import path if necessary

interface GameStatsComponentProps {
  gameStats: GameStats;
  score: number;
}

const GameStatsComponent: React.FC<GameStatsComponentProps> = ({
  score,
  gameStats,
}) => {
  return (
    <div className="space-y-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-xl">
        You&apos;ve completed the game! Here&apos;s how you did:
      </p>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <ScoreComponent score={score} />
      </div>
      {gameStats.correct.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">
            Your Correctly Sorted Items:
          </h2>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
            <StatsItemsListComponent statsItems={gameStats.correct} />
          </div>
        </div>
      )}
      {gameStats.incorrect.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-red-600">
            Items You Missed:
          </h2>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
            <StatsItemsListComponent statsItems={gameStats.incorrect} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStatsComponent;
