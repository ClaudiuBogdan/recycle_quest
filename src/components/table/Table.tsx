import React from "react";
import { LeaderboardEntry } from "@/types";

type LeaderboardTableProps = {
  entries: LeaderboardEntry[];
};

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries }) => {
  return (
    <table className="min-w-full bg-white text-black divide-y divide-gray-900">
      <thead className="bg-gray-200">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
            #
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        {entries.map((row, index) => (
          <tr
            key={row.id}
            className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
          >
            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.username}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.highscore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;
