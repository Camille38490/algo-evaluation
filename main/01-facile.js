/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
function signe(nombre) {
    if (nombre > 0) {
        return "positif"
    } else if (nombre < 0) {
    } else {
        return "nul"
    }
    console.log(signe(2))
    /**
     * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
     * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
     */
    function nombresPairs(nombres) {
        let nombres = [];
        let result = [];
        for (let i = 1; i <= 25; i++) {
            nombre.push([i])
        }
        for (let i = 0; i < nombres.length; i++) {
            if (nombresPairs(nombres[i]) == true) {
                result.push(nombre[i])
            }
        }
console.log()
console.log("Exo 2")
console.log("Tableau Input:" +nombres)
console.log("Tableau nombres pairs:;"+result)

function nombresPairs(x){
    if (x%2===0){
        return true;
    }
    else{
        return false;
    }
}
