import { useState } from "react";
import styles from "./Main.module.css";
import Image from "next/image";

export default function Home() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerData, setSummonerData] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setSummonerName(e.target.value);
  };

  const fetchSummonerData = async () => {
    try {
      const response = await axios.get("/api/summoner", {
        params: { summonerName },
      });
      setSummonerData(response.data);
      setError("");
    } catch (error) {
      setError("Failed to fetch summoner data");
      setSummonerData(null);
    }
  };
  return (
    <>
      <main className={styles.main}>
        <div className={styles.searchContainer}>
          <input className={styles.searchBar} placeholder="Search..." />
          <Image
            src="/searchIcon.png"
            alt="Search Icon"
            priority
            width={50}
            height={50}
          />
        </div>
      </main>
      <extra>
        <div>
          <h1>League of Legends Summoner Info</h1>
          <input
            type="text"
            value={summonerName}
            onChange={handleInputChange}
            placeholder="Enter Summoner Name"
          />
          <button onClick={fetchSummonerData}>Get Summoner Data</button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          {summonerData && (
            <div>
              <h2>{summonerData.name}</h2>
              <p>Level: {summonerData.summonerLevel}</p>
              <p>Summoner ID: {summonerData.id}</p>
              {/* 추가적인 데이터 표시 가능 */}
            </div>
          )}
        </div>
      </extra>
    </>
  );
}
