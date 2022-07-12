//よくあるご質問：アコーディオンメニューの実装
const question = document.querySelectorAll('.question');

function toggle(){
    const content = this.nextElementSibling;
    this.classList.toggle('is-active');
    content.classList.toggle('is-open');
}

for(let i =0; i < question.length; i++){
    question[i].addEventListener('click', toggle);
}

//ページTOPに戻る
const pagetop = document.getElementById('pagetop');
//ページTOPまでに自動スクロールさせるイベントを追加する
pagetop.addEventListener('click',()=>{

    //スクロールさせる条件を追加
    let scrollToOptions = {
        top: 0,  //スクロール位置にページの最上部を指定
        behaivor: 'smooth' //スムーズに移動する条件を指定 
    };

    //スクロールを実施する
    window.scrollTo(scrollToOptions);
});
