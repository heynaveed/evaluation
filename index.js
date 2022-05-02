// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myform)

function myform(){
    event.preventDefault();

    var formdataArr= JSON.parse(localStorage.getItem("schedule")) || [];

    var data = {
        Matchnumber: document.querySelector("#matchNum").value,
        selecteamA: document.querySelector("#teamA").value,
        selecteamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value,
    }

    formdataArr.push(data);
    console.log(formdataArr);
    localStorage.setItem("schedule",JSON.stringify(formdataArr));
}

