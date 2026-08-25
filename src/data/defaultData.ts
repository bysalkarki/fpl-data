import { FPLPlayer, FPLManager, Top20Consensus } from '../types';

export const CURRENT_GAMEWEEK = 1;

export const INITIAL_PLAYERS: FPLPlayer[] = [
  {
    "id": 1,
    "web_name": "Raya",
    "first_name": "David",
    "second_name": "Raya Martín",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 1,
    "now_cost": 60,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "38.0",
    "ict_index": "1.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 2,
    "web_name": "Arrizabalaga",
    "first_name": "Kepa",
    "second_name": "Arrizabalaga Revuelta",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 3,
    "web_name": "Meslier",
    "first_name": "Illan",
    "second_name": "Meslier",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 4,
    "web_name": "Gabriel",
    "first_name": "Gabriel",
    "second_name": "dos Santos Magalhães",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 80,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "29.4",
    "ict_index": "0.9",
    "expected_goals": "0.05",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 5,
    "web_name": "J.Timber",
    "first_name": "Jurriën",
    "second_name": "Timber",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Groin injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 6,
    "web_name": "Saliba",
    "first_name": "William",
    "second_name": "Saliba",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Back injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 7,
    "web_name": "Lewis-Skelly",
    "first_name": "Myles",
    "second_name": "Lewis-Skelly",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.7",
    "ict_index": "4.1",
    "expected_goals": "0.06",
    "expected_assists": "0.11",
    "expected_goal_involvements": "0.17",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 8,
    "web_name": "Calafiori",
    "first_name": "Riccardo",
    "second_name": "Calafiori",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 55,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "41.0",
    "ict_index": "4.2",
    "expected_goals": "0.04",
    "expected_assists": "0.09",
    "expected_goal_involvements": "0.13",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 9,
    "web_name": "Hincapie",
    "first_name": "Piero",
    "second_name": "Hincapié",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.6",
    "ict_index": "0.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 10,
    "web_name": "White",
    "first_name": "Benjamin",
    "second_name": "White",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 55,
    "form": "11.0",
    "total_points": 11,
    "event_points": 11,
    "selected_by_percent": "5.5",
    "ict_index": "7.3",
    "expected_goals": "0.18",
    "expected_assists": "0.21",
    "expected_goal_involvements": "0.39",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "11.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 11,
    "web_name": "Mosquera",
    "first_name": "Cristhian",
    "second_name": "Mosquera",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 55,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "6.0",
    "ict_index": "1.5",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 12,
    "web_name": "Saka",
    "first_name": "Bukayo",
    "second_name": "Saka",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 95,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "10.3",
    "ict_index": "10.2",
    "expected_goals": "0.64",
    "expected_assists": "0.08",
    "expected_goal_involvements": "0.72",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 13,
    "web_name": "Rice",
    "first_name": "Declan",
    "second_name": "Rice",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 75,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "17.6",
    "ict_index": "1.5",
    "expected_goals": "0.07",
    "expected_assists": "0.08",
    "expected_goal_involvements": "0.15",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 14,
    "web_name": "Eze",
    "first_name": "Eberechi",
    "second_name": "Eze",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 65,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.9",
    "ict_index": "0.1",
    "expected_goals": "0.04",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 15,
    "web_name": "Ødegaard",
    "first_name": "Martin",
    "second_name": "Ødegaard",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 65,
    "form": "11.0",
    "total_points": 11,
    "event_points": 11,
    "selected_by_percent": "10.4",
    "ict_index": "12.3",
    "expected_goals": "0.21",
    "expected_assists": "0.10",
    "expected_goal_involvements": "0.31",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "11.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 16,
    "web_name": "Madueke",
    "first_name": "Noni",
    "second_name": "Madueke",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 65,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.3",
    "ict_index": "5.3",
    "expected_goals": "0.00",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 17,
    "web_name": "Merino",
    "first_name": "Mikel",
    "second_name": "Merino Zazón",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.6",
    "ict_index": "1.9",
    "expected_goals": "0.14",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 18,
    "web_name": "Martinelli",
    "first_name": "Gabriel",
    "second_name": "Martinelli Silva",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 19,
    "web_name": "Zubimendi",
    "first_name": "Martín",
    "second_name": "Zubimendi Ibáñez",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.1",
    "ict_index": "0.6",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 20,
    "web_name": "Dowman",
    "first_name": "Max",
    "second_name": "Dowman",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 22,
    "web_name": "Nwaneri",
    "first_name": "Ethan",
    "second_name": "Nwaneri",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 23,
    "web_name": "Fábio Vieira",
    "first_name": "Fábio",
    "second_name": "Ferreira Vieira",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 24,
    "web_name": "Nelson",
    "first_name": "Reiss",
    "second_name": "Nelson",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 25,
    "web_name": "Gyökeres",
    "first_name": "Viktor",
    "second_name": "Gyökeres",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 4,
    "now_cost": 75,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "7.9",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 26,
    "web_name": "Havertz",
    "first_name": "Kai",
    "second_name": "Havertz",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 4,
    "now_cost": 75,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "6.8",
    "ict_index": "7.5",
    "expected_goals": "0.26",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.29",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 27,
    "web_name": "G.Jesus",
    "first_name": "Gabriel",
    "second_name": "Fernando de Jesus",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 4,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 31,
    "web_name": "Konsa",
    "first_name": "Ezri",
    "second_name": "Konsa Ngoyo",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "11.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 452,
    "web_name": "Bruno G.",
    "first_name": "Bruno",
    "second_name": "Guimarães Rodriguez Moura",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 70,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "3.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Thigh injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 557,
    "web_name": "Tzolis",
    "first_name": "Christos",
    "second_name": "Tzolis",
    "team": 1,
    "team_short": "ARS",
    "team_name": "Arsenal",
    "element_type": 3,
    "now_cost": 65,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "25.7",
    "ict_index": "8.7",
    "expected_goals": "0.19",
    "expected_assists": "0.14",
    "expected_goal_involvements": "0.33",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 28,
    "web_name": "Martinez",
    "first_name": "Emiliano",
    "second_name": "Martínez Romero",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "4.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 29,
    "web_name": "M.Bizot",
    "first_name": "Marco",
    "second_name": "Bizot",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 1,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "2.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 30,
    "web_name": "Digne",
    "first_name": "Lucas",
    "second_name": "Digne",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Paris Saint-Germain permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 32,
    "web_name": "Cash",
    "first_name": "Matty",
    "second_name": "Cash",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 45,
    "form": "-1.0",
    "total_points": -1,
    "event_points": -1,
    "selected_by_percent": "8.3",
    "ict_index": "1.3",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "-1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 33,
    "web_name": "Mings",
    "first_name": "Tyrone",
    "second_name": "Mings",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.4",
    "ict_index": "0.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 34,
    "web_name": "Pau",
    "first_name": "Pau",
    "second_name": "Torres",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 35,
    "web_name": "Bogarde",
    "first_name": "Lamare",
    "second_name": "Bogarde",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.3",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 36,
    "web_name": "Maatsen",
    "first_name": "Ian",
    "second_name": "Maatsen",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.8",
    "ict_index": "1.3",
    "expected_goals": "0.03",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 37,
    "web_name": "Lindelöf",
    "first_name": "Victor",
    "second_name": "Lindelöf",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 45,
    "form": "-2.0",
    "total_points": -2,
    "event_points": -2,
    "selected_by_percent": "0.3",
    "ict_index": "0.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "-2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 38,
    "web_name": "A.García",
    "first_name": "Andrés",
    "second_name": "García",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 39,
    "web_name": "Nedeljkovic",
    "first_name": "Kosta",
    "second_name": "Nedeljkovic",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Rangers on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 41,
    "web_name": "Buendía",
    "first_name": "Emiliano",
    "second_name": "Buendía Stati",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.3",
    "ict_index": "2.2",
    "expected_goals": "0.13",
    "expected_assists": "0.09",
    "expected_goal_involvements": "0.22",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 44,
    "web_name": "Bailey",
    "first_name": "Leon",
    "second_name": "Bailey",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 45,
    "web_name": "McGinn",
    "first_name": "John",
    "second_name": "McGinn",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "3.1",
    "ict_index": "0.5",
    "expected_goals": "0.04",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.05",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 46,
    "web_name": "Barkley",
    "first_name": "Ross",
    "second_name": "Barkley",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "3.8",
    "expected_goals": "0.10",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.12",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 47,
    "web_name": "Kamara",
    "first_name": "Boubacar",
    "second_name": "Kamara",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.4",
    "ict_index": "1.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 48,
    "web_name": "Onana",
    "first_name": "Amadou",
    "second_name": "Onana",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 49,
    "web_name": "Iling Jr",
    "first_name": "Samuel",
    "second_name": "Iling-Junior",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Bolton Wanderers on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 50,
    "web_name": "Burrowes",
    "first_name": "Bradley",
    "second_name": "Burrowes",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 51,
    "web_name": "George Hemmings",
    "first_name": "George",
    "second_name": "Hemmings",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 45,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.7",
    "ict_index": "2.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 52,
    "web_name": "Alysson",
    "first_name": "Alysson Edward Franco",
    "second_name": "da Rocha dos Santos",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 53,
    "web_name": "Manzambi",
    "first_name": "Johan",
    "second_name": "Manzambi",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 54,
    "web_name": "Gomes",
    "first_name": "Joao",
    "second_name": "Gomes",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 55,
    "form": "-2.0",
    "total_points": -2,
    "event_points": -2,
    "selected_by_percent": "0.1",
    "ict_index": "1.2",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "s",
    "news": "Suspended until 19 Sep",
    "chance_of_playing_next_round": 0,
    "points_per_game": "-2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 55,
    "web_name": "Watkins",
    "first_name": "Ollie",
    "second_name": "Watkins",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 4,
    "now_cost": 80,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "9.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 56,
    "web_name": "Abraham",
    "first_name": "Tammy",
    "second_name": "Abraham",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Knock - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 160,
    "web_name": "Garnacho",
    "first_name": "Alejandro",
    "second_name": "Garnacho Ferreyra",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 582,
    "web_name": "Madjo",
    "first_name": "Brian",
    "second_name": "Madjo",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Unspecified injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 596,
    "web_name": "Ruggeri",
    "first_name": "Matteo",
    "second_name": "Ruggeri",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 597,
    "web_name": "Suzuki",
    "first_name": "Zion",
    "second_name": "Suzuki",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.8",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 606,
    "web_name": "Rowe",
    "first_name": "Triston",
    "second_name": "Rowe",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 607,
    "web_name": "Lynch",
    "first_name": "Luka",
    "second_name": "Lynch",
    "team": 2,
    "team_short": "AVL",
    "team_name": "Aston Villa",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 57,
    "web_name": "Petrović",
    "first_name": "Đorđe",
    "second_name": "Petrović",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 1,
    "now_cost": 45,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "3.3",
    "ict_index": "3.7",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 58,
    "web_name": "Forster",
    "first_name": "Fraser",
    "second_name": "Forster",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "3.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 59,
    "web_name": "Dennis",
    "first_name": "Will",
    "second_name": "Dennis",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 60,
    "web_name": "Hill",
    "first_name": "James",
    "second_name": "Hill",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.9",
    "ict_index": "1.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 61,
    "web_name": "Truffert",
    "first_name": "Adrien",
    "second_name": "Truffert",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "4.3",
    "ict_index": "1.7",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 62,
    "web_name": "Diakité",
    "first_name": "Bafodé",
    "second_name": "Diakité",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 63,
    "web_name": "Milosavljević",
    "first_name": "Veljko",
    "second_name": "Milosavljevic",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Unspecified injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 64,
    "web_name": "Smith",
    "first_name": "Adam",
    "second_name": "Smith",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 65,
    "web_name": "J.Araujo",
    "first_name": "Julián",
    "second_name": "Araujo Zúñiga",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Thigh injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 66,
    "web_name": "Soler",
    "first_name": "Julio",
    "second_name": "Soler Barreto",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Hamstring injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 67,
    "web_name": "Rayan",
    "first_name": "Rayan Vitor",
    "second_name": "Simplício Rocha",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 65,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "2.8",
    "ict_index": "3.5",
    "expected_goals": "0.04",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.07",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 68,
    "web_name": "Tavernier",
    "first_name": "Marcus",
    "second_name": "Tavernier",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 60,
    "form": "10.0",
    "total_points": 10,
    "event_points": 10,
    "selected_by_percent": "2.0",
    "ict_index": "7.5",
    "expected_goals": "0.40",
    "expected_assists": "0.08",
    "expected_goal_involvements": "0.48",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "10.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 69,
    "web_name": "Scott",
    "first_name": "Alex",
    "second_name": "Scott",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.5",
    "ict_index": "1.6",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 70,
    "web_name": "Kluivert",
    "first_name": "Justin",
    "second_name": "Kluivert",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 60,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "1.2",
    "ict_index": "4.2",
    "expected_goals": "0.11",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.11",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 71,
    "web_name": "Cook",
    "first_name": "Lewis",
    "second_name": "Cook",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.2",
    "ict_index": "0.7",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 72,
    "web_name": "Gannon-Doak",
    "first_name": "Ben",
    "second_name": "Gannon-Doak",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 73,
    "web_name": "Adams",
    "first_name": "Tyler",
    "second_name": "Adams",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 74,
    "web_name": "Brooks",
    "first_name": "David",
    "second_name": "Brooks",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 75,
    "web_name": "Christie",
    "first_name": "Ryan",
    "second_name": "Christie",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 76,
    "web_name": "Tóth.A",
    "first_name": "Alex",
    "second_name": "Tóth",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "0.3",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 77,
    "web_name": "Adli",
    "first_name": "Amine",
    "second_name": "Adli",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Unspecified injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 78,
    "web_name": "Kroupi.Jr",
    "first_name": "Junior",
    "second_name": "Kroupi",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 3,
    "now_cost": 75,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Foot injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 79,
    "web_name": "Evanilson",
    "first_name": "Francisco Evanilson",
    "second_name": "de Lima Barbosa",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 4,
    "now_cost": 60,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "2.7",
    "ict_index": "3.3",
    "expected_goals": "0.00",
    "expected_assists": "0.21",
    "expected_goal_involvements": "0.21",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 80,
    "web_name": "Enes Ünal",
    "first_name": "Enes",
    "second_name": "Ünal",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Getafe permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 81,
    "web_name": "Rodríguez",
    "first_name": "Álvaro",
    "second_name": "Rodríguez",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 4,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 566,
    "web_name": "Silva",
    "first_name": "António João",
    "second_name": "Pereira de Albuquerque Tavares da Silva",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.3",
    "ict_index": "3.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 573,
    "web_name": "Sanchez",
    "first_name": "Juanlu",
    "second_name": "Sánchez",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 608,
    "web_name": "Jebbison",
    "first_name": "Daniel",
    "second_name": "Jebbison",
    "team": 3,
    "team_short": "BOU",
    "team_name": "Bournemouth",
    "element_type": 4,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "2.1",
    "expected_goals": "0.10",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.10",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 82,
    "web_name": "Kelleher",
    "first_name": "Caoimhín",
    "second_name": "Kelleher",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 1,
    "now_cost": 50,
    "form": "7.0",
    "total_points": 7,
    "event_points": 7,
    "selected_by_percent": "6.2",
    "ict_index": "3.1",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "7.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 83,
    "web_name": "Valdimarsson",
    "first_name": "Hákon Rafn",
    "second_name": "Valdimarsson",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 84,
    "web_name": "Collins",
    "first_name": "Nathan",
    "second_name": "Collins",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 55,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "2.0",
    "ict_index": "5.0",
    "expected_goals": "0.34",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.38",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 85,
    "web_name": "Van den Berg",
    "first_name": "Sepp",
    "second_name": "van den Berg",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Groin injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 86,
    "web_name": "Lewis-Potter",
    "first_name": "Keane",
    "second_name": "Lewis-Potter",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 55,
    "form": "10.0",
    "total_points": 10,
    "event_points": 10,
    "selected_by_percent": "0.7",
    "ict_index": "8.2",
    "expected_goals": "0.77",
    "expected_assists": "0.12",
    "expected_goal_involvements": "0.89",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "10.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 87,
    "web_name": "Ajer",
    "first_name": "Kristoffer",
    "second_name": "Ajer",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 45,
    "form": "8.0",
    "total_points": 8,
    "event_points": 8,
    "selected_by_percent": "3.8",
    "ict_index": "5.6",
    "expected_goals": "0.11",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.13",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "8.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 88,
    "web_name": "Kayode",
    "first_name": "Michael",
    "second_name": "Kayode",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 45,
    "form": "13.0",
    "total_points": 13,
    "event_points": 13,
    "selected_by_percent": "5.4",
    "ict_index": "8.1",
    "expected_goals": "0.50",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.50",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "13.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 89,
    "web_name": "Henry",
    "first_name": "Rico",
    "second_name": "Henry",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 90,
    "web_name": "Hickey",
    "first_name": "Aaron",
    "second_name": "Hickey",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 91,
    "web_name": "Pinnock",
    "first_name": "Ethan",
    "second_name": "Pinnock",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 92,
    "web_name": "Ji-soo",
    "first_name": "Kim",
    "second_name": "Ji-soo",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 93,
    "web_name": "Schuster",
    "first_name": "Jannik",
    "second_name": "Schuster",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 94,
    "web_name": "Schade",
    "first_name": "Kevin",
    "second_name": "Schade",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 60,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "3.5",
    "ict_index": "8.5",
    "expected_goals": "0.52",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.53",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 95,
    "web_name": "O.Dango",
    "first_name": "Dango",
    "second_name": "Ouattara",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 65,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "1.2",
    "ict_index": "4.7",
    "expected_goals": "0.05",
    "expected_assists": "0.29",
    "expected_goal_involvements": "0.34",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 96,
    "web_name": "Damsgaard",
    "first_name": "Mikkel",
    "second_name": "Damsgaard",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.6",
    "ict_index": "3.4",
    "expected_goals": "0.00",
    "expected_assists": "0.11",
    "expected_goal_involvements": "0.11",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 97,
    "web_name": "Jensen",
    "first_name": "Mathias",
    "second_name": "Jensen",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 55,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "0.2",
    "ict_index": "7.2",
    "expected_goals": "0.08",
    "expected_assists": "0.34",
    "expected_goal_involvements": "0.42",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 98,
    "web_name": "Janelt",
    "first_name": "Vitaly",
    "second_name": "Janelt",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 50,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "0.3",
    "ict_index": "11.6",
    "expected_goals": "0.39",
    "expected_assists": "0.17",
    "expected_goal_involvements": "0.56",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 99,
    "web_name": "Milambo",
    "first_name": "Antoni",
    "second_name": "Milambo",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 100,
    "web_name": "Carvalho",
    "first_name": "Fábio",
    "second_name": "Freitas Gouveia Carvalho",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Lack of match fitness - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 102,
    "web_name": "Yarmoliuk",
    "first_name": "Yehor",
    "second_name": "Yarmoliuk",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.2",
    "ict_index": "0.6",
    "expected_goals": "0.04",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 103,
    "web_name": "Dasilva",
    "first_name": "Josh",
    "second_name": "Dasilva",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 105,
    "web_name": "Anthony",
    "first_name": "Jaidon",
    "second_name": "Anthony",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "4.7",
    "expected_goals": "0.03",
    "expected_assists": "0.35",
    "expected_goal_involvements": "0.38",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 106,
    "web_name": "Thiago",
    "first_name": "Igor Thiago",
    "second_name": "Nascimento Rodrigues",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 4,
    "now_cost": 80,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "17.1",
    "ict_index": "1.4",
    "expected_goals": "1.00",
    "expected_assists": "0.08",
    "expected_goal_involvements": "1.08",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 107,
    "web_name": "Furo",
    "first_name": "Kaye",
    "second_name": "Furo",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.9",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 108,
    "web_name": "Wilson",
    "first_name": "Callum",
    "second_name": "Wilson",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.4",
    "ict_index": "1.8",
    "expected_goals": "0.03",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.07",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 565,
    "web_name": "M.Sangaré",
    "first_name": "Mamadou",
    "second_name": "Sangaré",
    "team": 4,
    "team_short": "BRE",
    "team_name": "Brentford",
    "element_type": 3,
    "now_cost": 55,
    "form": "14.0",
    "total_points": 14,
    "event_points": 14,
    "selected_by_percent": "5.8",
    "ict_index": "7.4",
    "expected_goals": "0.05",
    "expected_assists": "0.33",
    "expected_goal_involvements": "0.38",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "14.0",
    "goals_scored": 0,
    "assists": 2,
    "clean_sheets": 1,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 109,
    "web_name": "Verbruggen",
    "first_name": "Bart",
    "second_name": "Verbruggen",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 1,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "21.7",
    "ict_index": "0.7",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 111,
    "web_name": "Steele",
    "first_name": "Jason",
    "second_name": "Steele",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "4.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 113,
    "web_name": "F.Kadıoğlu",
    "first_name": "Ferdi",
    "second_name": "Kadıoğlu",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "2.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Unspecified injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 114,
    "web_name": "Boscagli",
    "first_name": "Olivier",
    "second_name": "Boscagli",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "0.3",
    "ict_index": "2.9",
    "expected_goals": "0.00",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 115,
    "web_name": "De Cuyper",
    "first_name": "Maxim",
    "second_name": "De Cuyper",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 45,
    "form": "17.0",
    "total_points": 17,
    "event_points": 17,
    "selected_by_percent": "4.9",
    "ict_index": "12.9",
    "expected_goals": "1.47",
    "expected_assists": "0.21",
    "expected_goal_involvements": "1.68",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "17.0",
    "goals_scored": 1,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 116,
    "web_name": "Dunk",
    "first_name": "Lewis",
    "second_name": "Dunk",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "1.1",
    "ict_index": "2.0",
    "expected_goals": "0.00",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 117,
    "web_name": "Coppola",
    "first_name": "Diego",
    "second_name": "Coppola",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 118,
    "web_name": "Igor",
    "first_name": "Igor Julio",
    "second_name": "dos Santos de Paulo",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 119,
    "web_name": "Costinha",
    "first_name": "João Pedro",
    "second_name": "Loureiro da Costa",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "2.8",
    "expected_goals": "0.12",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.12",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 120,
    "web_name": "Svoboda",
    "first_name": "Michael",
    "second_name": "Svoboda",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 121,
    "web_name": "Mitoma",
    "first_name": "Mitoma",
    "second_name": "Kaoru",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Hamstring injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 122,
    "web_name": "Minteh",
    "first_name": "Yankuba",
    "second_name": "Minteh",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Leg injury - Expected back 28 Nov",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 123,
    "web_name": "Hinshelwood",
    "first_name": "Jack",
    "second_name": "Hinshelwood",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 60,
    "form": "16.0",
    "total_points": 16,
    "event_points": 16,
    "selected_by_percent": "1.5",
    "ict_index": "14.5",
    "expected_goals": "1.41",
    "expected_assists": "0.02",
    "expected_goal_involvements": "1.43",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "16.0",
    "goals_scored": 2,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 124,
    "web_name": "Groß",
    "first_name": "Pascal",
    "second_name": "Groß",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "13.6",
    "ict_index": "8.6",
    "expected_goals": "0.00",
    "expected_assists": "0.27",
    "expected_goal_involvements": "0.27",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 125,
    "web_name": "Georginio",
    "first_name": "Georginio",
    "second_name": "Rutter",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 4,
    "now_cost": 55,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "1.0",
    "ict_index": "4.6",
    "expected_goals": "0.08",
    "expected_assists": "0.44",
    "expected_goal_involvements": "0.52",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 126,
    "web_name": "O'Riley",
    "first_name": "Matt",
    "second_name": "O'Riley",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 127,
    "web_name": "Gomez",
    "first_name": "Diego",
    "second_name": "Gómez Amarilla",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 50,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "3.8",
    "ict_index": "9.9",
    "expected_goals": "0.18",
    "expected_assists": "0.48",
    "expected_goal_involvements": "0.66",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 128,
    "web_name": "Buonanotte",
    "first_name": "Facundo",
    "second_name": "Buonanotte",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Elche on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 129,
    "web_name": "Ayari",
    "first_name": "Yasin",
    "second_name": "Ayari",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.7",
    "ict_index": "1.7",
    "expected_goals": "0.11",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.14",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 130,
    "web_name": "Wieffer",
    "first_name": "Mats",
    "second_name": "Wieffer",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 50,
    "form": "7.0",
    "total_points": 7,
    "event_points": 7,
    "selected_by_percent": "0.4",
    "ict_index": "4.9",
    "expected_goals": "0.09",
    "expected_assists": "0.05",
    "expected_goal_involvements": "0.14",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "7.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 131,
    "web_name": "Baleba",
    "first_name": "Carlos",
    "second_name": "Baleba",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Ankle injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 132,
    "web_name": "Howell",
    "first_name": "Harry",
    "second_name": "Howell",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Leicester City on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 133,
    "web_name": "Watson",
    "first_name": "Tom",
    "second_name": "Watson",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Leicester City on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 134,
    "web_name": "Oriola",
    "first_name": "Nehemiah",
    "second_name": "Oriola",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 135,
    "web_name": "Yohanna",
    "first_name": "Zadok",
    "second_name": "Yohanna",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.2",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 137,
    "web_name": "Tzimas",
    "first_name": "Stefanos",
    "second_name": "Tzimas",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 138,
    "web_name": "Kostoulas",
    "first_name": "Charalampos",
    "second_name": "Kostoulas",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.9",
    "expected_goals": "0.18",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.18",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 139,
    "web_name": "Ferguson",
    "first_name": "Evan",
    "second_name": "Ferguson",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Ankle injury - Expected back 10 Oct",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 328,
    "web_name": "Struijk",
    "first_name": "Pascal",
    "second_name": "Struijk",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 504,
    "web_name": "Vuskovic",
    "first_name": "Luka",
    "second_name": "Vušković",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 2,
    "now_cost": 50,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "2.5",
    "ict_index": "2.9",
    "expected_goals": "0.13",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 594,
    "web_name": "David",
    "first_name": "Promise",
    "second_name": "David",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 4,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 600,
    "web_name": "Osman",
    "first_name": "Ibrahim",
    "second_name": "Osman",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "2.4",
    "expected_goals": "0.00",
    "expected_assists": "0.05",
    "expected_goal_involvements": "0.05",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 605,
    "web_name": "Yalcouyé",
    "first_name": "Malick",
    "second_name": "Yalcouyé",
    "team": 5,
    "team_short": "BHA",
    "team_name": "Brighton",
    "element_type": 3,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "0.3",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 40,
    "web_name": "Rogers",
    "first_name": "Morgan",
    "second_name": "Rogers",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 75,
    "form": "8.0",
    "total_points": 8,
    "event_points": 8,
    "selected_by_percent": "25.2",
    "ict_index": "13.1",
    "expected_goals": "0.96",
    "expected_assists": "0.10",
    "expected_goal_involvements": "1.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "8.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 101,
    "web_name": "Henderson",
    "first_name": "Jordan",
    "second_name": "Henderson",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Wrist injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 136,
    "web_name": "Welbeck",
    "first_name": "Danny",
    "second_name": "Welbeck",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 4,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 140,
    "web_name": "Sánchez",
    "first_name": "Robert",
    "second_name": "Lynch Sánchez",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 1,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "2.4",
    "ict_index": "2.1",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 141,
    "web_name": "Jörgensen",
    "first_name": "Filip",
    "second_name": "Jörgensen",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined RC Strasbourg on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 142,
    "web_name": "James",
    "first_name": "Reece",
    "second_name": "James",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "10.2",
    "ict_index": "5.9",
    "expected_goals": "0.10",
    "expected_assists": "0.07",
    "expected_goal_involvements": "0.17",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 143,
    "web_name": "Chalobah",
    "first_name": "Trevoh",
    "second_name": "Chalobah",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Como permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 144,
    "web_name": "Gusto",
    "first_name": "Malo",
    "second_name": "Gusto",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.2",
    "ict_index": "2.3",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 145,
    "web_name": "Fofana",
    "first_name": "Wesley",
    "second_name": "Fofana",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 146,
    "web_name": "B.Badiashile",
    "first_name": "Benoît",
    "second_name": "Badiashile Mukinayi",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 147,
    "web_name": "Tosin",
    "first_name": "Tosin",
    "second_name": "Adarabioyo",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 148,
    "web_name": "Hato",
    "first_name": "Jorrel",
    "second_name": "Hato",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.5",
    "ict_index": "3.2",
    "expected_goals": "0.01",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 149,
    "web_name": "Colwill",
    "first_name": "Levi",
    "second_name": "Samuels Colwill",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.6",
    "ict_index": "1.5",
    "expected_goals": "0.01",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 150,
    "web_name": "M.Sarr",
    "first_name": "Mamadou",
    "second_name": "Sarr",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 151,
    "web_name": "Acheampong",
    "first_name": "Josh",
    "second_name": "Acheampong",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 45,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.3",
    "ict_index": "3.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 152,
    "web_name": "Palestra",
    "first_name": "Marco",
    "second_name": "Palestra",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "2.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Unspecified injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 153,
    "web_name": "Disasi",
    "first_name": "Axel",
    "second_name": "Disasi",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 154,
    "web_name": "Palmer",
    "first_name": "Cole",
    "second_name": "Palmer",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 95,
    "form": "13.0",
    "total_points": 13,
    "event_points": 13,
    "selected_by_percent": "12.0",
    "ict_index": "16.1",
    "expected_goals": "0.28",
    "expected_assists": "0.19",
    "expected_goal_involvements": "0.47",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "13.0",
    "goals_scored": 1,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 155,
    "web_name": "Enzo",
    "first_name": "Enzo",
    "second_name": "Fernández",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 70,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "5.0",
    "ict_index": "1.5",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 156,
    "web_name": "Neto",
    "first_name": "Pedro",
    "second_name": "Lomba Neto",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 65,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.3",
    "ict_index": "1.3",
    "expected_goals": "0.03",
    "expected_assists": "0.07",
    "expected_goal_involvements": "0.10",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 157,
    "web_name": "Estêvão",
    "first_name": "Estêvão",
    "second_name": "Almeida de Oliveira Gonçalves",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 65,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.2",
    "ict_index": "0.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 158,
    "web_name": "Gittens",
    "first_name": "Jamie",
    "second_name": "Bynoe-Gittens",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 159,
    "web_name": "Caicedo",
    "first_name": "Moisés",
    "second_name": "Caicedo Corozo",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "3.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Unspecified injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 161,
    "web_name": "Lavia",
    "first_name": "Roméo",
    "second_name": "Lavia",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "6.9",
    "expected_goals": "0.21",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.24",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 163,
    "web_name": "D.Essugo",
    "first_name": "Dário",
    "second_name": "Luís Essugo",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 164,
    "web_name": "Quenda",
    "first_name": "Geovany",
    "second_name": "Quenda",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 165,
    "web_name": "João Pedro",
    "first_name": "João Pedro",
    "second_name": "Junqueira de Jesus",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 4,
    "now_cost": 75,
    "form": "11.0",
    "total_points": 11,
    "event_points": 11,
    "selected_by_percent": "65.4",
    "ict_index": "11.1",
    "expected_goals": "0.63",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.69",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "11.0",
    "goals_scored": 1,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 166,
    "web_name": "N.Jackson",
    "first_name": "Nicolas",
    "second_name": "Jackson",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 4,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 167,
    "web_name": "Delap",
    "first_name": "Liam",
    "second_name": "Delap",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 168,
    "web_name": "Marc Guiu",
    "first_name": "Marc",
    "second_name": "Guiu Paz",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 169,
    "web_name": "Mheuka",
    "first_name": "Shumaira",
    "second_name": "Mheuka",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 170,
    "web_name": "Emegha",
    "first_name": "Emmanuel",
    "second_name": "Emegha",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 200,
    "web_name": "Lacroix",
    "first_name": "Maxence",
    "second_name": "Lacroix",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 60,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "9.3",
    "ict_index": "5.7",
    "expected_goals": "0.00",
    "expected_assists": "0.20",
    "expected_goal_involvements": "0.20",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 560,
    "web_name": "Penders",
    "first_name": "Mike",
    "second_name": "Penders",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 561,
    "web_name": "Anselmino",
    "first_name": "Aaron",
    "second_name": "Anselmino",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Hamstring injury - 25% chance of playing",
    "chance_of_playing_next_round": 25,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 568,
    "web_name": "Barco",
    "first_name": "Valentín",
    "second_name": "Barco",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 578,
    "web_name": "Mudryk",
    "first_name": "Mykhailo",
    "second_name": "Mudryk",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 583,
    "web_name": "Chavarria",
    "first_name": "Pep",
    "second_name": "Chavarría",
    "team": 6,
    "team_short": "CHE",
    "team_name": "Chelsea",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.5",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 104,
    "web_name": "Onyeka",
    "first_name": "Frank",
    "second_name": "Onyeka",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "0.5",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 110,
    "web_name": "Rushworth",
    "first_name": "Carl",
    "second_name": "Rushworth",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 1,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.2",
    "ict_index": "1.4",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 171,
    "web_name": "Dovin",
    "first_name": "Oliver",
    "second_name": "Dovin",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 172,
    "web_name": "Wilson",
    "first_name": "Ben",
    "second_name": "Wilson",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 173,
    "web_name": "Thomas",
    "first_name": "Bobby",
    "second_name": "Thomas",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "8.0",
    "ict_index": "3.5",
    "expected_goals": "0.02",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 174,
    "web_name": "Kitching",
    "first_name": "Liam",
    "second_name": "Kitching",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 175,
    "web_name": "van Ewijk",
    "first_name": "Milan",
    "second_name": "van Ewijk",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "13.4",
    "ict_index": "1.5",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 176,
    "web_name": "Dasilva",
    "first_name": "Jay",
    "second_name": "Dasilva",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.9",
    "ict_index": "1.8",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 177,
    "web_name": "Kesler-Hayden",
    "first_name": "Kaine",
    "second_name": "Kesler-Hayden",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 178,
    "web_name": "Bidwell",
    "first_name": "Jake",
    "second_name": "Bidwell",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 179,
    "web_name": "Latibeaudiere",
    "first_name": "Joel",
    "second_name": "Latibeaudiere",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 180,
    "web_name": "Woolfenden",
    "first_name": "Luke",
    "second_name": "Woolfenden",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 181,
    "web_name": "Brau",
    "first_name": "Miguel",
    "second_name": "Brau",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 182,
    "web_name": "Amenda",
    "first_name": "Aurèle",
    "second_name": "Amenda",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.9",
    "ict_index": "3.0",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 183,
    "web_name": "Rudoni",
    "first_name": "Jack",
    "second_name": "Rudoni",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "2.6",
    "expected_goals": "0.15",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.15",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 184,
    "web_name": "Grimes",
    "first_name": "Matt",
    "second_name": "Grimes",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "1.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 185,
    "web_name": "Sakamoto",
    "first_name": "Tatsuhiro",
    "second_name": "Sakamoto",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 186,
    "web_name": "Mason-Clark",
    "first_name": "Ephron",
    "second_name": "Mason-Clark",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 187,
    "web_name": "Eccles",
    "first_name": "Josh",
    "second_name": "Eccles",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 188,
    "web_name": "Torp",
    "first_name": "Victor",
    "second_name": "Torp",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "2.3",
    "expected_goals": "0.00",
    "expected_assists": "0.11",
    "expected_goal_involvements": "0.11",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 189,
    "web_name": "Shepherd",
    "first_name": "George",
    "second_name": "Shepherd",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 190,
    "web_name": "Tchaouna",
    "first_name": "Loum",
    "second_name": "Tchaouna",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "1.1",
    "expected_goals": "0.04",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 191,
    "web_name": "Borges Rodrigues",
    "first_name": "Raphael",
    "second_name": "Borges Rodrigues",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 192,
    "web_name": "Andrews",
    "first_name": "Kaine",
    "second_name": "Andrews",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 193,
    "web_name": "Wright",
    "first_name": "Haji",
    "second_name": "Wright",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Thigh injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 194,
    "web_name": "Thomas-Asante",
    "first_name": "Brandon",
    "second_name": "Thomas-Asante",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 4,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.8",
    "ict_index": "0.6",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 195,
    "web_name": "Simms",
    "first_name": "Ellis",
    "second_name": "Simms",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 4,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.0",
    "ict_index": "1.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 196,
    "web_name": "Markelo",
    "first_name": "Jahnoah",
    "second_name": "Markelo",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Shabab Al-Ahli Dubai permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 197,
    "web_name": "Bassette",
    "first_name": "Norman",
    "second_name": "Bassette",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined KVC Westerlo on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 492,
    "web_name": "Awoniyi",
    "first_name": "Taiwo",
    "second_name": "Awoniyi",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.8",
    "ict_index": "0.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 575,
    "web_name": "Yirenkyi",
    "first_name": "Caleb",
    "second_name": "Yirenkyi",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 584,
    "web_name": "Hamer",
    "first_name": "Gustavo",
    "second_name": "Hamer",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 599,
    "web_name": "Cherif",
    "first_name": "Sidiki",
    "second_name": "Cherif",
    "team": 7,
    "team_short": "COV",
    "team_name": "Coventry City",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 2,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      },
      {
        "event": 4,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 42,
    "web_name": "Guessand",
    "first_name": "Evann",
    "second_name": "Guessand",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "1.2",
    "expected_goals": "0.03",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.05",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 198,
    "web_name": "Henderson",
    "first_name": "Dean",
    "second_name": "Henderson",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 1,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.9",
    "ict_index": "2.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 199,
    "web_name": "Benitez",
    "first_name": "Walter",
    "second_name": "Benítez",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 201,
    "web_name": "Muñoz",
    "first_name": "Daniel",
    "second_name": "Muñoz Mejía",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "9.1",
    "ict_index": "2.4",
    "expected_goals": "0.23",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.24",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 202,
    "web_name": "Richards",
    "first_name": "Chris",
    "second_name": "Richards",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.8",
    "ict_index": "4.3",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 203,
    "web_name": "Canvot",
    "first_name": "Jaydee",
    "second_name": "Canvot",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.3",
    "ict_index": "3.8",
    "expected_goals": "0.05",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 204,
    "web_name": "Mitchell",
    "first_name": "Tyrick",
    "second_name": "Mitchell",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "6.0",
    "ict_index": "2.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 205,
    "web_name": "Sosa",
    "first_name": "Borna",
    "second_name": "Sosa",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 206,
    "web_name": "Chadi Riad",
    "first_name": "Chadi",
    "second_name": "Riad Dnanou",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "1.4",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "d",
    "news": "Knee injury - 50% chance of playing",
    "chance_of_playing_next_round": 50,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 207,
    "web_name": "Mingueza",
    "first_name": "Oscar",
    "second_name": "Mingueza",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 208,
    "web_name": "Sarr",
    "first_name": "Ismaïla",
    "second_name": "Sarr",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "3.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Groin injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 210,
    "web_name": "Wharton",
    "first_name": "Adam",
    "second_name": "Wharton",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 55,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "0.9",
    "ict_index": "4.8",
    "expected_goals": "0.00",
    "expected_assists": "0.24",
    "expected_goal_involvements": "0.24",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 211,
    "web_name": "Yeremy",
    "first_name": "Yéremy",
    "second_name": "Pino Santos",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "1.4",
    "expected_goals": "0.06",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.08",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 212,
    "web_name": "Hughes",
    "first_name": "Will",
    "second_name": "Hughes",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "11.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 213,
    "web_name": "Lerma",
    "first_name": "Jefferson",
    "second_name": "Lerma Solís",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 214,
    "web_name": "Kamada",
    "first_name": "Daichi",
    "second_name": "Kamada",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.3",
    "ict_index": "5.0",
    "expected_goals": "0.00",
    "expected_assists": "0.27",
    "expected_goal_involvements": "0.27",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 215,
    "web_name": "Devenny",
    "first_name": "Justin",
    "second_name": "Devenny",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 216,
    "web_name": "Esse",
    "first_name": "Romain",
    "second_name": "Esse",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 217,
    "web_name": "M.França",
    "first_name": "Matheus",
    "second_name": "França de Oliveira",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 218,
    "web_name": "Doucouré",
    "first_name": "Cheick",
    "second_name": "Doucouré",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 219,
    "web_name": "J.Rak-Sakyi",
    "first_name": "Jesurun",
    "second_name": "Rak-Sakyi",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 220,
    "web_name": "Cardines",
    "first_name": "Rio",
    "second_name": "Cardines",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Bristol City on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 221,
    "web_name": "Drakes-Thomas",
    "first_name": "Joél",
    "second_name": "Drakes-Thomas",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 222,
    "web_name": "Strand Larsen",
    "first_name": "Jørgen",
    "second_name": "Strand Larsen",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 4,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.6",
    "ict_index": "2.2",
    "expected_goals": "0.25",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.26",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 223,
    "web_name": "Mateta",
    "first_name": "Jean-Philippe",
    "second_name": "Mateta",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 4,
    "now_cost": 65,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "5.5",
    "ict_index": "2.5",
    "expected_goals": "0.70",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.72",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 224,
    "web_name": "Nketiah",
    "first_name": "Eddie",
    "second_name": "Nketiah",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.5",
    "ict_index": "5.8",
    "expected_goals": "0.60",
    "expected_assists": "0.58",
    "expected_goal_involvements": "1.18",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 225,
    "web_name": "Uche",
    "first_name": "Christantus",
    "second_name": "Uche",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "has returned to Getafe CF",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 241,
    "web_name": "McNeil",
    "first_name": "Dwight",
    "second_name": "McNeil",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "1.6",
    "expected_goals": "0.05",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.07",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 555,
    "web_name": "Matthews",
    "first_name": "Remi",
    "second_name": "Matthews",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.8",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 577,
    "web_name": "Tomiyasu",
    "first_name": "Takehiro",
    "second_name": "Tomiyasu",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.4",
    "ict_index": "0.5",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 588,
    "web_name": "Khalaili",
    "first_name": "Anan",
    "second_name": "Khalaili",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "5.5",
    "expected_goals": "0.00",
    "expected_assists": "0.16",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 595,
    "web_name": "Gozo",
    "first_name": "Zavier",
    "second_name": "Gozo",
    "team": 8,
    "team_short": "CRY",
    "team_name": "Crystal Palace",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 21,
    "web_name": "Nørgaard",
    "first_name": "Christian",
    "second_name": "Nørgaard",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Unspecified injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 209,
    "web_name": "Johnson",
    "first_name": "Brennan",
    "second_name": "Johnson",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 226,
    "web_name": "Pickford",
    "first_name": "Jordan",
    "second_name": "Pickford",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 1,
    "now_cost": 55,
    "form": "7.0",
    "total_points": 7,
    "event_points": 7,
    "selected_by_percent": "8.5",
    "ict_index": "3.2",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "7.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 227,
    "web_name": "Travers",
    "first_name": "Mark",
    "second_name": "Travers",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 228,
    "web_name": "King",
    "first_name": "Tom",
    "second_name": "King",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 229,
    "web_name": "Tarkowski",
    "first_name": "James",
    "second_name": "Tarkowski",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 2,
    "now_cost": 60,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "8.9",
    "ict_index": "2.0",
    "expected_goals": "0.05",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.05",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 230,
    "web_name": "Branthwaite",
    "first_name": "Jarrad",
    "second_name": "Branthwaite",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 2,
    "now_cost": 55,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "1.8",
    "ict_index": "2.5",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 231,
    "web_name": "Keane",
    "first_name": "Michael",
    "second_name": "Keane",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 232,
    "web_name": "O'Brien",
    "first_name": "Jake",
    "second_name": "O'Brien",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 233,
    "web_name": "Mykolenko",
    "first_name": "Vitalii",
    "second_name": "Mykolenko",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 2,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "1.6",
    "ict_index": "2.9",
    "expected_goals": "0.00",
    "expected_assists": "0.05",
    "expected_goal_involvements": "0.05",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 234,
    "web_name": "Patterson",
    "first_name": "Nathan",
    "second_name": "Patterson",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 235,
    "web_name": "Aznou",
    "first_name": "Adam",
    "second_name": "Aznou",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 236,
    "web_name": "Dewsbury-Hall",
    "first_name": "Kiernan",
    "second_name": "Dewsbury-Hall",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 65,
    "form": "11.0",
    "total_points": 11,
    "event_points": 11,
    "selected_by_percent": "4.2",
    "ict_index": "9.8",
    "expected_goals": "0.12",
    "expected_assists": "0.17",
    "expected_goal_involvements": "0.29",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "11.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 237,
    "web_name": "Ndiaye",
    "first_name": "Iliman",
    "second_name": "Ndiaye",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 60,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "16.1",
    "ict_index": "12.9",
    "expected_goals": "0.24",
    "expected_assists": "0.32",
    "expected_goal_involvements": "0.56",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 239,
    "web_name": "Garner",
    "first_name": "James",
    "second_name": "Garner",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "1.9",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 240,
    "web_name": "Iroegbunam",
    "first_name": "Tim",
    "second_name": "Iroegbunam",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Thigh injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 242,
    "web_name": "George",
    "first_name": "Tyrique",
    "second_name": "George",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.3",
    "ict_index": "5.5",
    "expected_goals": "0.18",
    "expected_assists": "0.08",
    "expected_goal_involvements": "0.26",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 243,
    "web_name": "Alcaraz",
    "first_name": "Carlos",
    "second_name": "Alcaraz Durán",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "2.2",
    "expected_goals": "0.02",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 244,
    "web_name": "Armstrong",
    "first_name": "Harrison",
    "second_name": "Armstrong",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 50,
    "form": "8.0",
    "total_points": 8,
    "event_points": 8,
    "selected_by_percent": "0.2",
    "ict_index": "4.8",
    "expected_goals": "0.00",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "8.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 245,
    "web_name": "Dibling",
    "first_name": "Tyler",
    "second_name": "Dibling",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 246,
    "web_name": "Röhl",
    "first_name": "Merlin",
    "second_name": "Röhl",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.1",
    "ict_index": "2.9",
    "expected_goals": "0.00",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 247,
    "web_name": "Hackney",
    "first_name": "Hayden",
    "second_name": "Hackney",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 3,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.3",
    "ict_index": "2.6",
    "expected_goals": "0.01",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 248,
    "web_name": "Beto",
    "first_name": "Norberto Bercique",
    "second_name": "Gomes Betuncal",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "2.6",
    "ict_index": "0.2",
    "expected_goals": "0.05",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.05",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 249,
    "web_name": "Barry",
    "first_name": "Thierno",
    "second_name": "Barry",
    "team": 9,
    "team_short": "EVE",
    "team_name": "Everton",
    "element_type": 4,
    "now_cost": 55,
    "form": "8.0",
    "total_points": 8,
    "event_points": 8,
    "selected_by_percent": "1.9",
    "ict_index": "9.8",
    "expected_goals": "0.45",
    "expected_assists": "0.09",
    "expected_goal_involvements": "0.54",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "8.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 250,
    "web_name": "Leno",
    "first_name": "Bernd",
    "second_name": "Leno",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 1,
    "now_cost": 45,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "3.1",
    "ict_index": "3.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 251,
    "web_name": "Lecomte",
    "first_name": "Benjamin",
    "second_name": "Lecomte",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 252,
    "web_name": "McNally",
    "first_name": "Alfie",
    "second_name": "McNally",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 253,
    "web_name": "Andersen",
    "first_name": "Joachim",
    "second_name": "Andersen",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 254,
    "web_name": "Robinson",
    "first_name": "Antonee",
    "second_name": "Robinson",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.7",
    "ict_index": "5.0",
    "expected_goals": "0.13",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.17",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 255,
    "web_name": "J.Cuenca",
    "first_name": "Jorge",
    "second_name": "Cuenca Barreno",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 45,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.0",
    "ict_index": "5.4",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 256,
    "web_name": "Tete",
    "first_name": "Kenny",
    "second_name": "Tete",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 257,
    "web_name": "Bassey",
    "first_name": "Calvin",
    "second_name": "Bassey",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.8",
    "ict_index": "2.0",
    "expected_goals": "0.02",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 258,
    "web_name": "Castagne",
    "first_name": "Timothy",
    "second_name": "Castagne",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "0.4",
    "ict_index": "8.9",
    "expected_goals": "0.09",
    "expected_assists": "0.18",
    "expected_goal_involvements": "0.27",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 2,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 261,
    "web_name": "Iwobi",
    "first_name": "Alex",
    "second_name": "Iwobi",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.0",
    "ict_index": "2.4",
    "expected_goals": "0.00",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 262,
    "web_name": "Smith Rowe",
    "first_name": "Emile",
    "second_name": "Smith Rowe",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 263,
    "web_name": "Kevin",
    "first_name": "Kevin",
    "second_name": "Santos Lopes de Macedo",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 264,
    "web_name": "Bobb",
    "first_name": "Oscar",
    "second_name": "Bobb",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.3",
    "ict_index": "3.0",
    "expected_goals": "0.00",
    "expected_assists": "0.26",
    "expected_goal_involvements": "0.26",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 265,
    "web_name": "Berge",
    "first_name": "Sander",
    "second_name": "Berge",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.4",
    "ict_index": "4.4",
    "expected_goals": "0.03",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 266,
    "web_name": "Cairney",
    "first_name": "Tom",
    "second_name": "Cairney",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Expected back 10 Oct",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 268,
    "web_name": "King",
    "first_name": "Josh",
    "second_name": "King",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 55,
    "form": "7.0",
    "total_points": 7,
    "event_points": 7,
    "selected_by_percent": "0.3",
    "ict_index": "9.8",
    "expected_goals": "0.17",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.21",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "7.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 269,
    "web_name": "Sessegnon",
    "first_name": "Ryan",
    "second_name": "Sessegnon",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.4",
    "ict_index": "2.6",
    "expected_goals": "0.03",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 270,
    "web_name": "Reed",
    "first_name": "Harrison",
    "second_name": "Reed",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 271,
    "web_name": "Muniz",
    "first_name": "Rodrigo",
    "second_name": "Muniz Carvalho",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.6",
    "ict_index": "2.5",
    "expected_goals": "0.02",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 272,
    "web_name": "Kusi-Asare",
    "first_name": "Jonah",
    "second_name": "Kusi-Asare",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "7.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 569,
    "web_name": "Gonzalo",
    "first_name": "Gonzalo",
    "second_name": "García",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 4,
    "now_cost": 60,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "2.6",
    "ict_index": "8.2",
    "expected_goals": "0.73",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.74",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 570,
    "web_name": "Palacios",
    "first_name": "César",
    "second_name": "Palacios",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "1.8",
    "expected_goals": "0.16",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.17",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 580,
    "web_name": "Charles",
    "first_name": "Shea",
    "second_name": "Charles",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.5",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 610,
    "web_name": "De Fougerolles",
    "first_name": "Luc",
    "second_name": "De Fougerolles",
    "team": 10,
    "team_short": "FUL",
    "team_name": "Fulham",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 273,
    "web_name": "Phillips",
    "first_name": "Dillon",
    "second_name": "Phillips",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 274,
    "web_name": "Butland",
    "first_name": "Jack",
    "second_name": "Butland",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Arm injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 275,
    "web_name": "Cartwright",
    "first_name": "Harvey",
    "second_name": "Cartwright",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Grimsby Town on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 276,
    "web_name": "Lo-Tutala",
    "first_name": "Thimothée",
    "second_name": "Lo-Tutala",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Colchester United on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 277,
    "web_name": "Egan",
    "first_name": "John",
    "second_name": "Egan",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "8.0",
    "total_points": 8,
    "event_points": 8,
    "selected_by_percent": "1.9",
    "ict_index": "4.6",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "8.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 278,
    "web_name": "Hughes",
    "first_name": "Charlie",
    "second_name": "Hughes",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Groin injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 279,
    "web_name": "Ajayi",
    "first_name": "Semi",
    "second_name": "Ajayi",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "14.0",
    "total_points": 14,
    "event_points": 14,
    "selected_by_percent": "1.5",
    "ict_index": "7.9",
    "expected_goals": "0.52",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.52",
    "status": "d",
    "news": "Hamstring injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "14.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 280,
    "web_name": "Coyle",
    "first_name": "Lewie",
    "second_name": "Coyle",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "0.7",
    "ict_index": "1.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "d",
    "news": "Ankle injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 281,
    "web_name": "Drameh",
    "first_name": "Cody",
    "second_name": "Drameh",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.3",
    "expected_goals": "0.05",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.05",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 282,
    "web_name": "Giles",
    "first_name": "Ryan",
    "second_name": "Giles",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "0.9",
    "ict_index": "3.7",
    "expected_goals": "0.02",
    "expected_assists": "0.07",
    "expected_goal_involvements": "0.09",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 283,
    "web_name": "Jacob",
    "first_name": "Matty",
    "second_name": "Jacob",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Hip injury - Expected back 5 Sep",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 284,
    "web_name": "McCarthy",
    "first_name": "Cathal",
    "second_name": "McCarthy",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 285,
    "web_name": "McNair",
    "first_name": "Paddy",
    "second_name": "McNair",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 286,
    "web_name": "Belloumi",
    "first_name": "Mohamed",
    "second_name": "Belloumi",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.6",
    "ict_index": "2.0",
    "expected_goals": "0.05",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.08",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 287,
    "web_name": "Millar",
    "first_name": "Liam",
    "second_name": "Millar",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 288,
    "web_name": "Dowell",
    "first_name": "Kieran",
    "second_name": "Dowell",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 289,
    "web_name": "Crooks",
    "first_name": "Matt",
    "second_name": "Crooks",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 45,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.7",
    "ict_index": "2.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 290,
    "web_name": "Slater",
    "first_name": "Regan",
    "second_name": "Slater",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "3.5",
    "ict_index": "3.8",
    "expected_goals": "0.00",
    "expected_assists": "0.44",
    "expected_goal_involvements": "0.44",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 291,
    "web_name": "Matazo",
    "first_name": "Eliot",
    "second_name": "Matazo",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 292,
    "web_name": "Ömür",
    "first_name": "Abdülkadir",
    "second_name": "Ömür",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 293,
    "web_name": "Kamara",
    "first_name": "Abu",
    "second_name": "Kamara",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Portsmouth permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 294,
    "web_name": "Zambrano",
    "first_name": "Óscar",
    "second_name": "Zambrano",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Thigh injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 295,
    "web_name": "McBurnie",
    "first_name": "Oli",
    "second_name": "McBurnie",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 4,
    "now_cost": 55,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "1.8",
    "ict_index": "9.0",
    "expected_goals": "0.16",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.17",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 296,
    "web_name": "Akintola",
    "first_name": "David",
    "second_name": "Akintola",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 297,
    "web_name": "Gyabi",
    "first_name": "Darko",
    "second_name": "Gyabi",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Thigh injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 298,
    "web_name": "Destan",
    "first_name": "Enis",
    "second_name": "Destan",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Konyaspor permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 299,
    "web_name": "Burstow",
    "first_name": "Mason",
    "second_name": "Burstow",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Sheffield Wednesday on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 340,
    "web_name": "Gelhardt",
    "first_name": "Joe",
    "second_name": "Gelhardt",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Ankle injury - Expected back 5 Sep",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 556,
    "web_name": "Targett",
    "first_name": "Matt",
    "second_name": "Targett",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "2.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 563,
    "web_name": "Morita",
    "first_name": "Hidemasa",
    "second_name": "Morita",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Calf injury - 50% chance of playing",
    "chance_of_playing_next_round": 50,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 572,
    "web_name": "Tzolakis",
    "first_name": "Konstantinos",
    "second_name": "Tzolakis",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 1,
    "now_cost": 45,
    "form": "10.0",
    "total_points": 10,
    "event_points": 10,
    "selected_by_percent": "1.6",
    "ict_index": "3.5",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "10.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 574,
    "web_name": "Hjertø-Dahl",
    "first_name": "Jens",
    "second_name": "Hjertø-Dahl",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 576,
    "web_name": "Stroud",
    "first_name": "Elliot",
    "second_name": "Stroud",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.1",
    "ict_index": "1.3",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 585,
    "web_name": "Herrington",
    "first_name": "Lucas",
    "second_name": "Herrington",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.7",
    "ict_index": "0.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 586,
    "web_name": "Mendy",
    "first_name": "Nobel",
    "second_name": "Mendy",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 2,
    "now_cost": 40,
    "form": "15.0",
    "total_points": 15,
    "event_points": 15,
    "selected_by_percent": "1.9",
    "ict_index": "8.5",
    "expected_goals": "0.28",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.28",
    "status": "d",
    "news": "Thigh injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "15.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 589,
    "web_name": "Gourna-Douath",
    "first_name": "Lucas",
    "second_name": "Gourna-Douath",
    "team": 11,
    "team_short": "HUL",
    "team_name": "Hull City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "CHE",
        "opponent_name": "Chelsea",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 259,
    "web_name": "Diop",
    "first_name": "Issa",
    "second_name": "Diop",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "17.7",
    "ict_index": "1.0",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 267,
    "web_name": "Lukić",
    "first_name": "Saša",
    "second_name": "Lukić",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "0.1",
    "ict_index": "4.0",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 300,
    "web_name": "Walton",
    "first_name": "Christian",
    "second_name": "Walton",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 301,
    "web_name": "Palmer",
    "first_name": "Alex",
    "second_name": "Palmer",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "4.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 302,
    "web_name": "Button",
    "first_name": "David",
    "second_name": "Button",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 303,
    "web_name": "Kipré",
    "first_name": "Cédric",
    "second_name": "Kipré",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 304,
    "web_name": "O'Shea",
    "first_name": "Dara",
    "second_name": "O'Shea",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "3.5",
    "ict_index": "7.5",
    "expected_goals": "0.00",
    "expected_assists": "0.16",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 305,
    "web_name": "Davis",
    "first_name": "Leif",
    "second_name": "Davis",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "5.1",
    "ict_index": "1.8",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 306,
    "web_name": "Greaves",
    "first_name": "Jacob",
    "second_name": "Greaves",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.5",
    "ict_index": "1.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 307,
    "web_name": "Johnson",
    "first_name": "Ben",
    "second_name": "Johnson",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 308,
    "web_name": "Furlong",
    "first_name": "Darnell",
    "second_name": "Furlong",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 309,
    "web_name": "Núñez",
    "first_name": "Marcelino",
    "second_name": "Núñez",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "0.1",
    "ict_index": "2.4",
    "expected_goals": "0.03",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 310,
    "web_name": "Matusiwa",
    "first_name": "Azor",
    "second_name": "Matusiwa",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Muscular injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 311,
    "web_name": "Burns",
    "first_name": "Wes",
    "second_name": "Burns",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Leicester City permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 312,
    "web_name": "Taylor",
    "first_name": "Jack",
    "second_name": "Taylor",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 313,
    "web_name": "Clarke",
    "first_name": "Jack",
    "second_name": "Clarke",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 55,
    "form": "7.0",
    "total_points": 7,
    "event_points": 7,
    "selected_by_percent": "0.3",
    "ict_index": "5.2",
    "expected_goals": "0.10",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.10",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "7.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 314,
    "web_name": "Ogbene",
    "first_name": "Chiedozie",
    "second_name": "Ogbene",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 315,
    "web_name": "Fatawu",
    "first_name": "Abdul",
    "second_name": "Fatawu",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "5.5",
    "expected_goals": "0.00",
    "expected_assists": "0.41",
    "expected_goal_involvements": "0.41",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 316,
    "web_name": "Emersonn",
    "first_name": "Emersonn",
    "second_name": "Correia da Silva",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 4,
    "now_cost": 55,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "1.1",
    "ict_index": "11.2",
    "expected_goals": "0.82",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.88",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 317,
    "web_name": "Hirst",
    "first_name": "George",
    "second_name": "Hirst",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Stoke City permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 318,
    "web_name": "Philogene",
    "first_name": "Jaden",
    "second_name": "Philogene",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 319,
    "web_name": "Szmodics",
    "first_name": "Sam",
    "second_name": "Szmodics",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Derby County on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 320,
    "web_name": "Akpom",
    "first_name": "Chuba",
    "second_name": "Akpom",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 4,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.5",
    "ict_index": "0.3",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 321,
    "web_name": "Walle Egeli",
    "first_name": "Sindre",
    "second_name": "Walle Egeli",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 4,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "2.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 322,
    "web_name": "Al-Hamadi",
    "first_name": "Ali",
    "second_name": "Al-Hamadi",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 323,
    "web_name": "McAteer",
    "first_name": "Kasey",
    "second_name": "McAteer",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.4",
    "ict_index": "0.3",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 324,
    "web_name": "Mehmeti",
    "first_name": "Anis",
    "second_name": "Mehmeti",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 554,
    "web_name": "Van Oevelen",
    "first_name": "Kayne",
    "second_name": "van Oevelen",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 562,
    "web_name": "Maeda",
    "first_name": "Daizen",
    "second_name": "Maeda",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.4",
    "ict_index": "2.1",
    "expected_goals": "0.61",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.61",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 564,
    "web_name": "Scherpen",
    "first_name": "Kjell",
    "second_name": "Scherpen",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 1,
    "now_cost": 45,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.7",
    "ict_index": "1.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 571,
    "web_name": "Florentino",
    "first_name": "Florentino Ibrain",
    "second_name": "Morris Luís",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 591,
    "web_name": "Enciso",
    "first_name": "Julio",
    "second_name": "Enciso",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 55,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "0.4",
    "ict_index": "5.4",
    "expected_goals": "0.23",
    "expected_assists": "0.31",
    "expected_goal_involvements": "0.54",
    "status": "d",
    "news": "Muscular injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 592,
    "web_name": "Ouattara",
    "first_name": "Abdoul",
    "second_name": "Ouattara",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.1",
    "ict_index": "1.5",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 602,
    "web_name": "Humphreys",
    "first_name": "Cameron",
    "second_name": "Humphreys",
    "team": 12,
    "team_short": "IPS",
    "team_name": "Ipswich Town",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 4,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 260,
    "web_name": "Wilson",
    "first_name": "Harry",
    "second_name": "Wilson",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 65,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "6.0",
    "ict_index": "2.6",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 326,
    "web_name": "Perri",
    "first_name": "Lucas Estella",
    "second_name": "Perri",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 327,
    "web_name": "Bijol",
    "first_name": "Jaka",
    "second_name": "Bijol",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 50,
    "form": "10.0",
    "total_points": 10,
    "event_points": 10,
    "selected_by_percent": "0.6",
    "ict_index": "3.9",
    "expected_goals": "0.11",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.11",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "10.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 329,
    "web_name": "Rodon",
    "first_name": "Joe",
    "second_name": "Rodon",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "3.6",
    "ict_index": "3.4",
    "expected_goals": "0.03",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.09",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 330,
    "web_name": "Bogle",
    "first_name": "Jayden",
    "second_name": "Bogle",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 45,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "0.6",
    "ict_index": "0.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 331,
    "web_name": "Gudmundsson",
    "first_name": "Gabriel",
    "second_name": "Gudmundsson",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Hamstring injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 332,
    "web_name": "Justin",
    "first_name": "James",
    "second_name": "Justin",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 45,
    "form": "10.0",
    "total_points": 10,
    "event_points": 10,
    "selected_by_percent": "0.8",
    "ict_index": "2.9",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "10.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 333,
    "web_name": "Bornauw",
    "first_name": "Sebastiaan",
    "second_name": "Bornauw",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Hamburg SV on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 334,
    "web_name": "Muharemović",
    "first_name": "Tarik",
    "second_name": "Muharemović",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 50,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "3.4",
    "ict_index": "3.3",
    "expected_goals": "0.09",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.09",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 335,
    "web_name": "Stach",
    "first_name": "Anton",
    "second_name": "Stach",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 60,
    "form": "13.0",
    "total_points": 13,
    "event_points": 13,
    "selected_by_percent": "1.4",
    "ict_index": "6.6",
    "expected_goals": "0.10",
    "expected_assists": "0.05",
    "expected_goal_involvements": "0.15",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "13.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 336,
    "web_name": "Okafor",
    "first_name": "Noah",
    "second_name": "Okafor",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.5",
    "ict_index": "2.8",
    "expected_goals": "0.00",
    "expected_assists": "0.16",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 337,
    "web_name": "Aaronson",
    "first_name": "Brenden",
    "second_name": "Aaronson",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.9",
    "ict_index": "1.6",
    "expected_goals": "0.01",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 338,
    "web_name": "Ampadu",
    "first_name": "Ethan",
    "second_name": "Ampadu",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 55,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "1.4",
    "ict_index": "4.2",
    "expected_goals": "0.00",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 339,
    "web_name": "Longstaff",
    "first_name": "Sean",
    "second_name": "Longstaff",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 341,
    "web_name": "Gnonto",
    "first_name": "Wilfried",
    "second_name": "Gnonto",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Hamstring injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 342,
    "web_name": "Harrison",
    "first_name": "Jack",
    "second_name": "Harrison",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined New England Revolution permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 343,
    "web_name": "James",
    "first_name": "Daniel",
    "second_name": "James",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 344,
    "web_name": "Gruev",
    "first_name": "Ilia",
    "second_name": "Gruev",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 345,
    "web_name": "Tanaka",
    "first_name": "Tanaka",
    "second_name": "Ao",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 346,
    "web_name": "Calvert-Lewin",
    "first_name": "Dominic",
    "second_name": "Calvert-Lewin",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 4,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "29.9",
    "ict_index": "0.7",
    "expected_goals": "0.13",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.13",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 347,
    "web_name": "Nmecha",
    "first_name": "Lukas",
    "second_name": "Nmecha",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 348,
    "web_name": "Piroe",
    "first_name": "Joël",
    "second_name": "Piroe",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 4,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined West Ham United on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 349,
    "web_name": "Mateo Joseph",
    "first_name": "Mateo",
    "second_name": "Joseph Fernández-Regatillo",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 385,
    "web_name": "Trafford",
    "first_name": "James",
    "second_name": "Trafford",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 1,
    "now_cost": 50,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "3.5",
    "ict_index": "1.9",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 598,
    "web_name": "Elvedi",
    "first_name": "Nico",
    "second_name": "Elvedi",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 603,
    "web_name": "Lienou",
    "first_name": "Jayden",
    "second_name": "Lienou",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 604,
    "web_name": "Cresswell",
    "first_name": "Alfie",
    "second_name": "Cresswell",
    "team": 13,
    "team_short": "LEE",
    "team_name": "Leeds",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BHA",
        "opponent_name": "Brighton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 350,
    "web_name": "A.Becker",
    "first_name": "Alisson",
    "second_name": "Becker",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 1,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "3.7",
    "ict_index": "1.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 351,
    "web_name": "Mamardashvili",
    "first_name": "Giorgi",
    "second_name": "Mamardashvili",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 352,
    "web_name": "Woodman",
    "first_name": "Freddie",
    "second_name": "Woodman",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 353,
    "web_name": "Pecsi",
    "first_name": "Armin",
    "second_name": "Pecsi",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined TSV Hartberg on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 354,
    "web_name": "Jaros",
    "first_name": "Vitezslav",
    "second_name": "Jaros",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 355,
    "web_name": "Davies",
    "first_name": "Harvey",
    "second_name": "Davies",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 356,
    "web_name": "Virgil",
    "first_name": "Virgil",
    "second_name": "van Dijk",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 65,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "19.6",
    "ict_index": "5.1",
    "expected_goals": "0.25",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.26",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 357,
    "web_name": "Frimpong",
    "first_name": "Jeremie",
    "second_name": "Frimpong",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "3.5",
    "ict_index": "6.1",
    "expected_goals": "0.01",
    "expected_assists": "0.09",
    "expected_goal_involvements": "0.10",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 358,
    "web_name": "Kerkez",
    "first_name": "Milos",
    "second_name": "Kerkez",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "3.7",
    "ict_index": "4.4",
    "expected_goals": "0.02",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 359,
    "web_name": "Gomez",
    "first_name": "Joe",
    "second_name": "Gomez",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Muscular injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 360,
    "web_name": "Bradley",
    "first_name": "Conor",
    "second_name": "Bradley",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 361,
    "web_name": "Lucky",
    "first_name": "Wellity",
    "second_name": "Lucky",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 362,
    "web_name": "Jacquet",
    "first_name": "Jeremy",
    "second_name": "Jacquet",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "2.4",
    "ict_index": "2.4",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 363,
    "web_name": "Leoni",
    "first_name": "Giovanni",
    "second_name": "Leoni",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 364,
    "web_name": "Tsimikas",
    "first_name": "Kostas",
    "second_name": "Tsimikas",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 365,
    "web_name": "Ramsay",
    "first_name": "Calvin",
    "second_name": "Ramsay",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 366,
    "web_name": "Wirtz",
    "first_name": "Florian",
    "second_name": "Wirtz",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 75,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "12.2",
    "ict_index": "5.7",
    "expected_goals": "0.26",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.30",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 367,
    "web_name": "Gakpo",
    "first_name": "Cody",
    "second_name": "Gakpo",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 70,
    "form": "12.0",
    "total_points": 12,
    "event_points": 12,
    "selected_by_percent": "4.8",
    "ict_index": "11.5",
    "expected_goals": "0.30",
    "expected_assists": "0.15",
    "expected_goal_involvements": "0.45",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "12.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 3,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 368,
    "web_name": "Szoboszlai",
    "first_name": "Dominik",
    "second_name": "Szoboszlai",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 70,
    "form": "8.0",
    "total_points": 8,
    "event_points": 8,
    "selected_by_percent": "42.6",
    "ict_index": "11.9",
    "expected_goals": "0.85",
    "expected_assists": "0.27",
    "expected_goal_involvements": "1.12",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "8.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 369,
    "web_name": "Ngumoha",
    "first_name": "Rio",
    "second_name": "Ngumoha",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.1",
    "ict_index": "1.3",
    "expected_goals": "0.04",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 370,
    "web_name": "Chiesa",
    "first_name": "Federico",
    "second_name": "Chiesa",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 371,
    "web_name": "Gravenberch",
    "first_name": "Ryan",
    "second_name": "Gravenberch",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 60,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "2.0",
    "ict_index": "4.4",
    "expected_goals": "0.06",
    "expected_assists": "0.05",
    "expected_goal_involvements": "0.11",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 372,
    "web_name": "Mac Allister",
    "first_name": "Alexis",
    "second_name": "Mac Allister",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.7",
    "ict_index": "0.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 373,
    "web_name": "C.Jones",
    "first_name": "Curtis",
    "second_name": "Jones",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Hip injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 374,
    "web_name": "Endo",
    "first_name": "Endo",
    "second_name": "Wataru",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 375,
    "web_name": "Nyoni",
    "first_name": "Trey",
    "second_name": "Nyoni",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 376,
    "web_name": "Bajcetic",
    "first_name": "Stefan",
    "second_name": "Bajčetić Maquieira",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Hamstring injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 377,
    "web_name": "Munoz",
    "first_name": "Victor",
    "second_name": "Munoz",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 65,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "0.6",
    "ict_index": "2.7",
    "expected_goals": "0.10",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.14",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 378,
    "web_name": "McConnell",
    "first_name": "James",
    "second_name": "McConnell",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 379,
    "web_name": "Isak",
    "first_name": "Alexander",
    "second_name": "Isak",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 4,
    "now_cost": 90,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "16.8",
    "ict_index": "9.2",
    "expected_goals": "1.09",
    "expected_assists": "0.01",
    "expected_goal_involvements": "1.10",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 380,
    "web_name": "Ekitiké",
    "first_name": "Hugo",
    "second_name": "Ekitiké",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 4,
    "now_cost": 75,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Achilles injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 381,
    "web_name": "Koumas",
    "first_name": "Lewis",
    "second_name": "Koumas",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "0.9",
    "expected_goals": "0.03",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 382,
    "web_name": "Danns",
    "first_name": "Jayden",
    "second_name": "Danns",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Unspecified injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 383,
    "web_name": "Elliott",
    "first_name": "Harvey",
    "second_name": "Elliott",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 579,
    "web_name": "Araujo",
    "first_name": "Ronald",
    "second_name": "Araujo",
    "team": 14,
    "team_short": "LIV",
    "team_name": "Liverpool",
    "element_type": 2,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "2.7",
    "ict_index": "1.4",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 5,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 238,
    "web_name": "Grealish",
    "first_name": "Jack",
    "second_name": "Grealish",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 65,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 384,
    "web_name": "Donnarumma",
    "first_name": "Gianluigi",
    "second_name": "Donnarumma",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 1,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "8.3",
    "ict_index": "2.7",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 386,
    "web_name": "Bettinelli",
    "first_name": "Marcus",
    "second_name": "Bettinelli",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 387,
    "web_name": "O'Reilly",
    "first_name": "Nico",
    "second_name": "O'Reilly",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 65,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "21.2",
    "ict_index": "5.0",
    "expected_goals": "0.07",
    "expected_assists": "0.41",
    "expected_goal_involvements": "0.48",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 388,
    "web_name": "Guéhi",
    "first_name": "Marc",
    "second_name": "Guéhi",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 60,
    "form": "10.0",
    "total_points": 10,
    "event_points": 10,
    "selected_by_percent": "18.3",
    "ict_index": "8.9",
    "expected_goals": "0.89",
    "expected_assists": "0.32",
    "expected_goal_involvements": "1.21",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "10.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 389,
    "web_name": "Matheus N.",
    "first_name": "Matheus",
    "second_name": "Nunes",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.6",
    "ict_index": "0.9",
    "expected_goals": "0.00",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 390,
    "web_name": "Rúben",
    "first_name": "Rúben",
    "second_name": "dos Santos Gato Alves Dias",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.8",
    "ict_index": "4.4",
    "expected_goals": "0.00",
    "expected_assists": "0.14",
    "expected_goal_involvements": "0.14",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 391,
    "web_name": "Gvardiol",
    "first_name": "Joško",
    "second_name": "Gvardiol",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 55,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "12.4",
    "ict_index": "7.8",
    "expected_goals": "0.19",
    "expected_assists": "0.05",
    "expected_goal_involvements": "0.24",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 392,
    "web_name": "Aït-Nouri",
    "first_name": "Rayan",
    "second_name": "Aït-Nouri",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.9",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 393,
    "web_name": "Khusanov",
    "first_name": "Abdukodir",
    "second_name": "Khusanov",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.8",
    "ict_index": "2.0",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 394,
    "web_name": "Alleyne",
    "first_name": "Max",
    "second_name": "Alleyne",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Burnley on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 395,
    "web_name": "Lewis",
    "first_name": "Rico",
    "second_name": "Lewis",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "4.7",
    "expected_goals": "0.17",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.19",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 396,
    "web_name": "Vitor Reis",
    "first_name": "Vitor",
    "second_name": "de Oliveira Nunes dos Reis",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 397,
    "web_name": "Semenyo",
    "first_name": "Antoine",
    "second_name": "Semenyo",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 85,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "25.3",
    "ict_index": "4.6",
    "expected_goals": "0.06",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.08",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 398,
    "web_name": "Foden",
    "first_name": "Phil",
    "second_name": "Foden",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 70,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "4.3",
    "ict_index": "7.5",
    "expected_goals": "0.12",
    "expected_assists": "0.40",
    "expected_goal_involvements": "0.52",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 399,
    "web_name": "Cherki",
    "first_name": "Rayan",
    "second_name": "Cherki",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 75,
    "form": "8.0",
    "total_points": 8,
    "event_points": 8,
    "selected_by_percent": "9.5",
    "ict_index": "9.2",
    "expected_goals": "0.00",
    "expected_assists": "0.50",
    "expected_goal_involvements": "0.50",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "8.0",
    "goals_scored": 0,
    "assists": 2,
    "clean_sheets": 0,
    "bonus": 1,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 400,
    "web_name": "Doku",
    "first_name": "Jérémy",
    "second_name": "Doku",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 75,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Calf injury - Expected back 5 Sep",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 401,
    "web_name": "Marmoush",
    "first_name": "Omar",
    "second_name": "Marmoush",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 4,
    "now_cost": 70,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 402,
    "web_name": "Rodrigo",
    "first_name": "Rodrigo 'Rodri'",
    "second_name": "Hernandez Cascante",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Barcelona permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 403,
    "web_name": "Savinho",
    "first_name": "Sávio",
    "second_name": "Moreira de Oliveira",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 404,
    "web_name": "Reijnders",
    "first_name": "Tijjani",
    "second_name": "Reijnders",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Al Qadsiah permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 405,
    "web_name": "N.Gonzalez",
    "first_name": "Nico",
    "second_name": "González Iglesias",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 406,
    "web_name": "Kovačić",
    "first_name": "Mateo",
    "second_name": "Kovačić",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 407,
    "web_name": "Echeverri",
    "first_name": "Claudio",
    "second_name": "Echeverri",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 408,
    "web_name": "Phillips",
    "first_name": "Kalvin",
    "second_name": "Phillips",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Sheffield United on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 409,
    "web_name": "Mukasa",
    "first_name": "Divine",
    "second_name": "Mukasa",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 410,
    "web_name": "Monga",
    "first_name": "Jeremy",
    "second_name": "Monga",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 411,
    "web_name": "Haaland",
    "first_name": "Erling",
    "second_name": "Haaland",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 4,
    "now_cost": 155,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "68.6",
    "ict_index": "5.9",
    "expected_goals": "0.74",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.76",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 481,
    "web_name": "Anderson",
    "first_name": "Elliot",
    "second_name": "Anderson",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 3,
    "now_cost": 65,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "6.9",
    "ict_index": "2.8",
    "expected_goals": "0.00",
    "expected_assists": "0.25",
    "expected_goal_involvements": "0.25",
    "status": "d",
    "news": "Knock - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 587,
    "web_name": "Rulli",
    "first_name": "Gerónimo",
    "second_name": "Rulli",
    "team": 15,
    "team_short": "MCI",
    "team_name": "Man City",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "CRY",
        "opponent_name": "Crystal Palace",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 4,
        "opponent_short": "MUN",
        "opponent_name": "Man Utd",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "SUN",
        "opponent_name": "Sunderland",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 43,
    "web_name": "Tielemans",
    "first_name": "Youri",
    "second_name": "Tielemans",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "2.5",
    "ict_index": "2.0",
    "expected_goals": "0.04",
    "expected_assists": "0.11",
    "expected_goal_involvements": "0.15",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 162,
    "web_name": "Andrey Santos",
    "first_name": "Andrey",
    "second_name": "Nascimento dos Santos",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.0",
    "ict_index": "1.8",
    "expected_goals": "0.00",
    "expected_assists": "0.23",
    "expected_goal_involvements": "0.23",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 325,
    "web_name": "Darlow",
    "first_name": "Karl",
    "second_name": "Darlow",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 412,
    "web_name": "Lammens",
    "first_name": "Senne",
    "second_name": "Lammens",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 1,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "16.0",
    "ict_index": "2.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 413,
    "web_name": "Bayindir",
    "first_name": "Altay",
    "second_name": "Bayındır",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Celta Vigo on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 414,
    "web_name": "Heaton",
    "first_name": "Tom",
    "second_name": "Heaton",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Hamstring injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 415,
    "web_name": "Dorgu",
    "first_name": "Patrick",
    "second_name": "Dorgu",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.2",
    "ict_index": "0.7",
    "expected_goals": "0.47",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.50",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 416,
    "web_name": "De Ligt",
    "first_name": "Matthijs",
    "second_name": "de Ligt",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Back injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 417,
    "web_name": "Dalot",
    "first_name": "Diogo",
    "second_name": "Dalot Teixeira",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "2.6",
    "ict_index": "1.9",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 418,
    "web_name": "Maguire",
    "first_name": "Harry",
    "second_name": "Maguire",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "17.6",
    "ict_index": "7.3",
    "expected_goals": "0.04",
    "expected_assists": "0.40",
    "expected_goal_involvements": "0.44",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 419,
    "web_name": "Martinez",
    "first_name": "Lisandro",
    "second_name": "Martínez",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.4",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 420,
    "web_name": "Yoro",
    "first_name": "Leny",
    "second_name": "Yoro",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 421,
    "web_name": "Heaven",
    "first_name": "Ayden",
    "second_name": "Heaven",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.4",
    "ict_index": "2.0",
    "expected_goals": "0.12",
    "expected_assists": "0.04",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 422,
    "web_name": "Mazraoui",
    "first_name": "Noussair",
    "second_name": "Mazraoui",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.7",
    "ict_index": "5.6",
    "expected_goals": "0.22",
    "expected_assists": "0.05",
    "expected_goal_involvements": "0.27",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 423,
    "web_name": "Shaw",
    "first_name": "Luke",
    "second_name": "Shaw",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "20.4",
    "ict_index": "9.0",
    "expected_goals": "0.00",
    "expected_assists": "0.26",
    "expected_goal_involvements": "0.26",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 424,
    "web_name": "Amass",
    "first_name": "Harry",
    "second_name": "Amass",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 425,
    "web_name": "Fredricson",
    "first_name": "Tyler",
    "second_name": "Fredricson",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Lausanne-Sport permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 426,
    "web_name": "B.Fernandes",
    "first_name": "Bruno",
    "second_name": "Borges Fernandes",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 120,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "49.9",
    "ict_index": "9.3",
    "expected_goals": "0.08",
    "expected_assists": "0.26",
    "expected_goal_involvements": "0.34",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 427,
    "web_name": "Mbeumo",
    "first_name": "Bryan",
    "second_name": "Mbeumo",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 80,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "37.1",
    "ict_index": "8.7",
    "expected_goals": "0.50",
    "expected_assists": "0.23",
    "expected_goal_involvements": "0.73",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 428,
    "web_name": "Cunha",
    "first_name": "Matheus",
    "second_name": "Santos Carneiro da Cunha",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 80,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "9.8",
    "ict_index": "6.9",
    "expected_goals": "0.24",
    "expected_assists": "0.21",
    "expected_goal_involvements": "0.45",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 429,
    "web_name": "Rashford",
    "first_name": "Marcus",
    "second_name": "Rashford",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 70,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.7",
    "ict_index": "6.4",
    "expected_goals": "0.00",
    "expected_assists": "0.10",
    "expected_goal_involvements": "0.10",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 430,
    "web_name": "Mount",
    "first_name": "Mason",
    "second_name": "Mount",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Foot injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 431,
    "web_name": "Amad",
    "first_name": "Amad",
    "second_name": "Diallo",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Unspecified injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 432,
    "web_name": "Mainoo",
    "first_name": "Kobbie",
    "second_name": "Mainoo",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.0",
    "ict_index": "0.7",
    "expected_goals": "0.07",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.08",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 433,
    "web_name": "Ugarte",
    "first_name": "Manuel",
    "second_name": "Ugarte Ribeiro",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 434,
    "web_name": "J.Fletcher",
    "first_name": "Jack",
    "second_name": "Fletcher",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 435,
    "web_name": "Lacey",
    "first_name": "Shea",
    "second_name": "Lacey",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "0.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 436,
    "web_name": "Collyer",
    "first_name": "Toby",
    "second_name": "Collyer",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 437,
    "web_name": "Bendito Mantato",
    "first_name": "Bendito",
    "second_name": "Mantato",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 438,
    "web_name": "Fletcher",
    "first_name": "Tyler",
    "second_name": "Fletcher",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 439,
    "web_name": "Šeško",
    "first_name": "Benjamin",
    "second_name": "Sesko",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 4,
    "now_cost": 70,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.6",
    "ict_index": "0.9",
    "expected_goals": "0.04",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 440,
    "web_name": "Zirkzee",
    "first_name": "Joshua",
    "second_name": "Zirkzee",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 4,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 441,
    "web_name": "Obi",
    "first_name": "Chido",
    "second_name": "Obi",
    "team": 16,
    "team_short": "MUN",
    "team_name": "Man Utd",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": false,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 442,
    "web_name": "Pope",
    "first_name": "Nick",
    "second_name": "Pope",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 1,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 443,
    "web_name": "Gillespie",
    "first_name": "Mark",
    "second_name": "Gillespie",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 444,
    "web_name": "Jaouen",
    "first_name": "Ewen",
    "second_name": "Jaouen",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 445,
    "web_name": "Thiaw",
    "first_name": "Malick",
    "second_name": "Thiaw",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "1.7",
    "ict_index": "3.8",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 446,
    "web_name": "Schär",
    "first_name": "Fabian",
    "second_name": "Schär",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 447,
    "web_name": "Botman",
    "first_name": "Sven",
    "second_name": "Botman",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.5",
    "ict_index": "3.3",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 448,
    "web_name": "Burn",
    "first_name": "Dan",
    "second_name": "Burn",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "2.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Ankle injury - Expected back 14 Sep",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 449,
    "web_name": "Hall",
    "first_name": "Lewis",
    "second_name": "Hall",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 50,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "3.9",
    "ict_index": "3.7",
    "expected_goals": "0.00",
    "expected_assists": "0.35",
    "expected_goal_involvements": "0.35",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 450,
    "web_name": "Livramento",
    "first_name": "Tino",
    "second_name": "Livramento",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Calf injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 451,
    "web_name": "A.Murphy",
    "first_name": "Alex",
    "second_name": "Murphy",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined FC Kaiserslautern on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 453,
    "web_name": "Barnes",
    "first_name": "Harvey",
    "second_name": "Barnes",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.1",
    "ict_index": "1.7",
    "expected_goals": "0.07",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.09",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 454,
    "web_name": "Elanga",
    "first_name": "Anthony",
    "second_name": "Elanga",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 60,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "1.4",
    "ict_index": "6.9",
    "expected_goals": "0.22",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.23",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 456,
    "web_name": "J.Ramsey",
    "first_name": "Jacob",
    "second_name": "Ramsey",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.4",
    "ict_index": "1.3",
    "expected_goals": "0.06",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.07",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 457,
    "web_name": "J.Murphy",
    "first_name": "Jacob",
    "second_name": "Murphy",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 458,
    "web_name": "Joelinton",
    "first_name": "Joelinton Cássio",
    "second_name": "Apolinário de Lira",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Unspecified injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 459,
    "web_name": "L.Miley",
    "first_name": "Lewis",
    "second_name": "Miley",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.1",
    "ict_index": "4.0",
    "expected_goals": "0.05",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 460,
    "web_name": "Willock",
    "first_name": "Joe",
    "second_name": "Willock",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 50,
    "form": "6.0",
    "total_points": 6,
    "event_points": 6,
    "selected_by_percent": "0.2",
    "ict_index": "6.1",
    "expected_goals": "0.09",
    "expected_assists": "0.17",
    "expected_goal_involvements": "0.26",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "6.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 461,
    "web_name": "Touré",
    "first_name": "Bazoumana",
    "second_name": "Touré",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 462,
    "web_name": "Steur",
    "first_name": "Sean",
    "second_name": "Steur",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 463,
    "web_name": "Woltemade",
    "first_name": "Nick",
    "second_name": "Woltemade",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 4,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 464,
    "web_name": "Wissa",
    "first_name": "Yoane",
    "second_name": "Wissa",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 4,
    "now_cost": 60,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "2.4",
    "ict_index": "6.4",
    "expected_goals": "1.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "1.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 465,
    "web_name": "Osula",
    "first_name": "William",
    "second_name": "Osula",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 4,
    "now_cost": 60,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "1.2",
    "ict_index": "5.0",
    "expected_goals": "0.06",
    "expected_assists": "0.14",
    "expected_goal_involvements": "0.20",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 466,
    "web_name": "Neave",
    "first_name": "Sean",
    "second_name": "Neave",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.8",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 559,
    "web_name": "Bamba",
    "first_name": "Aladji",
    "second_name": "Bamba",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 567,
    "web_name": "Horníček",
    "first_name": "Lukás",
    "second_name": "Hornícek",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 1,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.7",
    "ict_index": "4.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 593,
    "web_name": "Dedić",
    "first_name": "Amar",
    "second_name": "Dedic",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.3",
    "ict_index": "2.3",
    "expected_goals": "0.03",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 609,
    "web_name": "Shahar",
    "first_name": "Leo",
    "second_name": "Shahar",
    "team": 17,
    "team_short": "NEW",
    "team_name": "Newcastle",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 2,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 3,
        "opponent_short": "BOU",
        "opponent_name": "Bournemouth",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "HUL",
        "opponent_name": "Hull City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 467,
    "web_name": "Sels",
    "first_name": "Matz",
    "second_name": "Sels",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 1,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.6",
    "ict_index": "1.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 468,
    "web_name": "John",
    "first_name": "John Victor",
    "second_name": "Maciel Furtado",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 469,
    "web_name": "N.Williams",
    "first_name": "Neco",
    "second_name": "Williams",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "9.6",
    "ict_index": "2.7",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 470,
    "web_name": "Morato",
    "first_name": "Felipe",
    "second_name": "Rodrigues da Silva",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 471,
    "web_name": "Milenković",
    "first_name": "Nikola",
    "second_name": "Milenković",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.9",
    "ict_index": "2.2",
    "expected_goals": "0.11",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.13",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 472,
    "web_name": "Murillo",
    "first_name": "Murillo",
    "second_name": "Costa dos Santos",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 55,
    "form": "4.0",
    "total_points": 4,
    "event_points": 4,
    "selected_by_percent": "1.7",
    "ict_index": "5.8",
    "expected_goals": "0.00",
    "expected_assists": "0.28",
    "expected_goal_involvements": "0.28",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "4.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 473,
    "web_name": "Aina",
    "first_name": "Ola",
    "second_name": "Aina",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 45,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "3.6",
    "ict_index": "6.3",
    "expected_goals": "0.04",
    "expected_assists": "0.17",
    "expected_goal_involvements": "0.21",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 474,
    "web_name": "Jair Cunha",
    "first_name": "Jair",
    "second_name": "Paula da Cunha Filho",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "2.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 475,
    "web_name": "Savona",
    "first_name": "Nicolò",
    "second_name": "Savona",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 476,
    "web_name": "O.Richards",
    "first_name": "Omar",
    "second_name": "Richards",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 477,
    "web_name": "Abbott",
    "first_name": "Zach",
    "second_name": "Abbott",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 478,
    "web_name": "Netz",
    "first_name": "Luca",
    "second_name": "Netz",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.0",
    "ict_index": "0.1",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 479,
    "web_name": "Bindon",
    "first_name": "Tyler",
    "second_name": "Bindon",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 480,
    "web_name": "Gibbs-White",
    "first_name": "Morgan",
    "second_name": "Gibbs-White",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 80,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "10.4",
    "ict_index": "2.4",
    "expected_goals": "0.13",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.19",
    "status": "d",
    "news": "Knee injury - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 482,
    "web_name": "Hudson-Odoi",
    "first_name": "Callum",
    "second_name": "Hudson-Odoi",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 483,
    "web_name": "Ndoye",
    "first_name": "Dan",
    "second_name": "Ndoye",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.4",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 484,
    "web_name": "Hutchinson",
    "first_name": "Omari",
    "second_name": "Hutchinson",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 485,
    "web_name": "Bakwa",
    "first_name": "Dilane",
    "second_name": "Bakwa",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 486,
    "web_name": "McAtee",
    "first_name": "James",
    "second_name": "McAtee",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 55,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "0.0",
    "ict_index": "5.4",
    "expected_goals": "0.00",
    "expected_assists": "0.16",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 1,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 487,
    "web_name": "Dominguez",
    "first_name": "Nicolás",
    "second_name": "Domínguez",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 488,
    "web_name": "I.Sangaré",
    "first_name": "Ibrahim",
    "second_name": "Sangaré",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "1.0",
    "ict_index": "3.4",
    "expected_goals": "0.03",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.04",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 489,
    "web_name": "Yates",
    "first_name": "Ryan",
    "second_name": "Yates",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Unspecified injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 490,
    "web_name": "Wood",
    "first_name": "Chris",
    "second_name": "Wood",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 4,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.7",
    "ict_index": "0.4",
    "expected_goals": "0.12",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.13",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 491,
    "web_name": "Igor Jesus",
    "first_name": "Igor Jesus",
    "second_name": "Maciel da Cruz",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 4,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "4.1",
    "ict_index": "4.3",
    "expected_goals": "0.22",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.24",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 493,
    "web_name": "Kalimuendo",
    "first_name": "Arnaud",
    "second_name": "Kalimuendo",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 558,
    "web_name": "Schlager",
    "first_name": "Xaver",
    "second_name": "Schlager",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 581,
    "web_name": "Diomande",
    "first_name": "Ousmane",
    "second_name": "Diomande",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.8",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 590,
    "web_name": "Benda",
    "first_name": "Steven",
    "second_name": "Benda",
    "team": 18,
    "team_short": "NFO",
    "team_name": "Nott'm Forest",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "LEE",
        "opponent_name": "Leeds",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "LIV",
        "opponent_name": "Liverpool",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 3,
        "opponent_short": "TOT",
        "opponent_name": "Spurs",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": false,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "COV",
        "opponent_name": "Coventry City",
        "is_home": true,
        "difficulty": 2
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 112,
    "web_name": "Van Hecke",
    "first_name": "Jan Paul",
    "second_name": "van Hecke",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "10.2",
    "ict_index": "3.3",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 455,
    "web_name": "Tonali",
    "first_name": "Sandro",
    "second_name": "Tonali",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 55,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "4.0",
    "ict_index": "2.1",
    "expected_goals": "0.04",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.10",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 494,
    "web_name": "Vicario",
    "first_name": "Guglielmo",
    "second_name": "Vicario",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Juventus on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 495,
    "web_name": "Austin",
    "first_name": "Brandon",
    "second_name": "Austin",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.9",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 496,
    "web_name": "Kinsky",
    "first_name": "Antonín",
    "second_name": "Kinský",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 1,
    "now_cost": 45,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "23.4",
    "ict_index": "4.4",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 497,
    "web_name": "Dubravka",
    "first_name": "Martin",
    "second_name": "Dubravka",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "19.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 498,
    "web_name": "Senesi",
    "first_name": "Marcos",
    "second_name": "Senesi Barón",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 60,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "8.0",
    "ict_index": "3.9",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 499,
    "web_name": "Pedro Porro",
    "first_name": "Pedro",
    "second_name": "Porro Sauceda",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "14.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Lack of match fitness - 75% chance of playing",
    "chance_of_playing_next_round": 75,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 500,
    "web_name": "Romero",
    "first_name": "Cristian",
    "second_name": "Romero",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Atletico Madrid permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 501,
    "web_name": "Danso",
    "first_name": "Kevin",
    "second_name": "Danso",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 502,
    "web_name": "Robertson",
    "first_name": "Andrew",
    "second_name": "Robertson",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 45,
    "form": "3.0",
    "total_points": 3,
    "event_points": 3,
    "selected_by_percent": "3.9",
    "ict_index": "5.3",
    "expected_goals": "0.00",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "3.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 503,
    "web_name": "Van de Ven",
    "first_name": "Micky",
    "second_name": "van de Ven",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "4.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Unspecified injury - 50% chance of playing",
    "chance_of_playing_next_round": 50,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 505,
    "web_name": "Spence",
    "first_name": "Djed",
    "second_name": "Spence",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.6",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Internazionale permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 506,
    "web_name": "Udogie",
    "first_name": "Destiny",
    "second_name": "Udogie",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 507,
    "web_name": "Phillips",
    "first_name": "Ashley",
    "second_name": "Phillips",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Middlesbrough permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 508,
    "web_name": "Davies",
    "first_name": "Ben",
    "second_name": "Davies",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 509,
    "web_name": "Byfield",
    "first_name": "Jun'ai",
    "second_name": "Byfield",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 510,
    "web_name": "Rowswell",
    "first_name": "James",
    "second_name": "Rowswell",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 511,
    "web_name": "Souza",
    "first_name": "João Victor",
    "second_name": "de Souza Menezes",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 512,
    "web_name": "Kudus",
    "first_name": "Mohammed",
    "second_name": "Kudus",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "d",
    "news": "Thigh injury - 50% chance of playing",
    "chance_of_playing_next_round": 50,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 513,
    "web_name": "Xavi",
    "first_name": "Xavi",
    "second_name": "Simons",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 60,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 514,
    "web_name": "Tel",
    "first_name": "Mathys",
    "second_name": "Tel",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.5",
    "ict_index": "4.5",
    "expected_goals": "0.06",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.12",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 515,
    "web_name": "Maddison",
    "first_name": "James",
    "second_name": "Maddison",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 65,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.3",
    "ict_index": "2.1",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 516,
    "web_name": "Bentancur",
    "first_name": "Rodrigo",
    "second_name": "Bentancur",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "1.7",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 517,
    "web_name": "Odobert",
    "first_name": "Wilson",
    "second_name": "Odobert",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 518,
    "web_name": "P.M.Sarr",
    "first_name": "Pape Matar",
    "second_name": "Sarr",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Hamstring injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 519,
    "web_name": "Gallagher",
    "first_name": "Conor",
    "second_name": "Gallagher",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.3",
    "ict_index": "0.5",
    "expected_goals": "0.02",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.08",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 520,
    "web_name": "Bergvall",
    "first_name": "Lucas",
    "second_name": "Bergvall",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 521,
    "web_name": "Kulusevski",
    "first_name": "Dejan",
    "second_name": "Kulusevski",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 65,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Knee injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 522,
    "web_name": "Gray",
    "first_name": "Archie",
    "second_name": "Gray",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "1.0",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 523,
    "web_name": "Moore",
    "first_name": "Mikey",
    "second_name": "Moore",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.2",
    "ict_index": "7.5",
    "expected_goals": "0.38",
    "expected_assists": "0.02",
    "expected_goal_involvements": "0.40",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 524,
    "web_name": "Olusesi",
    "first_name": "Callum",
    "second_name": "Olusesi",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.9",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 525,
    "web_name": "Fernandes",
    "first_name": "Mateus",
    "second_name": "Fernandes",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.8",
    "ict_index": "3.6",
    "expected_goals": "0.00",
    "expected_assists": "0.06",
    "expected_goal_involvements": "0.06",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 526,
    "web_name": "Solanke",
    "first_name": "Dominic",
    "second_name": "Solanke-Mitchell",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 4,
    "now_cost": 60,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "1.4",
    "ict_index": "0.5",
    "expected_goals": "0.07",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.07",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 527,
    "web_name": "Richarlison",
    "first_name": "Richarlison",
    "second_name": "de Andrade",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 4,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "3.1",
    "ict_index": "0.2",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 528,
    "web_name": "Scarlett",
    "first_name": "Dane",
    "second_name": "Scarlett",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 4,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "1.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 601,
    "web_name": "Williams-Barnett",
    "first_name": "Luca",
    "second_name": "Williams-Barnett",
    "team": 19,
    "team_short": "TOT",
    "team_name": "Spurs",
    "element_type": 3,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 2,
        "opponent_short": "NEW",
        "opponent_name": "Newcastle",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "NFO",
        "opponent_name": "Nott'm Forest",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "EVE",
        "opponent_name": "Everton",
        "is_home": true,
        "difficulty": 3
      },
      {
        "event": 5,
        "opponent_short": "AVL",
        "opponent_name": "Aston Villa",
        "is_home": true,
        "difficulty": 3
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 529,
    "web_name": "Roefs",
    "first_name": "Robin",
    "second_name": "Roefs",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 1,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "4.2",
    "ict_index": "1.5",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 530,
    "web_name": "Patterson",
    "first_name": "Anthony",
    "second_name": "Patterson",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 1,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Wrexham permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 531,
    "web_name": "Ellborg",
    "first_name": "Melker",
    "second_name": "Ellborg",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 1,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 532,
    "web_name": "Ballard",
    "first_name": "Daniel",
    "second_name": "Ballard",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "5.4",
    "ict_index": "1.9",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 533,
    "web_name": "Mukiele",
    "first_name": "Nordi",
    "second_name": "Mukiele",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 55,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "2.7",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 534,
    "web_name": "Hume",
    "first_name": "Trai",
    "second_name": "Hume",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 45,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "6.7",
    "ict_index": "6.2",
    "expected_goals": "0.04",
    "expected_assists": "0.27",
    "expected_goal_involvements": "0.31",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 535,
    "web_name": "Alderete",
    "first_name": "Omar",
    "second_name": "Alderete",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.5",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.01",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 536,
    "web_name": "Reinildo",
    "first_name": "Reinildo",
    "second_name": "Mandava",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.5",
    "ict_index": "5.5",
    "expected_goals": "0.00",
    "expected_assists": "0.29",
    "expected_goal_involvements": "0.29",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 537,
    "web_name": "Seelt",
    "first_name": "Jenson",
    "second_name": "Seelt",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 45,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 538,
    "web_name": "Hjelde",
    "first_name": "Leo Fuhr",
    "second_name": "Hjelde",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined KV Mechelen on loan for the rest of the season",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 539,
    "web_name": "O'Nien",
    "first_name": "Luke",
    "second_name": "O'Nien",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 40,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "3.6",
    "ict_index": "1.7",
    "expected_goals": "0.01",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.02",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 540,
    "web_name": "Masuaku",
    "first_name": "Arthur",
    "second_name": "Masuaku",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 40,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "u",
    "news": "Has joined Konyaspor permanently",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 541,
    "web_name": "Meunier",
    "first_name": "Thomas",
    "second_name": "Meunier",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 2,
    "now_cost": 45,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.3",
    "ict_index": "3.0",
    "expected_goals": "0.08",
    "expected_assists": "0.08",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": 100,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 542,
    "web_name": "E.Le Fée",
    "first_name": "Enzo",
    "second_name": "Le Fée",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "9.5",
    "ict_index": "1.5",
    "expected_goals": "0.00",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 543,
    "web_name": "Diarra",
    "first_name": "Habib",
    "second_name": "Diarra",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.3",
    "expected_goals": "0.03",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.03",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 544,
    "web_name": "Xhaka",
    "first_name": "Granit",
    "second_name": "Xhaka",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 55,
    "form": "9.0",
    "total_points": 9,
    "event_points": 9,
    "selected_by_percent": "4.5",
    "ict_index": "5.0",
    "expected_goals": "0.00",
    "expected_assists": "0.09",
    "expected_goal_involvements": "0.09",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "9.0",
    "goals_scored": 0,
    "assists": 1,
    "clean_sheets": 0,
    "bonus": 2,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 545,
    "web_name": "Sadiki",
    "first_name": "Noah",
    "second_name": "Sadiki",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 50,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "0.3",
    "ict_index": "7.2",
    "expected_goals": "0.06",
    "expected_assists": "0.03",
    "expected_goal_involvements": "0.09",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 546,
    "web_name": "Adingra",
    "first_name": "Simon",
    "second_name": "Adingra",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "i",
    "news": "Ankle injury - Unknown return date",
    "chance_of_playing_next_round": 0,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 547,
    "web_name": "Mundle",
    "first_name": "Romaine",
    "second_name": "Mundle",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 548,
    "web_name": "Rigg",
    "first_name": "Chris",
    "second_name": "Rigg",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 50,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.1",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 549,
    "web_name": "Talbi",
    "first_name": "Chemsdine",
    "second_name": "Talbi",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.2",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 550,
    "web_name": "Jocelin.T",
    "first_name": "Djiamgone Jocelin Ta",
    "second_name": "Bi",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 50,
    "form": "0.0",
    "total_points": 0,
    "event_points": 0,
    "selected_by_percent": "0.0",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "0.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 551,
    "web_name": "Angulo",
    "first_name": "Nilson",
    "second_name": "Angulo",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 3,
    "now_cost": 50,
    "form": "5.0",
    "total_points": 5,
    "event_points": 5,
    "selected_by_percent": "0.1",
    "ict_index": "5.2",
    "expected_goals": "0.15",
    "expected_assists": "0.01",
    "expected_goal_involvements": "0.16",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "5.0",
    "goals_scored": 1,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 552,
    "web_name": "Brobbey",
    "first_name": "Brian",
    "second_name": "Brobbey",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 4,
    "now_cost": 60,
    "form": "2.0",
    "total_points": 2,
    "event_points": 2,
    "selected_by_percent": "13.5",
    "ict_index": "1.1",
    "expected_goals": "0.30",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.30",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "2.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  },
  {
    "id": 553,
    "web_name": "Isidor",
    "first_name": "Wilson",
    "second_name": "Isidor",
    "team": 20,
    "team_short": "SUN",
    "team_name": "Sunderland",
    "element_type": 4,
    "now_cost": 55,
    "form": "1.0",
    "total_points": 1,
    "event_points": 1,
    "selected_by_percent": "0.9",
    "ict_index": "0.0",
    "expected_goals": "0.00",
    "expected_assists": "0.00",
    "expected_goal_involvements": "0.00",
    "status": "a",
    "news": "",
    "chance_of_playing_next_round": null,
    "points_per_game": "1.0",
    "goals_scored": 0,
    "assists": 0,
    "clean_sheets": 0,
    "bonus": 0,
    "fixtures": [
      {
        "event": 1,
        "opponent_short": "IPS",
        "opponent_name": "Ipswich Town",
        "is_home": false,
        "difficulty": 2
      },
      {
        "event": 2,
        "opponent_short": "FUL",
        "opponent_name": "Fulham",
        "is_home": true,
        "difficulty": 2
      },
      {
        "event": 3,
        "opponent_short": "BRE",
        "opponent_name": "Brentford",
        "is_home": false,
        "difficulty": 3
      },
      {
        "event": 4,
        "opponent_short": "ARS",
        "opponent_name": "Arsenal",
        "is_home": true,
        "difficulty": 4
      },
      {
        "event": 5,
        "opponent_short": "MCI",
        "opponent_name": "Man City",
        "is_home": false,
        "difficulty": 5
      }
    ],
    "price_change_event": 0
  }
];

