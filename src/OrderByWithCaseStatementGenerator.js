function generate(){
    var inputValue = document.getElementById('input_text').value;
    var selectedDataType = document.getElementById('data_type_option').value;
    var outputText = document.getElementById('output_text');
    outputText.value = convertToStatement(inputValue,selectedDataType);
}
function convertToStatement(textToConvert,dataType){

    var arr = textToConvert.split(/\r\n|\r|\n/);
    var first_row = arr[0]
    var arr2 = new Array();
    for(i=1;i < arr.length; i++){
        if (arr[i].replace(/\r?\n/g,"").length ==0) break;
        if (dataType==='char') {
            whenValue = "'" + arr[i] + "'";
        }else{
            whenValue = arr[i];
        }
        arr2[i] = 'CASE ' + first_row  + ' WHEN ' + whenValue  + ' THEN 1 ELSE 2 END,'
    }
    var convertedText = 'ORDER BY'
    convertedText += arr2.join('\n');
    convertedText += first_row

    return convertedText;
