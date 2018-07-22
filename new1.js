function getprofile(){
    var username = document.getElementById('input').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.status == 200 && xhttp.readyState == 4)
        {
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('loginname').innerHTML =`<div class="box3"><p class="login">User-Name :- ${user.login}</p></div>`;
            document.getElementById('email').innerHTML = `<div class="box4"><p class="email">ID :- ${user.id}</p><div>`
            document.getElementById('image').innerHTML = `<img src="${user.avatar_url}">`;
        }
        
    }
    xhttp.open('GET','https://api.github.com/users/'+ username,'true');
    xhttp.send();
}
function line(){
    document.getElementById('box22').innerHTML = `<div class="box2"></div>`;
}
