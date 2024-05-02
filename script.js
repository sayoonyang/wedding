
let quoteText = document.querySelector('#quote-text');

let handleCopyClick = document.querySelector('#copy-quote');

handleCopyClick.addEventListener('click', () => {
	let text = quoteText.textContent;
	navigator.clipboard.writeText(`${text}`);

	alert(`주소가 복사되었습니다. :D`);
});
