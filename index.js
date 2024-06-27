let user = document.getElementById("userid")

async function fetchUser(userid){
    let response = await fetch(`https://api.github.com/users/${userid}`)
    let result = await response.json();
    displayUser(result)
   
   
}    


document.getElementById("btn").addEventListener('click', ()=>{
   let userid = user.value;
   document.getElementById('userprofile').innerHTML = `<span class = "loader"> </span> `
   document.getElementById('userprofile').classList.add('seconddiv')
   document.getElementById('userprofile').classList.remove('seconddivhidden')
   fetchUser(userid)

})

function displayUser({
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url
}){


    if(!avatar_url){
        document.getElementById('userprofile').innerHTML= `<h1> User not Found</h1>`
        return
    }
    if(!bio){
        bio=' '
    }
    document.getElementById('userprofile').innerHTML=`
      <div class="userInfo">
                <img class="userimg"   src=${avatar_url} alt="" />
                <div class="userdetails" >
                    <p class="username">${name}</p>
                    <p class="userbio">${bio}</p>
                </div>
            </div>
            <div class="userfollow">
             <div class="follower">
                    <div class="sameclass">
                        <p>Follower</p>
                        <p>${followers}</p>
                    </div>
                    <div class="sameclass">
                        <p>Following </p>
                        <p>${following}</p>
                    </div>
                    <div class="sameclass">
                        <p>Repo</p>
                        <p>${public_repos}</p>
                    </div>
                </div>
                <a href=${html_url} target='blank' class="viewprofile">
                <div >
                     View Profile</div>
                  </a>
            </div>`

}

