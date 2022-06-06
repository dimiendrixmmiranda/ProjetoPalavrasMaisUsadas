const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)
    .then(arrayDeCaminhos => fn.elementosTerminadosCom(arrayDeCaminhos, '.srt'))
    .then(arrayDeCaminhos => fn.lerVariosArquivos(arrayDeCaminhos))
    .then(conteudoLido => fn.juntarConteudo(conteudoLido))
    .then(todoConteudoJunto => fn.separarPor(todoConteudoJunto, '\n'))
    .then(arrayDeLinhas => fn.removerCaracteres(arrayDeLinhas))
    .then(arrayDeLinhas => fn.removerSeVazio(arrayDeLinhas))
    .then(arrayDeLinhas => fn.tirarEspacoEmBranco(arrayDeLinhas))
    .then(arrayDeLinhas => fn.juntarConteudo(arrayDeLinhas))
    .then(string => fn.separarPor(string, ' '))
    .then(arrayDePalavras => fn.removerSeVazio(arrayDePalavras))
    .then(palavra => fn.contarPalavras(palavra))
    .then(arrayDePalavras => fn.ordenarPorQuantidade(arrayDePalavras))
    .then(array => array.forEach(element => {
        console.log(element)
    }))
    // .then(arrayDeLinhas => console.log(arrayDeLinhas))