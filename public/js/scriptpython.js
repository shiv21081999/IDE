async function sender()
{
    let resp;
    let idoc = document.getElementById('iframepy')
    let code = editor.getValue()
    console.log(code)
    if(idoc.value)
    {
        
        resp = await fetch('/python', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            code : code,
            input : idoc.value
            })
        }).then()
    const data = await resp.json()
    if(resp.status == 400)
    {
        window.alert("CheckCode")
    }
    return data
    }
    else{
        
        resp = await fetch('/python', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: code,
                })
            })
        const data = await resp.json()
        if(resp.status == 400)
        {
            window.alert("CheckCode")
        }
        return data
    }
}
async function getOutput() {
    
    const run = await fetch('/python/fetch')
    let output = await run.json()
    return output
    
}
function setupEditor()
{
  window.editor = ace.edit('editorpy');
  editor.setTheme('ace/theme/tomorrow');
  editor.getSession().setMode('ace/mode/python');
  editor.getSession().getAnnotations()
  editor.setValue(`print('Hello World!')`,1); //1 = moves cursor to end


  editor.focus();
  
  
  editor.setOptions({
    fontSize: "12pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: true, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}
let runpp = document.getElementById('runp')
runpp.onclick = () => {
    window.editor = ace.edit('editorpy');
    let idoci = document.getElementById('iframepyo').contentWindow.document
    idoci.open();
	idoci.write('');
	idoci.close();
    console.log('before a')
    let a = sender()
    console.log('after a')
    a.then((data) => {
        console.log('a is done')
        console.log('before b')
        let b = getOutput()
        console.log('after b')
        b.then((data1) => {
            console.log('b is done')
            console.log(data1)
            let output = data1.toString()
            let idoco = document.getElementById('iframepyo').contentWindow.document
            idoco.open();
            console.log(output)
	        idoco.write(output.toString());
	        idoco.close();
        })
    })
    
    
    
}
setupEditor();

  