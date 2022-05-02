var match_data = JSON.parse(localStorage.getItem("favourites")) ;
displaydata(match_data)
function displaydata(data){
    data.forEach(function(elem,index){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td");
        td1.textContent = elem.Matchnumber
        var td2 = document.createElement("td")
        td2.textContent = elem.selecteamA;
        var td3 = document.createElement("td")
        td3.innerText = elem.selecteamB;
        var td4 = document.createElement("td");
        td4.textContent = elem.date;
        var td5 = document.createElement("td")
        td5.innerText = elem.venue;
        var td6 = document.createElement("td");
        td6.textContent = "Remove";
        td6.style.color = "Red";
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function(){
            removefav (elem,index)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function removefav(elem,index){
    match_data.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(match_data));
    window.location.reload();
}