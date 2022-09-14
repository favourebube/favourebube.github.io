var cards = document.querySelectorAll('.card');
var oneth = document.querySelector('.oneth')
var twoth = document.querySelector('.twoth')
var threeth = document.querySelector('.threeth')
var btn_toggle = document.querySelectorAll('.card button');

let array = [oneth, twoth, threeth]
btn_toggle.forEach(function (value, index){
	value.addEventListener('click', (e) =>{
		cards[index].classList.add('toggle')
	})
})

array.forEach(function (value)
{
	value.addEventListener('click', (e) =>{
		let x = e.target;
		x.parentNode.classList.remove('toggle')
	})
})
/*ANOTHER WAY OF IMPLEMENTING THE ABOVE
for(i = 0; i < 3; i++)
{
	let x = cards[i];
	btn_toggle[i].addEventListener('click', (e) =>{
		console.log(x)
	})
}*/
