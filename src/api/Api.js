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

const _apiBase = "http://api.football-data.org/v2/";
const _apiKey = "API token=5ec0722770094e06af6c5f4f5e67e770";

const getResource = async (url) => {
  let res = await fetch(url, {
    credentials: "include",
    headers: {
      "X-Auth-Token": "5ec0722770094e06af6c5f4f5e67e770",
      // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Content-Type': 'application/json',
    }
});

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export const getAllLigi = async () => {
  const res = await getResource(`${_apiBase}competitions/`);
  return res.competitions.map(transformLigi);
};

export const totalCountApi = async () => {
  const res = await getResource(`${_apiBase}competitions/`);
  return res.count; 
}

export const getMatchesApi = async (id) => {
  debugger;
  const res = await getResource(`${_apiBase}competitions/${id}/matches`);
  return transformMatches(res);
}

const transformLigi = (ligi) => {
  return {
    id: ligi.id,
    name: ligi.name,
    country: ligi.area.name
  };
}

  const transformMatches = (match) => {
    return {
      id: match.id,
      startDate: match.season.startDate,
      endDate: match.season.endDate,
      utcDate: match.utcDate,
      status: match.status,
      homeTeam: match.homeTeam.name,
      homeTeam: match.awayTeam.name
    };
};
