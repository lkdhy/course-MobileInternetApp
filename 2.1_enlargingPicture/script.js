const pic = document.getElementById("pic");
const enlarge_btn = document.getElementById("enlarge_btn");
let k = 10;
// Option 1: x = x0 + k(t - t0)
// Option 2: ...?
// naturally, y grows as x does with the ratio y/x invariant
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
    document.getElementById("enlarge_btn").innerText =
        "The picture is enlarging until full..."
    let x = pic.width;
    console.log(x);
    enlarge_interval_id = setInterval(
        () => {
            if (x < xlim) {
                x = enlarge_funcs[func_used](x);
                pic.width = x;
            }
            console.log("current width: " + x);
            },
       100
    );
    // alert('finished!');
}
function resetPic() {
    clearInterval(enlarge_interval_id);
    pic.width = x0;
    enlarge_btn.innerText = btn_text_ori;
    enlarge_btn.disabled = "";
}

function onclickEnlarge() {
    document.getElementById("p2").style.color =
        "#2932F5";
    enlarging();
    enlarge_btn.disabled = "disabled";
}
function onclickReset() {
    resetPic();
    document.getElementById("p2").style.color =
        p2_color_ori;
}

let p2_color_ori = document.getElementById("p2").style.color;
let btn_text_ori = document.getElementById("enlarge_btn").innerText;