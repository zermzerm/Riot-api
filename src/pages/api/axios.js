import axios from "axios";

const API_KEY = "RGAPI-7a0dd299-6aa5-47e5-8710-dbe48db4665d";

export default async function handler(req, res) {
  const { summonerName } = req.query;

  if (!summonerName) {
    return res.status(400).json({ error: "Summoner name is incorrect" });
  }

  try {
    const response = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
      {
        headers: {
          "X-Riot-Token": API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch summoner data" });
  }
}
