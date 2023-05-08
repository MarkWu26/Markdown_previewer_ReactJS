import React from 'react';
import {marked} from 'marked';
import './App.css';

const initialState = `
This is a paragraph

**This is a bolded text**

> Block Quotes!

# Heading
## Heading 2

 - list item 1
 - list item 2
 - list item 3


 [Visit my Website](https://mark-wu.com)

 This is an inline \`<div></div>\`
 This is a block of code:

 \`\`\`
  let x =1;
  let y = 2;
  let z = x+y;
  \`\`\`

  ![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png)
`;

class App extends React.Component{
  state={
    text: initialState
  }

  handleChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }



  render (){
    const { text } = this.state;
    const markdown = marked(text, {breaks:true})

    return (

      <div>
       <h2 className='text-center m-4 text-white'>Convert your Markdown</h2>
       <div className="row">
         <div className="col-6">
          <h6 className="text-center text-white">Enter your markdown here:</h6>
           <textarea id="editor" className='form-control p-2' value={text} onChange={this.handleChange}/>
         </div>

         <div className="col-6" >
            <h6 className='text-center text-white'>See the result:</h6>
          <div className='preview rounded p-2' id="preview" dangerouslySetInnerHTML={{__html: markdown} }>
            
          
          </div>
        
         </div>
       </div>
      </div>
   
     );
  }
  
}

export default App;
