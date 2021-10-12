let icon = document.getElementById('icon');
let nav = document.getElementById('navi');

icon.addEventListener('click',(event) =>
{
    if(nav.style.display == "none")
        nav.style.display = 'block';
    else
        nav.style.display = "none";
})
