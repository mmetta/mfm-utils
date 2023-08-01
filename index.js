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
    formatCep, formatCpf
}
