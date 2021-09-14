let btn = document.getElementById('myBtn');
let name = document.getElementById('fullName');
let email = document.getElementById('Email');
let phone = document.getElementById('Phone');
let age = document.getElementById('age')
let img = document.getElementById('img')

btn.addEventListener('click',(event) =>
{
    let par = document.createElement('p');
    document.body.appendChild(par);
    par.innerText = "Your full name is: " + name.value + " and your mail is: " + email.value + " and youe phone number is: " + phone.value;
    if(age.value >= 18)
    {
        img.style.display = 'block';
    }
    else
        alert("We'm sorry but you can't register on the site");
})