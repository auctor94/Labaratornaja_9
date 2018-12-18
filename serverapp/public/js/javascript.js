var globalMassis = [];

function createTable(data) {
    for (let i = 0; i < 100; i++)
    {
   $("#myTable td").eq(i).html("<b>" + data[i] + "</b>"); 
   }
}
function createTable2(data) {
globalMassis = data;
    for (let i = 0; i < 100; i++)
    {
   $("#myTable2 td").eq(i).html("<b>" + data[i] + "</b>"); 
   }
}

$(document).ready(function(){
    $('#sel1').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        var number = new Nmber();
        var record = new Number();
        if ($("#myTable2 td").eq(0).html() == '') {
            alert("Нечего менять!");
        }
        else {
        if (valueSelected == 1)
        {
            for (let i = 0; i < 100; i++)
    {
   number = parseFloat(globalMassis[i]);
   record = number.toFixed(1);
$("#myTable2 td").eq(i).html("<b>" + record + "</b>"); 
   }
        }

        else if (valueSelected == 2)
        {
            for (let i = 0; i < 100; i++)
            {
           number = parseFloat(globalMassis[i]);
           record = number.toFixed(2);
        $("#myTable2 td").eq(i).html("<b>" + record + "</b>"); 
           }
        }
        else if (valueSelected == 3)
        {
            for (let i = 0; i < 100; i++)
            {
           number = parseFloat(globalMassis[i]);
           console.log(number);
           record = number.toFixed(3);
           console.log(record);
        $("#myTable2 td").eq(i).html("<b>" + record + "</b>"); 
           }
        }
        else if (valueSelected == 4)
        {
            for (let i = 0; i < 100; i++)
            {
           number = parseFloat(globalMassis[i]);
           record = number.toFixed(4);
        $("#myTable2 td").eq(i).html("<b>" + record + "</b>"); 
           }
        }
        else if (valueSelected == 5)
        {
            for (let i = 0; i < 100; i++)
            {
           number = parseFloat(globalMassis[i]);
           record = number.toFixed(5);
        $("#myTable2 td").eq(i).html("<b>" + record + "</b>"); 
           }
        }
    }
    });
    });
            
   