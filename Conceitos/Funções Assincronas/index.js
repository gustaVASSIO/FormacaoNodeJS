// function enviarEmail(corpo,para){
//     setTimeout(()=>{
//         console.log(`
//         Para:${para}
//         ------------------------
//         Corpo:
//         ${corpo}
//         `   
//         )
//     },5*1000)
// }
// console.log('Iniciando envio')
// enviarEmail('Te amo dharinha','dhara@gmail.com')
// console.log('Seu email foi enviado')
// console.log('Tudo OK')
//Promisse
// function enviarEmail(corpo,para){
//     return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//         const deuErro = false
//         if(deuErro){
//             resolve(200)//a promise deu certo
//         }else{
//             reject(404)//a promise falhou
//         }
//    },2000)
// })
// }
// enviarEmail('Ola mundo','gustavo@gmail.com')
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))//tratando o reject da promisse

//Desafio
function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        },2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(deuErro){
                resolve({time: 6, to: "victor@udemy.com"}) // Promessa OK!
            }else{
                reject("Fila cheia") // Foi mal, eu falhei :(
            }
        },4000)
    });
}


// pegarId().then((id) => {
//     buscarEmailNoBanco(id).then((email) => { 
//         enviarEmail("Olá, como vai?",email).then(() => {
//             console.log("Email enviado, para o usuário com id: " + id)
//         }).catch(err => {
//             console.log(err);
//         })
//     })
// })

async function envio(){
    const id = await pegarId()
    const email = await  buscarEmailNoBanco(id)
    // enviarEmail('Ola, como vai?',email)
    // .then(()=>{
    //     console.log("Email enviado, para o usuário com id: " + id)
    // }).catch(err=>{
    //     console.log(err);
    // }) 
    try {
        await enviarEmail('Ola como vai',email)
        console.log('Email enviado com sucesso')
    } catch (error) {
         console.log(error);
    } 
}
envio()