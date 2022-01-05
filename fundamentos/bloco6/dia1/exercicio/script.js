window.onload = function () {
    let estadoCampo = document.getElementById('state');

    let op = document.createElement('option')
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

        for (let index of states) {
            op;
            op.innerText = index;
            estadoCampo.appendChild(op)

        }
}