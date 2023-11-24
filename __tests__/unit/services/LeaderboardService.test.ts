// LeaderboardService.test.ts

import { ILeaderboardAdapter } from "@/interfaces/ILeaderboardAdapter";
import { LeaderboardEntry } from "@/models/Leaderboard";
import LeaderboardService from "@/services/LeaderboardService";

// Mock the ILeaderboardAdapter
const mockLeaderboardAdapter: jest.Mocked<ILeaderboardAdapter> = {
  getTopScores: jest.fn(),
  getUserHighScore: jest.fn(),
  updateHighScore: jest.fn(),
  getRankByUserId: jest.fn(),
};

// Mock data
const mockLeaderboardEntry: LeaderboardEntry = {
  userId: "user-123",
  gameId: "user-123",
  nickname: "testuser",
  highScore: 100,
  lastUpdated: new Date().toISOString(),
};

describe("LeaderboardService", () => {
  let leaderboardService: LeaderboardService;

  beforeEach(() => {
    leaderboardService = new LeaderboardService(mockLeaderboardAdapter);
    jest.clearAllMocks();
  });

  it("should retrieve the top scores", async () => {
    const limit = 10;
    mockLeaderboardAdapter.getTopScores.mockResolvedValue([
      mockLeaderboardEntry,
    ]);

    const result = await leaderboardService.getTopScores(limit);

    expect(mockLeaderboardAdapter.getTopScores).toHaveBeenCalledWith(limit);
    expect(result).toEqual([mockLeaderboardEntry]);
  });

  it("should retrieve a user's high score", async () => {
    const userId = "user-123";
    mockLeaderboardAdapter.getUserHighScore.mockResolvedValue(
      mockLeaderboardEntry,
    );

    const result = await leaderboardService.getUserHighScore(userId);

    expect(mockLeaderboardAdapter.getUserHighScore).toHaveBeenCalledWith(
      userId,
    );
    expect(result).toEqual(mockLeaderboardEntry);
  });

  it("should update a user's high score when new user score is higher", async () => {
    const lastUpdate = new Date();
    jest.useFakeTimers();
    jest.setSystemTime(lastUpdate); // Set the current time to a specific date
    const mockOldEntry: LeaderboardEntry = {
      userId: "user-123",
      gameId: "user-123",
      nickname: "testuser",
      highScore: 100,
      lastUpdated: new Date().toISOString(),
    };
    const args = {
      userId: "user-123",
      gameId: "ame-456",
      nickname: "testuser",
      score: mockOldEntry.highScore + 1,
    };
    const mockNewEntry: LeaderboardEntry = {
      userId: args.userId,
      gameId: args.gameId,
      nickname: args.nickname,
      highScore: args.score,
      lastUpdated: lastUpdate.toISOString(),
    };
    mockLeaderboardAdapter.getUserHighScore.mockResolvedValue(mockOldEntry);
    mockLeaderboardAdapter.updateHighScore.mockResolvedValue(mockNewEntry);

    const result = await leaderboardService.updateHighScore(args);

    expect(mockLeaderboardAdapter.getUserHighScore).toHaveBeenCalledWith(
      args.userId,
    );
    expect(mockLeaderboardAdapter.updateHighScore).toHaveBeenCalledWith(
      mockNewEntry,
    );
    expect(result).toEqual(mockNewEntry);
    jest.useRealTimers(); // Restore the original timer functions
  });

  it("should not update a user's high score when new user score is lower", async () => {
    const mockOldEntry: LeaderboardEntry = {
      userId: "user-123",
      gameId: "user-123",
      nickname: "testuser",
      highScore: 100,
      lastUpdated: new Date().toISOString(),
    };
    const args = {
      userId: "user-123",
      gameId: "ame-456",
      nickname: "testuser",
      score: mockOldEntry.highScore - 1,
    };
    const mockNewEntry: LeaderboardEntry = {
      userId: args.userId,
      gameId: args.gameId,
      nickname: args.nickname,
      highScore: args.score,
      lastUpdated: new Date().toISOString(),
    };
    mockLeaderboardAdapter.getUserHighScore.mockResolvedValue(mockOldEntry);
    mockLeaderboardAdapter.updateHighScore.mockResolvedValue(mockNewEntry);

    const result = await leaderboardService.updateHighScore(args);

    expect(mockLeaderboardAdapter.getUserHighScore).toHaveBeenCalledWith(
      args.userId,
    );
    expect(mockLeaderboardAdapter.updateHighScore).not.toHaveBeenCalled();
    expect(result).toEqual(mockOldEntry);
  });

  it("should retrieve a user's rank by user ID", async () => {
    const userId = "user-123";
    const mockRank = 1; // Example rank
    mockLeaderboardAdapter.getRankByUserId.mockResolvedValue(mockRank);

    const result = await leaderboardService.getRankByUserId(userId);

    expect(mockLeaderboardAdapter.getRankByUserId).toHaveBeenCalledWith(userId);
    expect(result).toEqual(mockRank);
  });
  // Add more tests as needed for different scenarios and error handling
});
