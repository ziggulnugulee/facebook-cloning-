

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
    alert("라이브 방송을 해봅시다!");
})


//좋아요 구현을 해보자 
feedCount=document.getElementsByClassName('feed-item')
likecounts=document.getElementsByClassName("feedLikecounts")
console.log(likecounts)
// console.log(likeButton) feedLikebutton은 잘가져왔다. 

likeButton=document.getElementsByClassName("feedLikebutton")
console.log(likeButton)
likeimg=document.getElementsByClassName('feedLikeimg')

//반복문

for(let k=0; k<feedCount.length; k++){
    window['likeOf'+String(k+1)]=0
}

for(let k=0;k<feedCount.length;k++){
    console.log(k)
    likeButton[k].addEventListener('click',function(){
    window['likeOf'+String(k+1)]++
    console.log(window['likeOf'+String(k+1)])
    likecounts[k].innerHTML=String(window['likeOf'+String(k+1)]) 
    likeimg[k].style['display']='block'}
)}

//댓글 버튼 눌러서 input 창 띄우기 
 
feedCount=document.getElementsByClassName('feed-item').length
commentClick=document.getElementsByClassName('feedCommentbutton')
commentInput=document.getElementsByClassName('feedCommentshow')

console.log(commentInput)
console.log(feedCount)


//반복문 
for(let m=0; m<feedCount; m++){
commentClick[m].addEventListener('click',function makecomments(){
    // console.log('댓글 찍혔다')
    // alert("댓글달기")
    prompt('댓글을 써봐요','댓글댓글')
    commentInput[m].style['display']='flex'
    commentInput[m].style['align-items']='center'
})
}

