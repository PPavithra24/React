import '../Stylesheets/mystyle.css'
import React,{Component} from 'react'
export class Cart extends Component{
    render(){
        return(
             <div>
             <table class="center">
             <th>Name</th>
             <th>Price</th>
        {this.props.item.map((item)=>{
                            return(
                                
                                <tr>
                                    <td> {item.itemname} </td>
                                    <td> {item.price} </td>
                                </tr>
                        
                                
                                );
                               
                         })};
        
        </table>
            </div>
            
        );
     }
}




  