// This is basic React App
import './App.css'
// Imports the thing to pull from json file
import { useState, useEffect } from 'react';

function Welcome(){

  return <h1> Information on NCAA Basketball!</h1>; 
}


function BasketballTeam({school, name, city, state
}: {
    school: string;
    name: string;
    city: string; 
    state: string;
}) {

  // Name is maskot, School is school name, and city state 
  // This is retunrning the card
  return(
    <div className="team-card">
      <h1>School: {school}</h1>
      <h2>Mascot: {name}</h2>
      <h3>Location: {city}, {state}</h3>
    </div>
  );
}

function BasketballTeamList(){
    const [teams, setTeams] = useState<{ school: string; name: string; city: string; state: string; }[]>([]); // ✅ Type added


  // This will fetch the jason file with all the info we need 

  useEffect(() => {
    fetch('/teams.json')
      .then((response) => response.json())
      .then((data) => {
        // Extract only the necessary properties
        const filteredTeams = data.teams.map((team: any) => ({
          school: team.school,
          name: team.name,
          city: team.city,
          state: team.state,
        }));
        setTeams(filteredTeams);
      })
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);


  return (
    <>
      {teams.map((singleTeam, index) => (
        <BasketballTeam key={index} {...singleTeam} />
      ))}
    </>
  );
}


function App() {


  // Makes website to display info on NCAA Basketball 
  return (
    <>

    {/* A heading section at the top introducing the user to what the site is*/}
      
      <Welcome /> 

    {/* Calls on Function to show Card */}

      <BasketballTeamList/>
     
   

    </>
  )
}

export default App
