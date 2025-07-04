import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

type Data = {
  username: string;
  avatarUrl: string;
  ranking: number;
  reputation: number;
  easy: number;
  medium: number;
  hard: number;
  total: number;
  contestHistory: number[];
  heatmapData: { date: string; count: number }[];
};

const mock: Data = {
  username: 'ShivamR12',
  avatarUrl: 'https://leetcode.com/static/images/avatars/avatar_01.png',
  ranking: 45231,
  reputation: 1387,
  easy: 110,
  medium: 85,
  hard: 23,
  total: 218,
  contestHistory: [1200, 1300, 1250, 1400, 1500, 1450],
  heatmapData: Array.from({ length: 100 }).map((_, i) => ({
    date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
    count: Math.floor(Math.random() * 5),
  })),
};

const LeetCodeProfileCard: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    setTimeout(() => setData(mock), 500);
  }, []);

  if (!data) return <div className="p-6 bg-white rounded-lg shadow text-center">Loading LeetCode profile…</div>;

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-[#0d1117] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/3 p-6 bg-gray-100 dark:bg-[#161b22] flex flex-col items-center text-center">
        <img src={data.avatarUrl} alt="avatar" className="w-24 h-24 rounded-full border mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{data.username}</h2>
        <p className="text-gray-500 dark:text-gray-400">Rank #{data.ranking.toLocaleString()}</p>
        <p className="text-gray-500 dark:text-gray-400">Reputation: {data.reputation}</p>

        <div className="grid grid-cols-3 gap-4 mt-6 w-full">
          <div className="text-center">
            <p className="text-green-500 font-bold text-lg">{data.easy}</p>
            <p className="text-sm text-gray-500">Easy</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-500 font-bold text-lg">{data.medium}</p>
            <p className="text-sm text-gray-500">Medium</p>
          </div>
          <div className="text-center">
            <p className="text-red-500 font-bold text-lg">{data.hard}</p>
            <p className="text-sm text-gray-500">Hard</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Contest Rating History</h3>
          <div className="w-full h-24 bg-gray-100 dark:bg-[#1f2937] rounded-lg flex items-end space-x-1 px-2 py-1">
            {data.contestHistory.map((rating, idx) => (
              <div
                key={idx}
                className="flex-1 rounded bg-indigo-500"
                style={{ height: `${(rating - 1200) / 4}px` }}
                title={`Contest ${idx + 1}: ${rating}`}
              ></div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Submission Activity</h3>
          <div className="overflow-x-auto">
            <CalendarHeatmap
              startDate={data.heatmapData[data.heatmapData.length - 1].date}
              endDate={data.heatmapData[0].date}
              values={data.heatmapData}
              classForValue={(val) => {
                if (!val) return 'color-empty';
                return `color-scale-${val.count}`;
              }}
              gutterSize={2}
              showWeekdayLabels
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            Total Solved: <span className="text-blue-600 dark:text-blue-400">{data.total}</span>
          </span>
          <a
            href={`https://leetcode.com/${data.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeProfileCard;