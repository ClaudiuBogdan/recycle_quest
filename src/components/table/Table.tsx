import React, { useEffect } from "react";
import { useLeaderboardUsers } from "@/adapters/api";

const TableComponent: React.FC = () => {
  const { data, loading, loadData } = useLeaderboardUsers();
  useEffect(() => {
    loadData()
      .then(() => {
        console.log("triggered");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loadData]);

  if (loading) {
    return <div>Loading</div>;
  }

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
        {data &&
          data.map((row, index) => (
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

export default TableComponent;
