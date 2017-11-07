$('#processList').submit(function(e) {
    e.preventDefault();
    list = $('#list').val();
    if (list != '') {
        processList(list);
    } else {
        $('#list').val('Debe de ingresar un listado de numeros').focus();
    }
});

function operator(numo) {
    num = numo * 1;

    // Comprobación inicial
    if(num < 30000000 || num >= 60000000) {
        return 'No reconocido'
    }

    if( // Comcel
        ((30000000 <= num) && (num <= 33599999)) ||
        ((40000000 <= num) && (num <= 40999999)) ||
        ((44760000 <= num) && (num <= 46999999)) ||
        ((47730000 <= num) && (num <= 48199999)) ||
        ((48220000 <= num) && (num <= 50099999)) ||
        ((50300000 <= num) && (num <= 50699999)) ||
        ((51500000 <= num) && (num <= 52099999)) ||
        ((53000000 <= num) && (num <= 53099999)) ||
        ((53140000 <= num) && (num <= 53899999)) ||
        ((55200000 <= num) && (num <= 55299999)) ||
        ((55500000 <= num) && (num <= 55539999)) ||
        ((55800000 <= num) && (num <= 55819999)) ||
        ((57000000 <= num) && (num <= 57099999)) ||
        ((57190000 <= num) && (num <= 57899999)) ||
        ((58000000 <= num) && (num <= 58099999)) ||
        ((58190000 <= num) && (num <= 58199999)) ||
        ((58800000 <= num) && (num <= 59099999)) ||
        ((59180000 <= num) && (num <= 59199999)) ||
        ((59900000 <= num) && (num <= 59999999)) 
    ) {
        return 'Tigo';
    } else if ( // Telefónica
        ((34000000 <= num) && (num <= 34699999)) ||
        ((43000000 <= num) && (num <= 44759999)) ||
        ((50200000 <= num) && (num <= 50299999)) ||
        ((50700000 <= num) && (num <= 51099999)) ||
        ((51400000 <= num) && (num <= 51499999)) ||
        ((52100000 <= num) && (num <= 52999999)) ||
        ((53120000 <= num) && (num <= 53139999)) ||
        ((53900000 <= num) && (num <= 54099999)) ||
        ((55000000 <= num) && (num <= 55099999)) ||
        ((55180000 <= num) && (num <= 55199999)) ||
        ((55400000 <= num) && (num <= 55429999)) ||
        ((55450000 <= num) && (num <= 55499999)) ||
        ((56000000 <= num) && (num <= 56099999)) ||
        ((56400000 <= num) && (num <= 56899999)) ||
        ((57900000 <= num) && (num <= 57999999)) ||
        ((59150000 <= num) && (num <= 59179999)) 
    ) {
        return 'Movistar'
    } else if ( // Claro
         ((41000000 <= num) && (num <= 42999999)) ||
         ((47000000 <= num) && (num <= 47729999)) ||
         ((50100000 <= num) && (num <= 50199999)) ||
         ((51100000 <= num) && (num <= 51399999)) ||
         ((53100000 <= num) && (num <= 53119999)) ||
         ((54100000 <= num) && (num <= 54999999)) ||
         ((55100000 <= num) && (num <= 55179999)) ||
         ((55300000 <= num) && (num <= 55399999)) ||
         ((55430000 <= num) && (num <= 55449999)) ||
         ((55540000 <= num) && (num <= 55799999)) ||
         ((55820000 <= num) && (num <= 55999999)) ||
         ((56100000 <= num) && (num <= 56399999)) ||
         ((56900000 <= num) && (num <= 56999999)) ||
         ((57100000 <= num) && (num <= 57189999)) ||
         ((58100000 <= num) && (num <= 58189999)) ||
         ((58200000 <= num) && (num <= 58799999)) ||
         ((59100000 <= num) && (num <= 59149999)) ||
         ((59200000 <= num) && (num <= 59899999))
    ) {
        return 'Claro';
    } else {
        return 'Desconocido';
    }
}

function processList(dataList) {
    var report = '<table class="table">';
    dataList = dataList.split("\n");
    report += '<tr><th>Número</th><th>Operador</th></tr>';
    for (var i=0; i<dataList.length; i++) {
        if (dataList[i] == 0) {
            continue;
        }
        report += '<tr>';
        report += '<td>'+ dataList[i] + '</td>';
        report += '<td>'+ operator(dataList[i]) +'</td>';
        report += '</tr>';
    }
    report += '</table>';
    $('#table-result').html(report);
}