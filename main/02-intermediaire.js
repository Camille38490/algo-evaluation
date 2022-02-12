/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2) {
    t: String[3] = ["1", "2", "3"];
    t2: String[3] = ["apple", "orange", "banana"];

    tCombinaison: String[6];
    for (i: Integer = 0; i++) {
        tCombinaison[i * 2] = t[i];
        tCombinaison[i * 2 + 1] = t2[i];
    }

    /**
     * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
     * de offset.
     * 
     * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
     */
    function rotate(tableau, offset) {
        let tableau_elements = [];
        for (let i = 1; i <= 5; i++) {
            tableau_elements =.push([i])
        }
    }
    function rotate(tableu, offset) {
        let tableau_result = [];
        let n = tableau.length;
        let limite = n - offset;
        let i = 0;
        if (offset > n) {
            return ("offset invalide");
        }
        else {
            for (i = limite; i < n; i++) {
                tableau_result.at(tableu[i]);
            }
            return tableau_result;
        }
    }


    /**
     * Suite de Syracuse
     * 
     * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
     * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
     * 
     * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
     * 
     * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
     * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
     */
    function syracuse(nombre) {
        let ma_syracuse = 3;
        function syracuse(nombre) {
            let array = [nombre];
            for (let i = 0; i < 9; i++)
                if ((array[i] % 2 === 0) == true) {
                }
                else {
                    array.push((array[i] * 3) + 1)
                }
            return array
        }
