import React from 'react';



function FunctionalComponent(){
    return(
        <ul clasName='lista-notnum'>
            <li>linia 1</li>
            <li>linia 2</li>
            <li>linia 3</li>
        </ul>
    )
}
 

// class ClassComponent extends React.PureComponent (){
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//          <div className='definition-list'>  
//             <dl>First header definition list
//                 <dt>first element sub list
//                     <dd>firs subelement sublist</dd>
//                 </dt>
//             </dl>
//             <dl>Second header definition list
//                 <dt>first element second sub list
//                     <dd>first subelement second sublist</dd>
//                 </dt>
//             </dl>
//           </div>  
//         );
//     }
// }

export default FunctionalComponent;