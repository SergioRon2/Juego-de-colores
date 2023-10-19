document.addEventListener('DOMContentLoaded', function() {
    let rojo = document.querySelector('.square1');
    let azul = document.querySelector('.square2');
    let amarillo = document.querySelector('.square3');
    let verde = document.querySelector('.square4');
    let animacion1 = document.querySelector('.boton-animacion-1')
    let restart = document.querySelector('.boton-restart')

    rojo.addEventListener('click', function() {
        rojo.style.backgroundColor = '#ff0000';
        azul.style.backgroundColor = '#ffffff';
        amarillo.style.backgroundColor = '#ffffff';
        verde.style.backgroundColor = '#ffffff';
    });
    azul.addEventListener('click', function() {
        azul.style.backgroundColor = '#0000ff';
        rojo.style.backgroundColor = '#ffffff';
        amarillo.style.backgroundColor = '#ffffff';
        verde.style.backgroundColor = '#ffffff';
    });
    amarillo.addEventListener('click', function() {
        amarillo.style.backgroundColor = '#ffff00';
        rojo.style.backgroundColor = '#ffffff';
        azul.style.backgroundColor = '#ffffff';
        verde.style.backgroundColor = '#ffffff';
    });
    verde.addEventListener('click', function() {
        verde.style.backgroundColor = '#008000';
        rojo.style.backgroundColor = '#ffffff';
        azul.style.backgroundColor = '#ffffff';
        amarillo.style.backgroundColor = '#ffffff';
    });


    // animaciones 

    animacion1.addEventListener('click', function() {
        rojo.style.backgroundColor = '#ff0000';
        azul.style.backgroundColor = 'none';
        amarillo.style.backgroundColor = 'none';
        verde.style.backgroundColor = 'none';
        
        rojo.style.backgroundColor = 'none';
        azul.style.backgroundColor = '#0000ff';
        amarillo.style.backgroundColor = 'none';
        verde.style.backgroundColor = 'none';
        
        rojo.style.backgroundColor = 'none';
        azul.style.backgroundColor = 'none';
        amarillo.style.backgroundColor = '#ffff00';
        verde.style.backgroundColor = 'none';
        
        rojo.style.backgroundColor = 'none';
        azul.style.backgroundColor = 'none';
        amarillo.style.backgroundColor = 'none';
        amarillo.style.backgroundColor = '#ffff00';        
    });


    //  restart 

    restart.addEventListener('click', function(){
        rojo.style.backgroundColor = 'none';
        azul.style.backgroundColor = 'none';
        amarillo.style.backgroundColor = 'none';
        verde.style.backgroundColor = 'none';
        
        rojo.style.backgroundColor = '#ff0000';
        azul.style.backgroundColor = '#0000ff';
        amarillo.style.backgroundColor = '#ffff00';
        verde.style.backgroundColor = '#008000';
    })
});
