let nav = document.getElementById('navi');
let icon = document.getElementById('icon');
let para = document.getElementById('paratest');

icon.addEventListener('click',(event) =>
{
    nav.style.display = 'block';
})

window.onscroll = function() 
{
    myFunction()
};

function myFunction()
{
    if (window.scrollY > 500)
        para.innerText = 'we are going down';
    if (para.innerText == 'we are going down' && window.scrollY < 500)
        para.innerText = 'we are going up';
}