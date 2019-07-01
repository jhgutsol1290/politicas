function format(input){
    var num = input.value.replace(/\./g,'');
    if(!isNaN(num)){
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/,'');
        input.value = num;
    }
    
    else{ 
        alert('Sólo se permiten números');
        input.value = input.value.replace(/[^\d\.]*/g,'');
    }
}