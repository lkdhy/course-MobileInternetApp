const pic = document.getElementById("pic");
let k = 10;
// Option 1: x = x0 + k(t - t0)
// Option 2: ...
// naturally, y grows as x does with the ratio y/x inletiant
let func_used = 0;
let enlarge_interval_id;
let enlarge_funcs = [
    (x) => x + k
];
const x0 = pic.width, y0 = pic.height;
const xlim = document.getElementById("pic_area").clientWidth - 20;

console.log(x0, y0);
console.log(pic.height, pic.width);

// console.log(document.getElementById("pic_area").clientHeight,
//             document.getElementById("pic_area").clientWidth);
function enlarging() {
    let x = pic.width;
    console.log(x);
    enlarge_interval_id = setInterval(
        () => {
            x = enlarge_funcs[func_used](x);
            if (x < xlim) pic.width = x;
            console.log("current width: " + x);
            },
       100
    );
    // alert('finished!');
}
function resetPic() {
    clearInterval(enlarge_interval_id);
    pic.width = x0;
}

function onclickEnlarge() {
    enlarging();
}
function onclickReset() {
    resetPic();
}