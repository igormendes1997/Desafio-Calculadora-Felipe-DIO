    function calcularRanking(vitorias, derrotas) {

            let saldo = vitorias - derrotas
            let nivel = "" ;


         if (vitorias >=21 && vitorias <= 50){
               nivel = " prata"
             }


          else{

             if (vitorias >= 51 && vitorias <= 80){
            nivel = " ouro"}
                     }

  
             return { saldoVitorias: saldo, nivel }

                                                     }


     let vitorias = 25
     let derrotas = 51
  
     let resultado = calcularRanking( vitorias, derrotas);

        console.log (`O Heroi tem um saldo de ${resultado.saldoVitorias} vitorias e está no de${resultado.nivel} `);

