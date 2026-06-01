// desafio 01

/*
 Crie um objeto chamado pessoa contendo:
 - Nome
 -Idade
 -Cidade

 Após a criação;
 -Altere a idade
 -Adicione uma profissão
 - Remova a cidade

 No fim, exiba o objeto final.

 */
const pessoa = {
    nome: "Eliane",
    idade: 22,
    cidade: "Capanema",
}
console.log(pessoa);

pessoa.idade = 18;
pessoa.profisão = "Radiologista"

console.log(`Nome: ${pessoa.nome}, 
Idade: ${pessoa.idade}, 
Profisão: ${pessoa.profisão}`);

delete pessoa.cidade;

console.log(pessoa);