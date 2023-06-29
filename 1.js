// 1. Considere o seguinte array:
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
    1290.00, 15000.00];
    // a. Imprima no console o índice do primeiro salário maior que
    // 7.500 utilizando o findIndex
    console.log("exercicio 1-A")
    let maiorque = salarios.findIndex((salario) => salario > 7500);
    console.log(maiorque)
    console.log("..........................")


    //     b. Crie uma nova lista filtrada com os salários que são maior que
    // 8.000 utilizando o filter]
    console.log("exercicio 1-B")
    let salariofiltrado = salarios.filter((banana) => banana > 8000);
    console.log(salariofiltrado)
    console.log("..........................")

//     2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:
console.log("exercicio 2")
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];

// mas James tinha isto:
 const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:

// a. Remova "Preto"
rainbow.splice(2,1);

// b. Adicione "Amarelo" e "Verde"
rainbow.splice(2,0, "Amarelo","Verde") 
// c. Adicione "Roxo"
rainbow.splice(5,0, "Roxo")

console.log(rainbow)
console.log("..........................")

// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000
console.log("exercicio 3")
let cadastros = [];
      let empregadas = [];
      let desemp = [];
      let teste = "";
      let teste2 = "";

      while (true) {
        pessoa = {};
        pessoa.emprego = false;
        pessoa.nome = prompt("Qual o nome da pessoa?");
        pessoa.idade = parseInt(prompt("Qual a idade? "));
        teste = prompt("está trabalhando? (S/N)").toUpperCase();
        if (teste == "S") {
          pessoa.emprego = true;
          pessoa.salario = parseFloat(prompt("qual o salário?"));
        } else {
          pessoa.emprego = false;
        }
        cadastros.push(pessoa);
        teste2 = prompt("deseja continuar o cadastro? (S/N)").toUpperCase();
        if (teste2 == "N") {
          for (const pessoa of cadastros) {
            if (pessoa.emprego == true) {
              empregadas.push(pessoa);
              if (pessoa.salario >= 2500) {
                pessoa.desc = "salário alto";
              } else {
                pessoa.desc = "salario baixo";
              }
            } else {
              desemp.push(pessoa);
            }
          }
          break;
        }
      }

      console.log("todos: ", cadastros);
      console.log("empregadas: ", empregadas);
      console.log("desempregadas: ", desemp);
