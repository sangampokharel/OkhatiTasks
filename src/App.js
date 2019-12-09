import React from 'react';
import Dialog from './components/Dialog';
import './App.css';
class App extends React.Component{
  container = React.createRef();
  state={

      divItems:[],
      items:[
        {id:1, title:'Default Text One'},
        {id:2, title:'Longer Default Text One'},
        {id:3, title:'Very very long Default Text One'},
      ],
      close:false,
      dialog:false,
      tick:false,
      inputText:''
  }
 

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}

handleClickOutside = event => {
  if (this.container.current && !this.container.current.contains(event.target)) {
    this.setState({
      dialog: false,
    });
  }
};

  handleDropDown=()=>{
    this.setState({
      dialog:!this.state.dialog,
      close:true
    })
  }

  handleSingleListClicked=(item)=>{
    const divItems=[...this.state.divItems];
    const items=[...this.state.items];
    const index=items.indexOf(item);
    divItems.push(items[index]);
    this.setState({
      divItems
    })

    if (index !== -1) {
      items.splice(index, 1);
      this.setState({items});
    }

  }

  handleDelete=(item)=>{
    const divItems=[...this.state.divItems];
    const index=divItems.indexOf(item);
    if(index!==-1){
      divItems.splice(index,1);
      this.setState({divItems})
    }
  }

  handleCursor=()=>{

    this.setState({
      tick:true
    })
  }

  handleChange=e=>{
    this.setState({
      inputText:e.target.value
    });

  }
  render(){
    const {divItems,tick,inputText,dialog,items}=this.state;
          
    const filteredList=divItems.filter(divItem=> {return divItem.title.indexOf(this.state.inputText)!==-1});
      
    return(
  <div className="App" ref={this.container}>
            <div>
              <div  className="inputTag">
                {divItems.length>0 && filteredList.map(item=> {
                return <div className="singlelist-dialog insideDialog" key={item.id}>{item.title}<i className="fa fa-close" onClick={()=>this.handleDelete(item)}></i></div>
                })}
                <div className="icon-root">
                  {tick && <input type="text" placeholder="Search..." value={inputText} onChange={this.handleChange}/>}
                {divItems.length>0?<div><i onClick={this.handleCursor} className="fa fa-check"></i>| <i className="fa fa-close" onClick={()=>this.setState({tick:false})}></i> </div>:<i className="fa fa-angle-down" onClick={this.handleDropDown}></i>}
                </div>
                </div>

              {dialog & items.length>0?<Dialog items={items} handleSingleListClicked={this.handleSingleListClicked}/>:null}

            </div>
        </div>
    )
  }
}
export default App;
