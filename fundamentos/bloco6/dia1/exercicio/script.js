window.onload = function () {
    let estadoCampo = document.getElementById('state');
    let states = ['Acre','Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo','Sergipe','Tocantins']

        for (index = 0; index <= states.length - 1; index += 1) {
            let op = document.createElement('option')
            op.innerText = states[index];
            estadoCampo.appendChild(op)

        }
}

document.getElementById('clean').addEventListener('click', reset)

function reset () {
    window.location.reload()
}

document.getElementById('form').addEventListener('submit', lock)

function lock (event) {
    event.preventDefault();
}