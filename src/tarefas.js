function adicionarTarefa(lista, descricao) {
    if (!descricao || descricao.trim() === '') {
        return lista
    }

    lista.push({
        descricao,
        concluida: false
    })

    return lista
}

function concluirTarefa(lista, indice) {
    if (lista[indice]) {
        lista[indice].concluida = true
    }

    return lista
}

module.exports = {
    adicionarTarefa,
    concluirTarefa
}