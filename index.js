function orderPtBr(lista, col) {
    let campo = col
    if (!col) {
        campo = 0
    }
    const list = lista.sort((a, b) => {
        a = a[campo].toUpperCase()
        b = b[campo].toUpperCase()
        a = a.replace(/[AÀÁÂÃÄÅ]/, 'A')
        a = a.replace(/[EÈÉÊË]/, 'E')
        a = a.replace(/[IÍ]/, 'I')
        a = a.replace(/[OÓÔÕ]/, 'O')
        a = a.replace(/[CÇ]/, 'C')
        a = a.replace(/[UÚ]/, 'U')
        b = b.replace(/[AÀÁÂÃÄÅ]/, 'A')
        b = b.replace(/[EÈÉÊË]/, 'E')
        b = b.replace(/[IÍ]/, 'I')
        b = b.replace(/[OÓÔÕ]/, 'O')
        b = b.replace(/[CÇ]/, 'C')
        b = b.replace(/[UÚ]/, 'U')
        a.replace(/[^a-z0-9]/gi, '')
        b.replace(/[^a-z0-9]/gi, '')
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0
    })
    return list
}


function formatCep(value) {
    try {
        ep = String(value).replace(/\D/g, "").slice(0, 8)
        if (ep.length !== 8) {
            return null
        }
        cep = ep.replace(/(\d{5})(\d)/, "$1-$2")
        return cep
    } catch (error) {
        console.log(error)
        return null
    }
}


function formatCpf(value) {
    try {
        cpf = String(value).replace(/\D/g, "").slice(0, 11)
        if (cpf.length !== 11) {
            return null
        }
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4")
        return cpf
    } catch (error) {
        console.log(error)
        return null
    }
}


module.exports = {
    formatCep, formatCpf, orderPtBr
}
