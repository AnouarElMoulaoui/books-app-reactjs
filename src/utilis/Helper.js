

export const  CutString = (value,lenght) => {
    if(value.lenght < lenght)
         return value;
    return value.split('')
        .map((el,indice) => indice < lenght ? el : '').join('').concat('...')
}