// import * as axios from "axios";

// const baseURL = "http://api.football-data.org/v2/";

// let instance = axios.create({
//   headers: {
//     "X-Auth-Token": "5ec0722770094e06af6c5f4f5e67e770"
//   }
// });

// export const LigiApi = {
//   getLigiApi() {
//     return instance.get(`${baseURL}competitions/`).then((response) => {
//       debugger;
//       console.log(response.competitions);
//       return response.competitions;
//     });
//   },
// };

const apiBase = "https://apiv3.apifootball.com/";
const apiKey = "APIkey=c786da0b260f3d848f9c68ad8d809ddbc715c972f34a77cdddd97c8839de73c0";

const getResource = async (url) => {
  let res = await fetch(url, {
    credentials: "include",
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000'
      // 'Content-Type': 'application/json',
    }
});

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export const getAllLigi = async () => {
  const res = await getResource(`${apiBase}?action=get_leagues&${apiKey}`);
  return res.map(transformLigi);
};

// export const totalCountApi = async () => {
//   const res = await getResource(`${_apiBase}competitions/`);
//   return res.count; 
// }

export const getLiga = async (id) => {
  debugger;
  const res = await getResource(`${apiBase}?action=get_events&from=2022-02-12&to=2022-03-1&league_id=${id}&${apiKey}`);
  return res.map(transformMatches);
}

const transformLigi = (ligi) => {
  return {
    id: ligi.league_id,
    name: ligi.league_name,
    country: ligi.country_name
  };
}

  const transformMatches = (match) => {
    return {
      id: match.match_id,
      name: match.league_name,
      date: match.match_date,
      time: match.match_time,
      status: match.match_status,
      awayteamName: match.match_awayteam_name,
      hometeamName: match.match_hometeam_name,
      hometeamFtscore: match.match_hometeam_ft_score || '',
      awayteamFtscore: match.match_awayteam_ft_score || '',
      hometeamExtrascore: match.match_hometeam_extra_score || '',
      awayteamExtrascore: match.match_awayteamextra_score || '',
      hometeamPenalty: match.match_hometeam_penalty_score || '',
      awayteamPenalty: match.match_awayteam_penalty_score || ''
    };
};
