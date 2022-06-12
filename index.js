var alfa = "abcdefghijklmnopqrstuvwxyz".split([]);
var frase = prompt("Introduza a frase").toLowerCase();
var off = prompt("Introduza o deslocamento");
var x = parseInt(off);
var keep = [];

for (var i = 0; i < frase.length; i++)
{
 if(frase[i] != ' ')
 {
   for (var j = 0; j < alfa.length; j++)
   {
     if (frase[i] == alfa[j])
     {
       keep[i] = alfa[(j + x) % alfa.length];
       break;
     }
   }
 }
 else
 {
   keep[i] = ' ';
 }
}
let Criptografia = keep.join('').toUpperCase();

console.log(`Sua frase criptografada: ${Criptografia}`);
