async function senderj()
{
    let resp;
    let idocj = document.getElementById('iframejava')
    let code = editor.getValue()
    console.log(code)
    if(idocj.value)
    {
        resp = await fetch('/java', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            code : code,
            input : idocj.value
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
        
        resp = await fetch('/java', {
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
async function getOutputj() {
    
    const run = await fetch('/java/fetch')
    let output = await run.json()
    return output
    
}

function setupEditor()
{
  window.editor = ace.edit('editorjava');
  editor.setTheme('ace/theme/tomorrow');
  editor.getSession().setMode('ace/mode/java');
  editor.getSession().getAnnotations()
  editor.setValue(`public class Solution {

	public static void main(String[] args) {
		System.out.println("Hello World!");

	}

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
let runjj = document.getElementById('runj')
runjj.onclick = () => {
  window.editor = ace.edit('editorjava');
  let idocij = document.getElementById('iframejavao').contentWindow.document
  idocij.open();
idocij.write('');
idocij.close();
  console.log('before aj')
  let a = senderj()
  console.log('after aj')
  a.then((data) => {
      console.log('aj is done')
      console.log('before bj')
      let b = getOutputj()
      console.log('after bj')
      b.then((data1) => {
          console.log('bj is done')
          console.log(data1)
          let output = data1.toString()
          let idocoj = document.getElementById('iframejavao').contentWindow.document
          idocoj.open();
          console.log(output+'java')
        idocoj.write(output.toString());
        idocoj.close();
      })
  })
}
setupEditor();

  