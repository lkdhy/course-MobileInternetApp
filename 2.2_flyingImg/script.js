let img_h, img_w, zoom = 1;
$(document).ready(function() {
    let img = $('#img1');
    // let img2 = document.getElementById("img16");
    // console.log(img.attr('src'));
    // console.log(img);
    // console.log(img.id());
    img_h = img.height() * zoom;
    img_w = img.width() * zoom;
    console.log('img_h: ' + img_h);
    console.log('img_w: ' + img_w);
    for (let i = 1; i <= 16; ++i) {
        let sel = '#img' + i;
        // $(sel).click(() => { ... }); seems to be wrong!?
        $(sel).click(function() {
            // console.log($(this).attr("src"));
            $('#target').attr('src', $(this).attr('src'));
            flyToCenter($(this).offset().top, $(this).offset().left);
        });
        // $(sel).hover(() => {alert('hover');});
    }
    let flyingImg = $('#flyingImg');
    // flyingImg.click(function() {
    flyingImg.dblclick(function() {
        // flyingImg.fadeOut(1000);
        // flyingImg.toggle(4000, 'linear', () => { alert('图片消失！'); });
        flyingImg.toggle(1000, 'swing', () => { alert('图片消失！'); });
    });
});
function flyToCenter(top, left) {
    let _windowHeight = $('#entireimg').height();
    let _windowWidth = $('#entireimg').width();
    // _windowWidth = $('#img1').width()*4;
    let _offset = $('#entireimg').offset();
    console.log('off_x: ' + _offset.left, 'off_y: ' + _offset.top);
    // console.log(_offset.width, _offset.height);
    // console.log('top, left:' + top, left);
    console.log('entireimg: ' + _windowHeight, _windowWidth);
    let zoom2 = 2.4;
    let to_top = (_windowHeight - img_h * zoom2) / 2 + _offset.top;
    let to_left = (_windowWidth - img_w * zoom2) / 2 + _offset.left;
    console.log('to_top: ' + to_top, 'to_left: ' + to_left);
    let flyingImg = $('#flyingImg');
    flyingImg.css({
        'position': 'absolute',
        's-index': 1003,
        'left': left, 'top': top,
        'width': img_w, 'height':img_h,
        'display': 'flow'
    });
    flyingImg.stop(true, false);
    flyingImg.animate({
        'left': to_left + 'px',
        'top': to_top + 'px',
        'width': img_w * zoom2,
        'height': img_h * zoom2
    }, 'slow');
}
