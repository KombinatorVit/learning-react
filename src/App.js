import { Component } from 'react';
import './App.css';
import styled from 'styled-components';


class WhoAmi extends Component {
constructor(props){
super(props);
this.state = {
  years: 27,
  text: '+++',
  position: ''
}
}


nextYear = () => {

  this.setState(state =>({
  years: state.years + 1
}))
}

commitInputChanges = (e, color) => {
  console.log(color)
this.setState({
  position: e.target.value
})
}


  render(){
    const{name, surname, link} = this.props;
    const { position,text, years} = this.state;
    
    
    return (
   <>
     <button onClick={this.nextYear}>{text}</button>
      <h1>My name is {name}, surname -{surname}, 
      age - {years}, 
      position ={position} </h1>
  
       <a href={link}>My profile</a>

       <form >
         <span>Введите должность</span>
         <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
       </form>
    </>
    )
  }
}

const Wrapper = styled.div`
width: 600 px;
margin: 80px auto 0 auto;
`

function App() {
  return (
    <Wrapper>
    < WhoAmi name ='John' surname='Onishnenko' link ='facebook.com'/>
    < WhoAmi name ='Max' surname='Maxon' link ='ticToc.net'/>

    </Wrapper>
  );
}

export default App;


