import { useRouter } from "next/router";
import { useCallback } from "react";
import TutorialComponent from "@/components/game/tutorial/Tutorial";
import { LevelMetadata } from "@/components/game/tutorial/types";

export default function TutorialPage() {
  const router = useRouter();
  const handleOnComplete = useCallback(
    (metadata: LevelMetadata[]) => {
      // TODO: save data in api
      console.log(metadata);
      void router.push("/game");
    },
    [router],
  );
  return (
    <main>
      <TutorialComponent onComplete={handleOnComplete} />
    </main>
  );
}
