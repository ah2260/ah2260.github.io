// JavaScript Document

//<input type="button" value="Increase Font Size 100px" onclick="increaseFontSizeBy100px()">
//<p id="a">Font Size</p>

//<input type="button" value="Increase Font Size 1px" onclick="increaseFontSizeBy1px()">
//<p id="b">Font Size by 1 Pixel</p>

//<script> 
    function increaseFontSizeBy100px() {
        document.getElementById('a').style.fontSize = "100px";
   }
    function increaseFontSizeBy1px() {
        var id = document.getElementById('b');
        var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize++;
        document.getElementById('b').style.fontSize = currentSize.toString();
    }

//</script>