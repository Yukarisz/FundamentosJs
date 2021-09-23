function tratarErroElancar(erro) {
   //  throw new Error ('...')
   throw 10
   throw true
   throw 'mensagem'
   throw {
       nome:erro.name,
       msg:erro.mensagem,
       date:new Date
   }
}

function ImprimirNomeGritado (obj) {
   
}
try{ console.log(obj.name. toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
const obj = {name:'Roberto'} 
ImprimirNomeGritado(obj)