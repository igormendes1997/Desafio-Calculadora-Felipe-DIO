function calcularRanking(vitorias, derrotas) {
         let saldo = vitorias - derrotas
         let nivel = "" ;

         if (vitorias >=21 && vitorias <= 50) {
            nivel = " prata"
            }


           else {

               if (vitorias >= 51 && vitorias <= 80) {
                nivel = " ouro"
            }

           }

          return { saldoVitorias: saldo, nivel: nivel };

}

let vitorias = 40
let derrotas = 50
