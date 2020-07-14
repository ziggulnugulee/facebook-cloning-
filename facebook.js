

//sticky header를 만들어보자 
// let header = document.getElementById("header")
// let sticky = header.offsetTop
// function stickyFooter(){
//     if (window.pageYOffset>sticky){
//         console.log("stcky1");
//         header.classList.add("sticky");
//     } else{
//         header.classList.remove("sticky"); //이거 원리를 모르겠음 
//         }
//     }

//버튼 구현 연습을 해보자 
let liveCast=document.getElementById("postingLivecast")

liveCast.addEventListener('click',function(live){
    alert("라이브 방송을 해봅시다!");s
})


//좋아요 구현을 해보자 
let likecounts=document.getElementsByClassName("feedLike")
console.log(likecounts)
// console.log(likeButton) feedLikebutton은 잘가져왔다. 

let likeButton=document.getElementsByClassName("feedLikebutton")
console.log(likeButton)


for(k=0;k<likecounts.length;k++){
    console.log(k)
    likeButton[k].addEventListener('click',function(){
    window['likeOf'+String(k+1)]++
    console.log(window['likeOf'+String(k+1)])
    likecounts[k].innerHTML="좋아요"+String(window['likeOf'+String(k+1)])}
)
}

//위 반복문이 제대로 안돌아교으웅ㅇ으우요으우요

//아래는 되는데 왜 위에 반복문이 안되냐!!!! k도 잘 굴러가는데!!! 왜 어째서.....
// likeButton[0].addEventListener('click',function(){
//     window['likeOf'+String(1)]++
//     console.log(window['likeOf'+String(1)])
//     likecounts[0].innerHTML="좋아요"+String(window["likeOf"+String(1)])
// })

// likeButton[1].addEventListener('click',function(){
//     window['likeOf'+String(2)]++
//     console.log(window['likeOf'+String(2)])
//     likecounts[1].innerHTML="좋아요"+String(window["likeOf"+String(2)])
// })



//댓글 버튼 눌러서 input 창 띄우기 

commentClick=document.getElementsByClassName('feedCommentbutton')
console.log(commentClick)

commentClick[0].addEventListener('click',function comments(){
    console.log('댓글 찍혔다')
    alert("댓글달기")
})



