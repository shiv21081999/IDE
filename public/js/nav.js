let language = document.getElementById('navbarDropdown')
let cpp = document.getElementById('cpp')
let java = document.getElementById('java')
let python = document.getElementById('python')
let containercpp = document.getElementById('containercpp')
let containerpy = document.getElementById('containerpy')
let containerjava = document.getElementById('containerjava')
let consolebtn = document.getElementById('consolebtn')
let consolecpp = document.getElementById('consolecpp')
let consolejava = document.getElementById('consolejava')
let consolepy = document.getElementById('consolepy')
let runc = document.getElementById('runc')
let runj = document.getElementById('runj')
let runp = document.getElementById('runp')

cpp.onclick = () => {
    containerjava.className = 'notchoosen'
    containerpy.className = 'notchoosen'
    containercpp.className = ''
    runj.className = 'btn btn-success notchoosen'
    runp.className = 'btn btn-success notchoosen'
    runc.className ='btn btn-success'
    language.innerText = 'C++'
}
java.onclick = () => {
    containercpp.className = 'notchoosen'
    containerpy.className = 'notchoosen'
    containerjava.className = ''
    runc.className = 'btn btn-success notchoosen'
    runp.className = 'btn btn-success notchoosen'
    runj.className ='btn btn-success'
    language.innerText = 'Java'
}
python.onclick = () => {
    containerjava.className = 'notchoosen'
    containercpp.className = 'notchoosen'
    containerpy.className = ''
    runj.className = 'btn btn-success notchoosen'
    runc.className = 'btn btn-success notchoosen'
    runp.className ='btn btn-success'
    language.innerText = 'Python'
}
consolebtn.onclick = () => {
    if(consolecpp.className == 'console')
    {
        consolecpp.className = 'console notchoosen'
        consolejava.className = 'console notchoosen'
        consolepy.className = 'console notchoosen'
    }
    else{
        consolecpp.className = 'console'
        consolejava.className = 'console'
        consolepy.className = 'console'
    }
}