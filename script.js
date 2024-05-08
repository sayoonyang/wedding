
let quoteText = document.querySelector('#quote-text');

let handleCopyClick = document.querySelector('#copy-quote');

handleCopyClick.addEventListener('click', () => {
	let text = quoteText.textContent;
	navigator.clipboard.writeText(`${text}`);

	alert(`주소가 복사되었습니다. :D`);
});




let quoteText2 = document.querySelector('#quote-text2');

let handleCopyClick2 = document.querySelector('#copy-quote2');

handleCopyClick2.addEventListener('click', () => {
	let text = quoteText2.textContent;
	navigator.clipboard.writeText(`${text}`);

	alert(`계좌번호(${text})가 복사되었습니다.`);
});



let quoteText3 = document.querySelector('#quote-text3');

let handleCopyClick3 = document.querySelector('#copy-quote3');

handleCopyClick3.addEventListener('click', () => {
	let text = quoteText3.textContent;
	navigator.clipboard.writeText(`${text}`);

	alert(`계좌번호(${text})가 복사되었습니다.`);
});


let quoteText4 = document.querySelector('#quote-text4');

let handleCopyClick4 = document.querySelector('#copy-quote4');

handleCopyClick4.addEventListener('click', () => {
	let text = quoteText4.textContent;
	navigator.clipboard.writeText(`${text}`);

	alert(`계좌번호(${text})가 복사되었습니다.`);
});


let quoteText5 = document.querySelector('#quote-text5');

let handleCopyClick5 = document.querySelector('#copy-quote5');

handleCopyClick5.addEventListener('click', () => {
	let text = quoteText5.textContent;
	navigator.clipboard.writeText(`${text}`);

	alert(`계좌번호(${text})가 복사되었습니다.`);
});
