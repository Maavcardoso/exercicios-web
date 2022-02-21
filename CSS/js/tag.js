const colors = {
    p: '#008B8B',
    div: '#00BFFF',
    span: '#00BFFF',
    section: '#9370DB',
    ul:'violet',
    ol:'Plum',
    body: 'Pink',
    form : '#20B2AA',


    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase();

    elemento.style.borderColor = colors.get(tagName);

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label');
        label.style.backgroundColor = colors.get(tagName);
        label.innerHTML = tagName;
        elemento.insertBefore(label, elemento.childNodes[0]);
    }
})