let dateNow = new Date();
let dateDefaultFrom = `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}`;
let dateDefaultTo = new Date(
  dateNow.getFullYear(),
  dateNow.getMonth(),
  dateNow.getDate() + 15
);
dateDefaultTo = `${dateDefaultTo.getFullYear()}-${dateDefaultTo.getMonth()}-${dateDefaultTo.getDate()}`;

const getResource = async (url) => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export const getAllLigi = async () => {
  const res = await getResource(
    `${process.env.REACT_APP_API_URL}?action=get_leagues&${process.env.REACT_APP_API_KEY}`
  );
  return res.map(transformLigi);
};

export const getTeams = async (id = 146) => {
  const res = await getResource(
    `${process.env.REACT_APP_API_URL}?action=get_teams&league_id=${id}&${process.env.REACT_APP_API_KEY}`
  );
  return res.map(transformTeam);
};

export const getMatchTeam = async (
  id,
  from = dateDefaultFrom,
  to = dateDefaultTo
) => {
  const res = await getResource(
    `${process.env.REACT_APP_API_URL}?action=get_events&timezone=Europe/Moscow&from=${from}&to=${to}&team_id=${id}&${process.env.REACT_APP_API_KEY}`
  );
  return res.map(transformMatches);
};

export const getNameTeam = async (id) => {
  const res = await getResource(
    `${process.env.REACT_APP_API_URL}?action=get_teams&team_id=${id}&${process.env.REACT_APP_API_KEY}`
  );
  return res.map(transformTeam);
};

export const getLiga = async (
  id,
  from = dateDefaultFrom,
  to = dateDefaultTo
) => {
  debugger;
  const res = await getResource(
    `${process.env.REACT_APP_API_URL}?action=get_events&timezone=Europe/Moscow&from=${from}&to=${to}&league_id=${id}&${process.env.REACT_APP_API_KEY}`
  );
  return res.map(transformMatches);
};

const transformLigi = (ligi) => {
  return {
    id: ligi.league_id,
    name: ligi.league_name,
    country: ligi.country_name,
  };
};

const transformTeam = (team) => {
  return {
    id: team.team_key,
    name: team.team_name,
    badge: team.team_badge,
  };
};

const transformMatches = (match) => {
  return {
    id: match.match_id,
    name: match.league_name,
    date: match.match_date,
    time: match.match_time,
    status: match.match_status || "Not yet",
    awayteamName: match.match_awayteam_name,
    hometeamName: match.match_hometeam_name,
    hometeamFtscore: match.match_hometeam_ft_score || "",
    awayteamFtscore: match.match_awayteam_ft_score || "",
    hometeamExtrascore: match.match_hometeam_extra_score || "not",
    awayteamExtrascore: match.match_awayteamextra_score || "not",
    hometeamPenalty: match.match_hometeam_penalty_score || "not",
    awayteamPenalty: match.match_awayteam_penalty_score || "not",
  };
};
