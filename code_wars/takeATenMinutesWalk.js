//verificar se um array de posições populado aleatóriamente com ['n','s','w','e'] possui 10 posições e se informa uma caminhada em circulo

let directions = ['n','']

function isValidWalk(walk){
    let ns = 0 //definição inicial das coordenadas. N = ns++; S = ns--
    let ew = 0 // E = ew++; W = ew--
    
    if(walk.length === 10){ //verifica se o array tem exatamente 10 posições (10 minutes)
        walk.forEach(dir => {
            if(dir === 'n') ns++ // atualiza as coordenadas para validar o ponto de origem 0,0 ao final
            if(dir === 's') ns--
            if(dir === 'e') ew++
            if(dir === 'w') ew--
        });
        return ns === 0 && ew === 0? true : false //faz a validação se ao final da caminhada retornou ao ponto de origem
    } else {
        return false //se não possui as 10 posições(para mais ou para menos) retorna false
    }

}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])