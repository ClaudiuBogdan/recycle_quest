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
  startTime: new Date("2023-01-01T12:00:00Z"),
  endTime: new Date("2023-01-01T12:30:00Z"),
  itemsSelected: [
    {
      itemId: "item-1",
      binId: "bin-1",
      correct: true,
    },
    {
      itemId: "item-2",
      binId: "bin-2",
      correct: false,
    },
  ],
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
