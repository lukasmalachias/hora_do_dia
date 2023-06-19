function carregar(){
    var msg = window.document.getElementById('msg') //VAR.MSG RECEBEU(=) O ID MSG
    var img = window.document.getElementById('imagem') //VAR.IMG RECEBEU(=) O ID IMAGEM
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(2, 240, 248)'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(240, 195, 49)'
    }else {
        // BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(58, 58, 58)'

    }
}