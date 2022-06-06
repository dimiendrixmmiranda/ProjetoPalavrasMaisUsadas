const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
                .map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }
    })
}

function elementosTerminadosCom(arrayDeEnderecos, extensao) {
    return arrayDeEnderecos.filter(endereco => endereco.endsWith(extensao))
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())
        } catch (error) {
            reject(error)
        }
    })
}

function lerVariosArquivos(arrayDeEnderecosDeArquivos){
    return Promise.all(arrayDeEnderecosDeArquivos.map(arquivo => lerArquivo(arquivo)))
}

function juntarConteudo(arrayDeStrings) {
    return arrayDeStrings.join(' ')
}

function separarPor(arrayDeString, separador){
    return arrayDeString.split(separador)
}

function removerCaracteres(arrayDeLinhas){
    return arrayDeLinhas.map(linha => linha.split(/\d|\r|﻿|\:|,|--\>|\<\/?i\>|\.|\?|\-|!|_|%|"|♪|\<font.+>.+<\/font>/gi).join(''))
}

function removerSeVazio(arrayDeLinhas){
    return arrayDeLinhas.filter(linha => linha.trim())
}

function tirarEspacoEmBranco(arrayDeLinhas){
    return arrayDeLinhas.map(linha => linha.trim())
}

function contarPalavras(arrayDePalavras){
    return Object.values(
        arrayDePalavras.reduce((accObjeto, vaPalavra) => {
            const palavra = vaPalavra.toLowerCase()
            const qtde = accObjeto[palavra] ? accObjeto[palavra].qtde + 1 : 1
            accObjeto[palavra] = {word: palavra, qtde}
            return accObjeto
        }, {})
    )
}

function ordenarPorQuantidade(arrayDePalavras){
    return arrayDePalavras.sort((a,b) => {
        if(a.qtde > b.qtde){
            return -1
        }else{
            return true
        }
    })
}

function apresentar(arrayDeObjetos){
    return arrayDeObjetos.map(objeto => console.log(`${objeto.word} ==> ${objeto.qtde}`))
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerVariosArquivos,
    juntarConteudo,
    separarPor,
    removerSeVazio,
    tirarEspacoEmBranco,
    removerCaracteres,
    ordenarPorQuantidade,
    contarPalavras,
    apresentar
}