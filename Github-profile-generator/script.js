const btn=document.querySelector('#btn');
const input=document.querySelector('#input');
const result=document.querySelector('.result');

btn.addEventListener('click',()=>{
    const userName=input.value;
    getprofile(userName);
});
function getprofile(userName){
    fetch(`https://api.github.com/users/${userName}`)
    .then(res=>res.json())
    .then(data=>displayresult(data))
    .catch(err=>console.log(err));
}
function displayresult(data)
{
    if(data.message==='Not Found')
    {
        result.innerHTML=`<h2>User not found</h2>`;
        return;
    }
    result.innerHTML=`
    <img src="${data.avatar_url}" alt="avatar" class="avatar">
    <h2>${data.name}</h2>
    <p>${data.bio}</p>
    <p>Followers: ${data.followers} | Following: ${data.following}</p>
    <p> ${data.public_repos} public repos</p>
    <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
}