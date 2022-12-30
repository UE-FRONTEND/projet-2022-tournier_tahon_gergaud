export const helperMethods = {
    convertChrono: function(chrono){
        let txt = ''
        txt += Math.floor(chrono/60) + 'm '
        txt += chrono%60 + 's'
        return txt;
    }
}