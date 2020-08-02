
class myCustomerPaint{
  constructor () {
    // Color
    this.hue = 266;
  }
  paint (ctx, geom) {
    // Establecemos el color que usaremos para definir el color de fondo del elemento
    ctx.fillStyle = 'hsl(' + this.hue + ', 100%, 50%)';

    // Sentencia que define el inicio de pintado
    ctx.beginPath();

    // Establecemos el eje x e y donde iniciaremos el trazo
    ctx.moveTo(0, 0);

    ctx.lineTo(geom.width, 0);
    ctx.lineTo(geom.width - 20, geom.height);
    ctx.lineTo(0, geom.height);
    ctx.fill();

    // Establecemos el comportamiento de las capas
    ctx.globalCompositeOperation = 'source-atop';

    // Aplicamos el color de la nueva capa un grado de 0.35 de opacidad
    ctx.fillStyle = 'rgba(0,0,0,.35)';
    
    // Iniciaremos un nuevo trazo donde se visualizará el efecto de sombreado 
    // estableciendo la posicion y ancho
    ctx.beginPath();
    ctx.moveTo(0, geom.height);
    ctx.lineTo(geom.width, geom.height - 12);
    ctx.lineTo(geom.width, geom.height);
    ctx.fill();
  }
}

registerPaint('shape-bg', myCustomerPaint);




