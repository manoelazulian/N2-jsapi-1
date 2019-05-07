let pegarNumero = document.getElementById('cep');

pegarNumero.addEventListener('focusout', () => {

    fetch(`https://viacep.com.br/ws/${pegarNumero.value}/json`)

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log('Sucesso!');
            console.log(data);

            document.getElementById('estado').value = data.uf;

            let cidade = document.getElementById('cidade')
            cidade.value = data.localidade;

            let bairro = document.getElementById('bairro')
            bairro.value = data.bairro;

            let endereco = document.getElementById('endereco')
            endereco.value = data.logradouro;
        })

          .catch ((erro) =>{
              console.log('erro!');
        })

})