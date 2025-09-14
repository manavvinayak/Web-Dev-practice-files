function updateDOM() {
    // console.log('Clicked')
    let name = document.getElementById('name').value;
    if (name.length === 0) { 
        document.getElementById('result').innerHTML = '?';
    }
    else {
        document.getElementById('result').innerHTML = name;
    }
}