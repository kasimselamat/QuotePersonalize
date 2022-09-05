const sub = document.getElementById('submit');
const result = document.getElementById('result');

sub.addEventListener('click', e => {
    const quote = document.getElementById('quote').value;
    const auth = document.getElementById('author').value;
    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
    result.innerHTML ='"' + quote + '"' + ' - ' + auth;
    event.preventDefault();
});