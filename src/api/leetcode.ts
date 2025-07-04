export default async function handler(req, res) {
  const { username } = req.query;

  const query = `
    query {
      matchedUser(username: "${username}") {
        username
        profile {
          realName
          reputation
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const leetRes = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    const { data } = await leetRes.json();

    const stats = data.matchedUser.submitStats.acSubmissionNum;
    const easy = stats.find(s => s.difficulty === 'Easy')?.count || 0;
    const medium = stats.find(s => s.difficulty === 'Medium')?.count || 0;
    const hard = stats.find(s => s.difficulty === 'Hard')?.count || 0;

    res.status(200).json({
      username: data.matchedUser.username,
      realName: data.matchedUser.profile.realName,
      reputation: data.matchedUser.profile.reputation,
      ranking: data.matchedUser.profile.ranking,
      easy,
      medium,
      hard,
      total: easy + medium + hard,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data from LeetCode' });
  }
}
