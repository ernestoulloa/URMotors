function getAuto() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('id')){
        const autoId = Number(urlParams.get('id'));
       $.get("https://my.api.mockaroo.com/auto.json?key=c50140e0")
    }
}

function mostrarAuto(auto) {
    showImage(auto.image);
    $('#marca').text(auto.brand);
    $('#modelo').text(auto.model);
    $('#anno').text(auto.year);
}

$(function () {
    getAuto();
});



// Variables de usuario - personalizar estas para cambiar la imagen cuando inicie el desplazamiento
// dirección y velocidad.


function showImage(imageUrl){
    let img = new Image();
    img.src = imageUrl || '../assets/details/car1.jpg';

    const CanvasXSize = 800;
    const CanvasYSize = 200;
    const speed = 10; //más bajo es más rápido
    const scale = 1.05;
    const y = -4.5; //desplazamiento vertical

// Programa principal

    const dx = 0.75;
    let imgW;
    let imgH;
    let x = 0;
    let clearX;
    let clearY;
    let ctx;

    img.onload = function() {
        imgW = img.width * scale;
        imgH = img.height * scale;

        if (imgW > CanvasXSize) {
            // imagen más grande que canvas
            x = CanvasXSize - imgW;
        }
        if (imgW > CanvasXSize) {
            // ancho de imagen más grande que canvas
            clearX = imgW;
        } else {
            clearX = CanvasXSize;
        }
        if (imgH > CanvasYSize) {
            // altura de la imagen más grande que canvas
            clearY = imgH;
        } else {
            clearY = CanvasYSize;
        }

        // obtener contexto de canvas
        ctx = document.getElementById('canvas').getContext('2d');

        // establecer frecuencia de actualización
        return setInterval(draw, speed);
    }

    function draw() {
        ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

        // si la imagen es <= tamaño de Canvas
        if (imgW <= CanvasXSize) {
            // reiniciar, comenzar desde el principio
            if (x > CanvasXSize) {
                x = -imgW + x;
            }
            // dibujar image1 adicional
            if (x > 0) {
                ctx.drawImage(img, -imgW + x, y, imgW, imgH);
            }
            // dibujar image2 adicional
            if (x - imgW > 0) {
                ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
            }
        }

        // la imagen es > tamaño de Canvas
        else {
            // reiniciar, comenzar desde el principio
            if (x > (CanvasXSize)) {
                x = CanvasXSize - imgW;
            }
            // dibujar image adicional
            if (x > (CanvasXSize-imgW)) {
                ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
            }
        }
        // dibujar imagen
        ctx.drawImage(img, x, y,imgW, imgH);
        // cantidad para moverse
        x += dx;
    }
}