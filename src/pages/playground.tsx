import GameStatsComponent from "@/components/stats/GameStatsComponent";

export default function PlaygroundPage() {
  return (
    <main>
      <GameStatsComponent
        gameStats={{
          correct: [
            {
              binId: "brown",
              count: 1,
              type: "bin_selection",
            },
            {
              binId: "yellow",
              count: 3,
              type: "bin_selection",
            },
            {
              binId: "green",
              count: 3,
              type: "bin_selection",
            },
            {
              binId: "blue",
              count: 2,
              type: "bin_selection",
            },
            {
              binId: "black",
              count: 1,
              type: "bin_selection",
            },
          ],
          incorrect: [
            {
              binId: "yellow",
              count: 3,
              type: "bin_selection",
            },
          ],
        }}
        score={10}
      />
    </main>
  );
}
