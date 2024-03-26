async function fetchStandingsData() {
    try {
        const response = await fetch('https://apiv3.apifootball.com/?action=get_standings&league_id=207&APIkey=c56c4d27d79a475023dae80ab7e3c23d99e354874e06a78ca7ac9b0e30d8764a');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fillStandingsTable() {
    const standingsBody = document.getElementById('standings-body');
    const data = await fetchStandingsData();

    if (data) {
       
        data.forEach(team => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${team.overall_league_position}</td>
                <td><img src="${team.team_badge}" class="team-logo"> ${team.team_name}</td>
                <td>${team.overall_league_payed}</td>
                <td>${team.overall_league_W}</td>
                <td>${team.overall_league_D}</td>
                <td>${team.overall_league_L}</td>
                <td>${team.overall_league_GF - team.overall_league_GA}</td>
                <td>${team.overall_league_PTS}</td>
            `;
            standingsBody.appendChild(row);
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    fillStandingsTable();
});