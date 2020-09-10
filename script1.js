function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora =22
    msg.innerHTML = ` Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // Bom Dia!
       img.src = 'ManhaP.png'
       document.body.style.background = '#75954e'
    } else if (hora >= 12 && hora < 18){
        // Boa Tarde!
        img.src = 'TardeP.png'
        document.body.style.background = '#d05607'
    } else {
        // Boa Noite!
        img.src = 'NoiteC.png'
        document.body.style.background = '#372e4d'
    }
}
