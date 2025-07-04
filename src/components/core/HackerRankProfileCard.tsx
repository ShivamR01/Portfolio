import React, { useEffect, useState } from 'react';
import { Code, Star, Award, User } from 'lucide-react';

const mock = {
  username: 'shivamr12',
  name: 'Shivam Kumar',
  avatarUrl: 'https://hrcdn.net/community-frontend/assets/default_avatar-5fb0fc4f.svg',
  badges: ['Problem Solving', 'Python', 'Java'],
  stars: 4,
  rank: 11234,
  points: 1840,
  certificates: [
    { name: 'Problem Solving (Basic)', url: '#' },
    { name: 'Python (Intermediate)', url: '#' },
    { name: 'Java (Basic)', url: '#' },
  ],
};

const HackerRankProfileCard = () => {
  const [data, setData] = useState<typeof mock | null>(null);

  useEffect(() => {
    setTimeout(() => setData(mock), 500);
  }, []);

  if (!data) return <div className="p-6 bg-white rounded-lg shadow text-center">Loading HackerRank profile…</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-[#0d1117] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/3 p-6 bg-gray-100 dark:bg-[#161b22] flex flex-col items-center text-center">
        <img src={data.avatarUrl} alt="avatar" className="w-24 h-24 rounded-full border mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{data.name}</h2>
        <p className="text-gray-500 dark:text-gray-400">@{data.username}</p>

        <div className="mt-4 text-yellow-400 flex items-center space-x-1">
          {Array.from({ length: data.stars }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400" />
          ))}
        </div>

        <div className="mt-6 space-y-1">
          <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <Award className="w-5 h-5" /> Rank: #{data.rank.toLocaleString()}
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <Code className="w-5 h-5" /> Points: {data.points}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Badges</h3>
          <div className="flex flex-wrap gap-2">
            {data.badges.map((badge) => (
              <span
                key={badge}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Certificates</h3>
          <ul className="space-y-2">
            {data.certificates.map((cert) => (
              <li key={cert.name} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{cert.name}</span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            Explore more on HackerRank
          </span>
          <a
            href={`https://www.hackerrank.com/${data.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-md"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default HackerRankProfileCard;