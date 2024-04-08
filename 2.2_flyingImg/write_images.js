let doc = "";
doc += "<h1>飞扬的图片</h1>\n"
let img_prefix = '<td><img class="images" src="./images/test_';
let img_postfix = '"/></td>\n';
// <td><img class="images" src="./test_X.png" id="img_X.png"/></td>
let write_rt = (index) => {
    doc += '<tr>\n';
    for (let i = index; i < index+4; ++i)
        doc += img_prefix + i + '.png"' +
            ' id="img' + i + '" style="zoom: 100%;"' + img_postfix;
    doc += '</tr>\n';
};
doc += '<table id="entireimg">';
write_rt(1); write_rt(5);
write_rt(9); write_rt(13);
doc += '</table>';
console.log(doc);
document.write(doc);