export const INITIAL_TOP20_MANAGERS: FPLManager[] = [
  {
    "rank": 1,
    "last_rank": 1,
    "entry_id": 120245,
    "player_name": "Dull Menate",
    "entry_name": "LOCKER DOOR",
    "overall_points": 131,
    "event_total": 131,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 387,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 4,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 397,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 6,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 15,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 426,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 125,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 385,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 334,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 316,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 154,
    "vice_captain_id": 426,
    "formation": "3-5-2"
  },
  {
    "rank": 2,
    "last_rank": 2,
    "entry_id": 3648199,
    "player_name": "Jeremy Wang",
    "entry_name": "NOT INTO YOU",
    "overall_points": 124,
    "event_total": 124,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 65,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 82,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 4,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 88,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 87,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 6,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 367,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 346,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 552,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 109,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 208,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 8,
    "vice_captain_id": 4,
    "formation": "5-2-3"
  },
  {
    "rank": 2,
    "last_rank": 2,
    "entry_id": 1799570,
    "player_name": "Alexander Polle",
    "entry_name": "FC Frigo",
    "overall_points": 124,
    "event_total": 124,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 504,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 391,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 15,
        "position": 7,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 427,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 249,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 496,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 368,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 423,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 565,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 15,
    "vice_captain_id": 411,
    "formation": "4-3-3"
  },
  {
    "rank": 4,
    "last_rank": 4,
    "entry_id": 2022827,
    "player_name": "Gene Lam",
    "entry_name": "Gene's Team",
    "overall_points": 121,
    "event_total": 121,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 496,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 4,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 334,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 335,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 10,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 109,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 249,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 127,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 332,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 411,
    "vice_captain_id": 165,
    "formation": "4-4-2"
  },
  {
    "rank": 4,
    "last_rank": 4,
    "entry_id": 6629830,
    "player_name": "Big Auraaa",
    "entry_name": "Auraacle Fc",
    "overall_points": 121,
    "event_total": 121,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "3xc",
    "chips_history": [
      {
        "name": "3xc",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 384,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 88,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 327,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 388,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 236,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 3,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 28,
        "position": 12,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 473,
        "position": 13,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 315,
        "position": 14,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 552,
        "position": 15,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 165,
    "vice_captain_id": 411,
    "formation": "4-4-2"
  },
  {
    "rank": 6,
    "last_rank": 6,
    "entry_id": 147424,
    "player_name": "Alex Thomas",
    "entry_name": "Snoop Udogie Dogg",
    "overall_points": 120,
    "event_total": 120,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 5,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 391,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 428,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 565,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 557,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 9,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 552,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 412,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 329,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 411,
    "vice_captain_id": 165,
    "formation": "3-4-3"
  },
  {
    "rank": 6,
    "last_rank": 6,
    "entry_id": 6722582,
    "player_name": "A ip",
    "entry_name": "شێرە بەردەرەشی  ipz",
    "overall_points": 120,
    "event_total": 120,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 20,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 87,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 473,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 6,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 427,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 426,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 15,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 94,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 346,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 496,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 379,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 115,
    "vice_captain_id": 15,
    "formation": "5-4-1"
  },
  {
    "rank": 8,
    "last_rank": 8,
    "entry_id": 3895646,
    "player_name": "dave atkinson",
    "entry_name": "hope and glory",
    "overall_points": 119,
    "event_total": 119,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 82,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 4,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 388,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 368,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 13,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 223,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 442,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 119,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 367,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 379,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 165,
    "vice_captain_id": 223,
    "formation": "4-4-2"
  },
  {
    "rank": 8,
    "last_rank": 8,
    "entry_id": 440955,
    "player_name": "Pontus Bergander",
    "entry_name": "ilövestenis",
    "overall_points": 119,
    "event_total": 119,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 1,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 469,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 498,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 5,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 557,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 565,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 496,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 534,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 552,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 154,
    "vice_captain_id": 411,
    "formation": "3-5-2"
  },
  {
    "rank": 8,
    "last_rank": 8,
    "entry_id": 141417,
    "player_name": "Luke Englishby",
    "entry_name": "LUKEIO 4 REAL HUGO",
    "overall_points": 119,
    "event_total": 119,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 1,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 473,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 426,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 6,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 366,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 367,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 379,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 496,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 125,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 539,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 154,
    "vice_captain_id": 379,
    "formation": "3-5-2"
  },
  {
    "rank": 8,
    "last_rank": 8,
    "entry_id": 244723,
    "player_name": "Andre Aivazian",
    "entry_name": "Haalandaise Sauce",
    "overall_points": 119,
    "event_total": 119,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 5,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 1,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 532,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 334,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 84,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 557,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 236,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 368,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 40,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 123,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 109,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 295,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 229,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 165,
    "vice_captain_id": 368,
    "formation": "3-5-2"
  },
  {
    "rank": 12,
    "last_rank": 12,
    "entry_id": 1099735,
    "player_name": "Lukas Paulsson",
    "entry_name": "JonSnow",
    "overall_points": 118,
    "event_total": 118,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 385,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 357,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 259,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 368,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 411,
        "position": 11,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 109,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 94,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 106,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 123,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 411,
    "vice_captain_id": 165,
    "formation": "5-3-2"
  },
  {
    "rank": 13,
    "last_rank": 13,
    "entry_id": 5999624,
    "player_name": "Hosanna Gbrx",
    "entry_name": "HosannaG",
    "overall_points": 117,
    "event_total": 117,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 20,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 1,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 391,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 418,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 427,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 123,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 346,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 10,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 109,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 334,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 565,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 329,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 165,
    "vice_captain_id": 1,
    "formation": "3-4-3"
  },
  {
    "rank": 13,
    "last_rank": 13,
    "entry_id": 1026920,
    "player_name": "Owen Richardson",
    "entry_name": "Delap of Honour",
    "overall_points": 117,
    "event_total": 117,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 10,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 412,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 334,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 391,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 368,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 45,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 565,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 10,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 109,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 504,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 88,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 569,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 411,
    "vice_captain_id": 165,
    "formation": "3-5-2"
  },
  {
    "rank": 13,
    "last_rank": 13,
    "entry_id": 3358247,
    "player_name": "Carrie Roberts",
    "entry_name": "Regimental Utd",
    "overall_points": 117,
    "event_total": 117,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 8,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 305,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 426,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 557,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 565,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 9,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 106,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 496,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 123,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 87,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 411,
    "vice_captain_id": 109,
    "formation": "3-4-3"
  },
  {
    "rank": 13,
    "last_rank": 13,
    "entry_id": 6973235,
    "player_name": "Venom Vanguard Celestial Cipher",
    "entry_name": "Cahyong",
    "overall_points": 117,
    "event_total": 117,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 0,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 418,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 229,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 426,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 40,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 154,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 368,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 10,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 106,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 529,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 15,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 491,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 165,
    "vice_captain_id": 8,
    "formation": "4-4-2"
  },
  {
    "rank": 17,
    "last_rank": 17,
    "entry_id": 6922784,
    "player_name": "Pannapat Homsuwan",
    "entry_name": "S8",
    "overall_points": 116,
    "event_total": 116,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 5,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 385,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 391,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 356,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 368,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 155,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 15,
        "position": 8,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 557,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 82,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 499,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 237,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 464,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 15,
    "vice_captain_id": 411,
    "formation": "4-4-2"
  },
  {
    "rank": 17,
    "last_rank": 17,
    "entry_id": 331434,
    "player_name": "saif ali",
    "entry_name": "ELIXIR",
    "overall_points": 116,
    "event_total": 116,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 70,
    "value": 1000,
    "active_chip": "3xc",
    "chips_history": [
      {
        "name": "3xc",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 504,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 4,
        "multiplier": 3,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 15,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 368,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 367,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 480,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 94,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 26,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 106,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 496,
        "position": 12,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 13,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 418,
        "position": 14,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 387,
        "position": 15,
        "multiplier": 0,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 115,
    "vice_captain_id": 15,
    "formation": "3-5-2"
  },
  {
    "rank": 17,
    "last_rank": 17,
    "entry_id": 43242,
    "player_name": "Erik Nes Ohnstad",
    "entry_name": "Odd man out",
    "overall_points": 116,
    "event_total": 116,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 5,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 109,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 10,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 387,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 366,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 236,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 15,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 123,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 379,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 10,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 572,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 576,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 362,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 115,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 411,
    "vice_captain_id": 15,
    "formation": "3-4-3"
  },
  {
    "rank": 17,
    "last_rank": 17,
    "entry_id": 1821530,
    "player_name": "Ben Robinson",
    "entry_name": "Its Coming Home",
    "overall_points": 116,
    "event_total": 116,
    "total_transfers": 0,
    "event_transfers": 0,
    "event_transfers_cost": 0,
    "bank": 10,
    "value": 1000,
    "active_chip": "bboost",
    "chips_history": [
      {
        "name": "bboost",
        "event": 1
      }
    ],
    "picks": [
      {
        "element": 385,
        "position": 1,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 11,
        "position": 2,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 8,
        "position": 3,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 334,
        "position": 4,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 130,
        "position": 5,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 397,
        "position": 6,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 427,
        "position": 7,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 565,
        "position": 8,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 557,
        "position": 9,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 346,
        "position": 10,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": true
      },
      {
        "element": 165,
        "position": 11,
        "multiplier": 2,
        "is_captain": true,
        "is_vice_captain": false
      },
      {
        "element": 529,
        "position": 12,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 123,
        "position": 13,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 88,
        "position": 14,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      },
      {
        "element": 411,
        "position": 15,
        "multiplier": 1,
        "is_captain": false,
        "is_vice_captain": false
      }
    ],
    "captain_id": 165,
    "vice_captain_id": 346,
    "formation": "4-4-2"
  }
];

export function computeTop20Consensus(
  managers: FPLManager[],
  players: FPLPlayer[]
): Top20Consensus {
  const totalManagers = managers.length || 1;
  const playerMap = new Map(players.map((p) => [p.id, p]));

  const ownershipMap = new Map<number, number>();
  const captaincyMap = new Map<number, number>();
  const formationMap = new Map<string, number>();
  const chipsMap: Record<string, number> = {};

  let totalValue = 0;
  let totalGwPts = 0;
  let highestGw = { score: 0, manager: '', team: '' };

  managers.forEach((m) => {
    totalValue += m.value;
    totalGwPts += m.event_total;

    if (m.event_total > highestGw.score) {
      highestGw = {
        score: m.event_total,
        manager: m.player_name,
        team: m.entry_name,
      };
    }

    if (m.active_chip) {
      chipsMap[m.active_chip] = (chipsMap[m.active_chip] || 0) + 1;
    }

    if (m.formation) {
      formationMap.set(m.formation, (formationMap.get(m.formation) || 0) + 1);
    }

    m.picks.forEach((pick) => {
      ownershipMap.set(pick.element, (ownershipMap.get(pick.element) || 0) + 1);
      if (pick.is_captain) {
        captaincyMap.set(pick.element, (captaincyMap.get(pick.element) || 0) + 1);
      }
    });
  });

  const topOwnedPlayers = Array.from(ownershipMap.entries())
    .map(([id, count]) => {
      const p = playerMap.get(id) || {
        id,
        web_name: 'Player #' + id,
        first_name: 'FPL',
        second_name: 'Player',
        team: 1,
        team_short: 'PL',
        team_name: 'Premier League',
        element_type: 3 as const,
        now_cost: 60,
        form: '5.0',
        total_points: 50,
        event_points: 6,
        selected_by_percent: '10.0',
        ict_index: '50.0',
        expected_goals: '1.0',
        expected_assists: '1.0',
        expected_goal_involvements: '2.0',
        status: 'a' as const,
        news: '',
        chance_of_playing_next_round: 100,
        points_per_game: '5.0',
        goals_scored: 2,
        assists: 2,
        clean_sheets: 1,
        bonus: 3,
        fixtures: [],
      };
      return {
        player: p,
        count,
        percent: Math.round((count / totalManagers) * 100),
      };
    })
    .sort((a, b) => b.count - a.count);

  const captaincyDistribution = Array.from(captaincyMap.entries())
    .map(([id, count]) => {
      const p = playerMap.get(id) || {
        id,
        web_name: 'Player #' + id,
        first_name: 'FPL',
        second_name: 'Player',
        team: 1,
        team_short: 'PL',
        team_name: 'Premier League',
        element_type: 3 as const,
        now_cost: 100,
        form: '8.0',
        total_points: 100,
        event_points: 10,
        selected_by_percent: '30.0',
        ict_index: '100.0',
        expected_goals: '5.0',
        expected_assists: '4.0',
        expected_goal_involvements: '9.0',
        status: 'a' as const,
        news: '',
        chance_of_playing_next_round: 100,
        points_per_game: '7.0',
        goals_scored: 5,
        assists: 4,
        clean_sheets: 0,
        bonus: 10,
        fixtures: [],
      };
      return {
        player: p,
        count,
        percent: Math.round((count / totalManagers) * 100),
      };
    })
    .sort((a, b) => b.count - a.count);

  const formationDistribution = Array.from(formationMap.entries())
    .map(([formation, count]) => ({
      formation,
      count,
      percent: Math.round((count / totalManagers) * 100),
    }))
    .sort((a, b) => b.count - a.count);

  return {
    topOwnedPlayers,
    captaincyDistribution,
    formationDistribution,
    activeChipsCount: chipsMap,
    averageTeamValue: Math.round((totalValue / totalManagers) * 10) / 10,
    averageGwPoints: Math.round(totalGwPts / totalManagers),
    highestGwScore: highestGw,
  };
}
