import React from "react";

const data = [
  { name: "John", score: 85 },
  { name: "Alice", score: 92 },
  { name: "John", score: 85 },
  { name: "Alice", score: 92 },
  { name: "John", score: 85 },
  { name: "Alice", score: 92 },
  { name: "John", score: 85 },
  { name: "Alice", score: 92 },
  { name: "John", score: 85 },
  { name: "Alice", score: 92 },
  { name: "John", score: 85 },
  { name: "Alice", score: 92 },
  // Add more data as needed, but limit to 10 rows
];

const TableComponent: React.FC = () => {
  return (
    <table className="min-w-full bg-black text-white divide-y divide-gray-200">
      <thead className="bg-gray-800">
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
        {data.slice(0, 10).map((row, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
          >
            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
