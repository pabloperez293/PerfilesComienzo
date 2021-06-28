let users = [
    {
        nombre: "Pablo",
        genero: "M",
        hobby: "dev",
        avatar: "fondo.jpg"
    },
    {
        nombre: "Rocio",
        genero: "F",
        hobby: "run",
        avatar: "fondo1.jpg"
    },
    {
        nombre: "Licas",
        genero: "M",
        hobby: "box",
        avatar: "fondo2.jpg"
    },
    {
        nombre: "Hernan",
        genero: "O",
        hobby: "Box",
        avatar: "fondo3.jpg"
    },
    {
        nombre: "Agus",
        genero: "F",
        hobby: "dev",
        avatar: "fondo4.jpg"
    },
];


window.addEventListener('load', function(){

    function search() {
        

            // hobby = hobbies
            let hobbyField = document.getElementById('hobby');
            let hobby = hobbyField.value ;
    
            // gender = generos
            let generoField = document.getElementById('genero');
            let selected = generoField.selectedIndex;
            let genero = generoField.options[selected].value;
            console.log(genero);
    
            let resultsHTML = '';
            let numUsers = users.length;
            
            for(var i = 0; i < numUsers; i++) {

                if(genero == 'O' || genero == users[i].genero) {
                    if(hobby == ' ' || hobby == users[i].hobby ) {
                
                        resultsHTML += '<div class="person-row">\
                                        <img src="img/' + users[i].avatar + ' ">\
                                        <div class="person-info">\
                                        <div>' + users[i].nombre + '</div>\
                                        <div>' + users[i].hobby + '</div></div>\
                                        <button>Agregar</button></div>';          
                    
                    }
                }
            }
            results.innerHTML = resultsHTML;
        };

    let results = document.getElementById('results');
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener('click',search);

});