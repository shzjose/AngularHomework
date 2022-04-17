import React, {useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {


const[searchText, setSearchText] = useState("");
const [playerData, setPlayerData] = useState<any>({});

//LEAGUE OF LEGENDS API KEY
const API_KEY ="RGAPI-023e996a-b383-4222-a53f-7d909f3432a6";

function searchForPlayer(){
    var APICall = "https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    
    axios.get(APICall).then(function (response){
      //Success
      setPlayerData(response.data);
    }).catch(function (error){

    });
}
  return (
    <div className="App">
      <div className="container">
        <h5>LOL SERACHER: </h5>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer()}>Search for player</button>
      </div>
      {JSON.stringify(playerData) != '{}' ?
        <>
          <p>{playerData.name}</p>
          <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.7.1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
        </>    
        : <> <p>No player data</p> </>
        
      }
    </div>
  );
}

export default App;
