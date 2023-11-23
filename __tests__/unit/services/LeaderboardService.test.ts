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
  nickname: "testuser",
  highScore: 100,
  lastUpdated: new Date(),
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

  it("should update a user's high score", async () => {
    mockLeaderboardAdapter.updateHighScore.mockResolvedValue(
      mockLeaderboardEntry,
    );

    const result =
      await leaderboardService.updateHighScore(mockLeaderboardEntry);

    expect(mockLeaderboardAdapter.updateHighScore).toHaveBeenCalledWith(
      mockLeaderboardEntry,
    );
    expect(result).toEqual(mockLeaderboardEntry);
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
