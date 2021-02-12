import '../Stylesheets/mystyle.css'
import React,{Component} from 'react'

export class CountPeople extends Component{
constructor(){
    super();
    this.state={
        entrycount:0,
        exitcount:0,
        c:0
    };

}


updateEntry(){
    this.setState((prevState,props)=>{
        return { 
            entrycount:prevState.entrycount+1
            };
    });

}
updateExit(){
    this.setState((prevState,props)=>{
        return {
             exitcount:prevState.exitcount+1
             };
    });

}
render() {
    return (
        <div>
        <h1>Counter App</h1>
      <div>
        <p>
          {this.state.entrycount}
          People Entered!!
        </p>
        <button
          type="button" class="button"
         onClick={this.updateEntry.bind(this)}
        >Login</button>
      </div>
      <div>
        
        <p>
          {this.state.exitcount}
          People Exited!!
        </p>
        <button
          type="button" class="button1"
          onClick={this.updateExit.bind(this)}
        >Exit</button>
      </div>

      </div>
    );
  }
}