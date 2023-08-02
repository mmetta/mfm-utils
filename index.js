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


function splitObj(obj, sep) {

    let dia = obj.getDate().toString().padStart(2, '0')
    let mes = (obj.getMonth() + 1).toString().padStart(2, '0')
    let ano = obj.getFullYear()
    let hor = obj.getHours().toString().padStart(2, '0')
    let min = obj.getMinutes().toString().padStart(2, '0')
    let seg = obj.getSeconds().toString().padStart(2, '0')

    let format = {}

    if (sep === "i") {
        format = [
            `${ano}-${mes}-${dia}`,
            `${ano}-${mes}-${dia} ${hor}:${min}`,
            `${ano}-${mes}-${dia} ${hor}:${min}:${seg}`
        ]
    } else {
        format = [
            `${dia}${sep}${mes}${sep}${ano}`,
            `${dia}${sep}${mes}${sep}${ano} ${hor}:${min}`,
            `${dia}${sep}${mes}${sep}${ano} ${hor}:${min}:${seg}`
        ]
    }
    return format
}


function fDateSlash() {
    let date = new Date()
    const format = splitObj(date, "/")
    return format
}


function fDateDash() {
    let date = new Date()
    const format = splitObj(date, "-")
    return format
}


function fDateDashi() {
    let date = new Date()
    const format = splitObj(date, "i")
    return format
}


module.exports = {
    formatCep, formatCpf, orderPtBr, fDateSlash, fDateDash, fDateDashi
}
