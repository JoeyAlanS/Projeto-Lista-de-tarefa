
localStorage.setItem("nome", "kathia")



const name = localStorage.getItem("name")
console.log(name);


const lastName = localStorage.getItem("lastName")
console.log("lastName")

if(!lastName){
    console.log("Sem sobrenome")
}



 localStorage.removeItem("name")




localStorage.setItem("a", 1)
localStorage.setItem("b",2)


console.log(typeof localStorage.getItem("a"));


localStorage.clear() 




const pessoa={
    nome: "kathia",
    idade: 28,
    profissao: "Programadora"
}

localStorage. setItem("pessoa", pessoa)

//conversão de JSON

localStorage.setItem("pessoa", JSON.stringify(pessoa))


const getPessoa = localStorage.getItem("pessoa")

console.log(getPessoa)


const pessoaObjeto = JSON.parse(getPessoa)
console.log( typeof pessoaObjeto)
console.log(pessoaObjeto.profissao)

const lista1 = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];
const lista2 = ["Compras", "Estudos", "Lazer"];

const listas = JSON.parse(localStorage.getItem("listas")) || [];
listas.push(lista1);
listas.push(lista2);
localStorage.setItem("listas", JSON.stringify(listas));


const listaIndex0 = JSON.parse(localStorage.getItem("listas"))[0];
console.log("Lista 1:", listaIndex0);

const listaIndex1 = JSON.parse(localStorage.getItem("listas"))[1];
console.log("Lista 2:", listaIndex1);

const todasAsListas = JSON.parse(localStorage.getItem("listas")) || [];
console.log("Todas as listas:", todasAsListas);


const listaRemoverIndex = 0;
const listasAtualizadas = JSON.parse(localStorage.getItem("listas")) || [];
if (listaRemoverIndex >= 0 && listaRemoverIndex < listasAtualizadas.length) {
  listasAtualizadas.splice(listaRemoverIndex, 1);
  localStorage.setItem("listas", JSON.stringify(listasAtualizadas));
}

localStorage.clear();