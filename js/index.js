/*
* @Author: lenovo
* @Date:   2018-08-29 15:27:22
* @Last Modified by:   lenovo
* @Last Modified time: 2018-08-29 16:15:10
*/
let a=document.getElementsByTagName("a");
let t=document.getElementsByClassName("tiao");
for (let i = 0; i < a.length; i++) {
	a.onmouseenter=function (){
		for (let j = 0; j < tiao.length; j++) {
			t[i].style.display="block";
		}
		
			setInterval(fn,1000);
    		setInterval(fn1,2000);
    		function fn() {
        			t.style.width="8px";
   		 	}
    		function fn1() {
      		 	 	t.style.width="2px";
    		}
    }
// 	a[i].onclick=function(){
// 		a[i].classlist.add("active");
// 	}
}