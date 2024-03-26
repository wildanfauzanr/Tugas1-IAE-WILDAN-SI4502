async function fetchTopScoreData(){
    try{
        const response = await fetch('https://apiv3.apifootball.com/?action=get_topscorers&league_id=207&APIkey=c56c4d27d79a475023dae80ab7e3c23d99e354874e06a78ca7ac9b0e30d8764a');
        const data = await response.json();
        return data
    }catch(error){
        console.error('Error Fetching Data', error)
    }
}

async function fillTopScoreTable(){
    const topScoreBody = document.getElementById('topScore-body')
    const data = await fetchTopScoreData();

    if(data){
        data.forEach(player => {
            const row = document.createElement('tr')
            row.innerHTML = `
                <td>${player.player_place}</td>
                <td>${player.player_name}</td>
                <td>${player.goals}</td>
            `;

            topScoreBody.appendChild(row)
        });
    }
}

document.addEventListener('DOMContentLoaded', function(){
    fillTopScoreTable();
})