// video tutorial: https://www.youtube.com/watch?v=VM4e37DaskU
import axios from "axios" //vai na url e pega a resposta e me traz. 

const url = "https://api.github.com/user/AnaChristina"


const userTeste = {         //essa variavel recebe todos os parametros que vai no axios.post(url, {}), é so pra diminuir a poluição do code, pode fazer lá a vontade n tem problema.
    name: "Ana",
    avatar: "http://lorempixel.com.br/500/400",
    city: "Sao Paulo"
}
const userUpdated = {         //essa variavel recebe todos os parametros que vai no axios.post(url, {}), é so pra diminuir a poluição do code, pode fazer lá a vontade n tem problema.
    name: "Maria",
    avatar: "http://lorempixel.com.br/500/400",
    city: "Minas Gerais"
}     


//pegar os dados
function getUser() {    //get user pq to trabalhando com usuarios. 
    axios.get(url)  //funcao get que pertence aos axios
    .then(response =>{      //se der td certo entra no .then; ele recebe entao uma response
        const data = response.data
        idDiv.textContent = Json.stringfy(data) //Json.string ele pega o objeto de 'data' e retorna o objeto em texto;
    })
    .catch(error => console.log(error)) //deolve um msg de erro caso de algo errado. 
}
getUser()


//para enviar dados 
function addNewUser(){
    axios.post(url, userTeste)
    .then(response => {
        console.log(response.data)      //aparece na aba console do inspecionar elemento
    })
    .cath(error => console.log(error))
}
//addNewUser()


//atualizar os dados
function updateUser(){
    axios.put(url, userUpdated)  //ver como apontar o ID do usuario que desejo alterar
    .then(response =>{
        alert(JSON.stringify(response.data))    //nao preciso ir no console pq ele ja me da uma manesgem de alert
    })
    .catch(error => console.log(error))
}
//updateUser()


//para deletar
function deleteUser(){
    axios.delete(url) //falta passar o ID 
    .then(responde => {
        alert(JSON.stringify(responde.data))
    })
    .cath(error => console.log(error))
}
//deleteUser()


function umUsuario(){
    axios.get(`{url}/IdUsuario`)
    .then(response =>{
        const data = response.data 
        IdDIV.textContent = JSON.stringify(data)    //mudando conteudo do elemento que tem esse IdDiv
    })
}
//umUsuario()


