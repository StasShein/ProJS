//способ создания события:
btn.onclick = nameFunc;

btn.addEventListener('click', nameFunc);

e.stopPropagation()//событие происходит только на том элементе на который кликнули. 
//не будет лестницы иерархии срабатывания

e.stopImmediatePropogation()//останавливает события на объекте которые идут после него

