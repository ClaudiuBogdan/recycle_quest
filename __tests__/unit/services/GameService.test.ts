// GameService.test.ts

import { IGameAdapter } from "@/interfaces/IGameAdapter";
import { GameData } from "@/models/Game";
import GameService from "@/services/GameService";

// Mock the IGameAdapter
const mockGameAdapter: jest.Mocked<IGameAdapter> = {
  createGame: jest.fn(),
  getGameById: jest.fn(),
};

const mockGame: GameData = {
  id: "game-123",
  userId: "user-456",
  startedAt: new Date("2023-01-01T12:00:00Z"),
  endedAt: new Date("2023-01-01T12:30:00Z"),
  events: [],
  score: 100,
};

describe("GameService", () => {
  let gameService: GameService;

  beforeEach(() => {
    gameService = new GameService(mockGameAdapter);
    jest.clearAllMocks();
  });

  // Test for successful game creation
  it("should create a game", async () => {
    mockGameAdapter.createGame.mockResolvedValue(mockGame);

    const result = await gameService.createGame(mockGame);

    expect(mockGameAdapter.createGame).toHaveBeenCalledWith(mockGame);
    expect(result).toEqual(mockGame);
  });

  it("should get a game by id", async () => {
    const gameId = "some-game-id";
    mockGameAdapter.getGameById.mockResolvedValue(mockGame);

    const result = await gameService.getGameById(gameId);

    expect(mockGameAdapter.getGameById).toHaveBeenCalledWith(gameId);
    expect(result).toEqual(mockGame);
  });

  it("should calculate stats correctly for a game loaded by ID", async () => {
    const gameId = "some-game-id";
    const mockGameData: GameData = {
      ...mockGame,
      id: gameId,
      events: [
        {
          type: "itemSelected",
          itemId: "item1",
          binId: "bin1",
          isCorrect: true,
          timestamp: new Date(),
        },
        {
          type: "itemSelected",
          itemId: "item1",
          binId: "bin2",
          isCorrect: true,
          timestamp: new Date(),
        },
        {
          type: "itemSelected",
          itemId: "item2",
          binId: "bin3",
          isCorrect: false,
          timestamp: new Date(),
        },
        {
          type: "quizItem",
          questionId: "q1",
          answerId: "a1",
          isCorrect: true,
          timestamp: new Date(),
        },
        {
          type: "quizItem",
          questionId: "q2",
          answerId: "a2",
          isCorrect: false,
          timestamp: new Date(),
        },
      ],
    };

    mockGameAdapter.getGameById.mockResolvedValue(mockGameData);

    const result = await gameService.getGameById(gameId);

    expect(mockGameAdapter.getGameById).toHaveBeenCalledWith(gameId);
    expect(result).not.toBeNull();
    expect(result).toHaveProperty("stats");
    expect(result!.stats!.correct).toEqual([
      { type: "bin_selection", binId: "bin1", count: 1 },
      { type: "bin_selection", binId: "bin2", count: 1 },
      { type: "quiz_answer", count: 1 },
    ]);
    expect(result!.stats!.incorrect).toEqual([
      { type: "bin_selection", binId: "bin3", count: 1 },
      { type: "quiz_answer", count: 1 },
    ]);
  });

  it("should return null if a game is not found", async () => {
    const gameId = "non-existing-game-id";
    mockGameAdapter.getGameById.mockResolvedValue(null);

    const result = await gameService.getGameById(gameId);

    expect(mockGameAdapter.getGameById).toHaveBeenCalledWith(gameId);
    expect(result).toBeNull();
  });

  it("should throw an error when game creation fails", async () => {
    const error = new Error("Failed to create game");
    mockGameAdapter.createGame.mockRejectedValue(error);

    await expect(gameService.createGame(mockGame)).rejects.toThrow(
      "Failed to create game",
    );
  });
});
