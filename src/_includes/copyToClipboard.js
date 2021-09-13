const copyBtn = document.querySelector('.copy-html-button');
const pageHtml = document.querySelector('.copy-html-container');

copyBtn.addEventListener('click', (e) =>{
    navigator.clipboard.writeText(pageHtml.innerHTML);
    console.log(`copied ${pageHtml.innerHTML}`);
});