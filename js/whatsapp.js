function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#my-form');
const buttonSubmit = document.querySelector('#btnSend');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5511976934843';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#inputName').value
        let apellidos = document.querySelector('#inputSurname').value
        let tipo = document.querySelector('#inputP').value
        let cpf = document.querySelector('#inputcpf').value
        let email = document.querySelector('#inputEmail4').value
        let telefone = document.querySelector('#inputPhone').value
        let celular = document.querySelector('#inputPhone2').value
        let endereco = document.querySelector('#inputAddress').value
        let complemento = document.querySelector('#inputAddress2').value
        let cep = document.querySelector('#inputZip').value
        let estado = document.querySelector('#inputState').value
        let cidade = document.querySelector('#inputCity').value
        let marca = document.querySelector('#inputMarca').value
        let modelo = document.querySelector('#inputModel').value
        let serie = document.querySelector('#inputSerie').value
        let categoria = document.querySelector('#inputCat').value
        let acessorios = document.querySelector('#inputAcess').value
        let mensagem = document.querySelector('#inputMsg').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Dados do Cliente_*%0A*Nome*%0A' + nombre + '%0A*Sobrenome*%0A' + apellidos + '%0A*Tipo de Pessoa*%0A' + tipo + '%0A*CPF/CNPJ*%0A' + cpf + '%0A*Email/Login*%0A' + email + '%0A*Telefone*%0A' + telefone + '%0A*Celular*%0A' + celular + '%0A*Endereço*%0A' + endereco + '%0A*Complemento*%0A' + complemento + '%0A*CEP*%0A' + cep + '%0A*Estado*%0A' + estado + '%0A*Cidade*%0A' + cidade + '%0A*_Dados do Equipamento_*' + '%0A*Marca*%0A' + marca + '%0A*Modelo*%0A' + modelo + '%0A*No de Serie*%0A' + serie + '%0A*Categoria*%0A' + categoria + '%0A*Acessórios*%0A' + acessorios + '%0A*Descrição do Defeito*%0A' + mensagem + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
            formulario.reset();
        }else{
            window.open(urlDesktop + mensaje, '_blank')
            alert("Estamos te direcionando para o WhatsApp da nossa equipe...")
            formulario.reset();
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Cadastrar'
        buttonSubmit.disabled = false
    }, 3000);
});