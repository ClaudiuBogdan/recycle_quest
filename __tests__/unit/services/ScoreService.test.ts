import { GameEvent } from "@/models/Game";
import { GameState, calculateScore } from "@/services/ScoreService";

describe("calculateScore", () => {
  it("should increase score for correct item selection", () => {
    const initialState: GameState = { score: 0, multiplier: 1 };
    const event: GameEvent = {
      type: "itemSelected",
      itemId: "1",
      binId: "2",
      isCorrect: true,
    };
    const newState = calculateScore(event, initialState);
    expect(newState.score).toBeGreaterThan(initialState.score);
  });

  it("should decrease score for missed item", () => {
    const initialState: GameState = { score: 0, multiplier: 1 };
    const event: GameEvent = {
      type: "itemMissed",
      itemId: "1",
      timestamp: new Date(),
    };
    const newState = calculateScore(event, initialState);
    expect(newState.score).toBeLessThan(initialState.score);
  });

  it("should correctly handle score multiplier", () => {
    const initialState: GameState = { score: 0, multiplier: 1 };
    let state = { ...initialState };
    const multiplierEvent: GameEvent = {
      type: "scoreMultiplier",
      active: true,
      multiplier: 2,
      timestamp: new Date(),
    };
    state = calculateScore(multiplierEvent, state);
    const itemEvent: GameEvent = {
      type: "itemSelected",
      itemId: "1",
      binId: "2",
      isCorrect: true,
    };
    state = calculateScore(itemEvent, state);
    expect(state.score).toEqual(2);
  });

  it("should handle multiple events", () => {
    const initialState: GameState = { score: 0, multiplier: 1 };
    const events: GameEvent[] = [
      { type: "itemSelected", itemId: "1", binId: "2", isCorrect: true },
      { type: "itemMissed", itemId: "2", timestamp: new Date() },
      {
        type: "quizItem",
        questionId: "1",
        answerId: "2",
        isCorrect: true,
        timestamp: new Date(),
      },
    ];
    const newState = calculateScore(events, initialState);
    expect(newState.score).toEqual(1);
  });

  it("should increase score for correct item selection", () => {
    const initialState: GameState = { score: 0, multiplier: 1 };
    const event: GameEvent = {
      type: "itemSelected",
      itemId: "1",
      binId: "2",
      isCorrect: true,
    };
    const newState = calculateScore(event, initialState);
    expect(newState.score).toBeGreaterThan(initialState.score);
  });

  it("should correctly calculate score from a non-zero initial score", () => {
    const initialState: GameState = { score: 50, multiplier: 1 };
    const event: GameEvent = {
      type: "itemSelected",
      itemId: "1",
      binId: "2",
      isCorrect: true,
    };
    const newState = calculateScore(event, initialState);
    expect(newState.score).toBeGreaterThan(50); // Assuming correct selection adds to the score
  });

  it("should correctly handle a negative initial score", () => {
    const initialState: GameState = { score: -10, multiplier: 1 };
    const event: GameEvent = {
      type: "itemMissed",
      itemId: "1",
      timestamp: new Date(),
    };
    const newState = calculateScore(event, initialState);
    expect(newState.score).toBeLessThan(-10); // Assuming missed item decreases the score
  });

  it("should correctly apply multiplier from a non-default initial multiplier", () => {
    const initialState: GameState = { score: 20, multiplier: 2 };
    const event: GameEvent = {
      type: "itemSelected",
      itemId: "1",
      binId: "2",
      isCorrect: true,
    };
    const newState = calculateScore(event, initialState);
    expect(newState.score).toEqual(22);
  });

  it("should reset multiplier correctly when it is deactivated", () => {
    const initialState: GameState = { score: 100, multiplier: 3 };
    const multiplierEvent: GameEvent = {
      type: "scoreMultiplier",
      active: false,
      multiplier: 2,
      timestamp: new Date(),
    };
    const newState = calculateScore(multiplierEvent, initialState);
    expect(newState.multiplier).toEqual(1); // Multiplier should reset to 1
  });

  it("should handle a series of events with an initial multiplier", () => {
    const initialState: GameState = { score: 30, multiplier: 2 };
    const events: GameEvent[] = [
      { type: "itemSelected", itemId: "1", binId: "2", isCorrect: true },
      { type: "itemMissed", itemId: "2", timestamp: new Date() },
      {
        type: "quizItem",
        questionId: "1",
        answerId: "1",
        isCorrect: true,
        timestamp: new Date(),
      },
      {
        type: "scoreMultiplier",
        active: true,
        multiplier: 3,
        timestamp: new Date(),
      },
      { type: "itemSelected", itemId: "3", binId: "1", isCorrect: true },
    ];
    const newState = calculateScore(events, initialState);
    expect(newState.score).toEqual(36);
  });
});
