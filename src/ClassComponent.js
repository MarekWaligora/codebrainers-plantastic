import React from 'react';


class ClassComponent extends React.PureComponent{
    //obowiazkowo musi byc konstruktor
    constructor(props){
        super(props);
    }
//obowiazkowo render bo tu jest to co bedzie wstrzykiwane do App.js
    render(){
        return(
         <div className='definition-list'>  
            <dl>First header definition list
                <dt>first element sub list</dt>
                    <dd>first subelement sublist</dd>
                
                <dt>second element second sub list</dt>
                    <dd>second subelement second sublist</dd>
                
                <dt className='no-visibility'>third element second sub list</dt>
                    <dd className='no-visibility'>third subelement second sublist</dd>
                
            </dl> 
          </div>  
        );
    }
}

export default ClassComponent;