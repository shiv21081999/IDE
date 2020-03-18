async function senderc()
{
    let resp;
    let idocc = document.getElementById('iframecpp')
    let code = editor.getValue()
    console.log(code)
    if(idocc.value)
    {
      console.log(idocc.value)
        resp = await fetch('/cpp', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            code : code,
            input : idocc.value
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
        
        resp = await fetch('/cpp', {
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
async function getOutputc() {
    
    const run = await fetch('/cpp/fetch')
    let output = await run.json()
    return output
    
}

function setupEditor()
{
  window.editor = ace.edit('editorcpp');
  editor.setTheme('ace/theme/tomorrow');
  editor.getSession().setMode('ace/mode/c_cpp');
  editor.getSession().getAnnotations()
  editor.setValue(`#include <iostream>
  using namespace std;
  int main() {
      cout<<"Hello World!";
  }`,1); //1 = moves cursor to end

  

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
let runcc = document.getElementById('runc')
runcc.onclick = () => {
  window.editor = ace.edit('editorcpp');
  let idocic = document.getElementById('iframecppo').contentWindow.document
  idocic.open();
idocic.write('');
idocic.close();
  console.log('before ac')
  let a = senderc()
  console.log('after ac')
  a.then((data) => {
      console.log('ac is done')
      console.log('before bc')
      let b = getOutputc()
      console.log('after bc')
      b.then((data1) => {
          console.log('bc is done')
          console.log(data1)
          let output = data1.toString()
          let idococ = document.getElementById('iframecppo').contentWindow.document
          idococ.open();
          console.log(output+'cpp')
        idococ.write(output.toString());
        idococ.close();
      })
  })
}
setupEditor();

  