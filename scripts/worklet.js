class myCustomerPaint{
  static get inputProperties() {
    return ['--my-color']
  }
  paint (ctx, size, properties) {
    // Recogemos el valor de la custom property
    let myColor = properties.get('--my-color').toString(); 
    // Establecemos el color que usaremos para definir el color de fondo del elemento
    ctx.fillStyle = myColor;

    // Sentencia que define el inicio de pintado
    ctx.beginPath();

    // Establecemos el eje x e y donde iniciaremos el trazo
    ctx.moveTo(0, 0);

    ctx.lineTo(size.width, 0);
    ctx.lineTo(size.width - 20, size.height);
    ctx.lineTo(0, size.height);
    ctx.fill();

    // Establecemos el comportamiento de las capas
    ctx.globalCompositeOperation = 'source-atop';

    // Aplicamos el color de la nueva capa un grado de 0.35 de opacidad
    ctx.fillStyle = 'rgba(0,0,0,.35)';
    
    // Iniciaremos un nuevo trazo donde se visualizará el efecto de sombreado 
    // estableciendo la posicion y ancho
    ctx.beginPath();
    ctx.moveTo(0, size.height);
    ctx.lineTo(size.width, size.height - 12);
    ctx.lineTo(size.width, size.height);
    ctx.fill();
  }
}

registerPaint('shape-bg', myCustomerPaint);




