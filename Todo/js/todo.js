//获取dom
var doSome = document.querySelector('#add-list');
var addBtn = document.querySelector('#add-btn');
var clearBtn = document.querySelector('#clear-btn');
var counts = document.querySelectorAll('.count');
var toDoList = document.querySelector('#todo-list');
var doneList = document.querySelector('#done-list');
var toDoNum= document.querySelector('.todo-num');
var doneNum= document.querySelector('.done-num');
var listBox = document.querySelector('#exhibit');
//生成todo列表

function addList() {
    var thing = doSome.value; // 获取输入值
    var index = parseInt(toDoNum.textContent);
    //阻止空输入
    if(thing === ''){
        return;
    }
    var node = document.createElement('li'); //创建li标签 
    //添加something
    node.innerHTML = `${thing}<span id = "del" class = "del thing-btn">delete</span><span id = "done" class = "thing-btn">done</span>`;
    toDoList.insertBefore(node, toDoList.firstChild);
    //计数器
    index++;
    toDoNum.textContent = index;
}

//del something
function delThing(e) {
    var delNode = e.parentNode; //找到要删除节点
    delNode.parentNode.removeChild(delNode);
}

//计数器

//something转移到done
function toDone(e) {
    var delNode = e.parentNode; //找到要删除节点
    var cloneNode = delNode.cloneNode(true); //复制thing
    delNode.parentNode.removeChild(delNode); //删除thing
    doneList.insertBefore(cloneNode, doneList.firstChild);
    //done计数器
    var doneIndex = parseInt(doneNum.textContent);
    doneIndex++;
    doneNum.textContent = doneIndex;
    //todo计数器
    var toDoIndex = parseInt(toDoNum.textContent);
    toDoIndex--;
    toDoNum.textContent = toDoIndex;
}

//点击事件
addBtn.onclick = addList; //add something
//delete something
listBox.onclick = function(e) {
    var e = e.target;  
     //删除something
    if(e.id === 'del') {
        if(e.parentNode.parentNode.id === 'todo-list'){
            var toDoIndex = parseInt(toDoNum.textContent);
            toDoIndex--;
            toDoNum.textContent = toDoIndex;
        }
        if(e.parentNode.parentNode.id === 'done-list'){
            var doneIndex = parseInt(doneNum.textContent);
            doneIndex--;
            doneNum.textContent = doneIndex;
        }
        delThing(e);        
    }
}
//done something
toDoList.onclick = function(e) {
    var e = e.target;
    if(e.id === 'done') {
        toDone(e);

    }
}