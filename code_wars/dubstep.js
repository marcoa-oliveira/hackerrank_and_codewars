function songDecoder(song){
    
    if(typeof song !== 'string' || song.trim() === ''){
        return new Error('Invalid Format')
    }
    
    return song
             .split('WUB')
             .filter(char => char !== '')
             .join(' ')
  }

  console.log(songDecoder('AWUBBWUBC'))  
  console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'))  
  console.log(songDecoder('   '))  
  console.log(songDecoder(123))  

  /*
  Kata: remover todas as ocorrências de 'WUB' em uma string e converter em apenas 1 espaço (' ') separando os
  caracteres diferentes.
  */