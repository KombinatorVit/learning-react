import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';


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

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
{
  React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      className: 'shadow p-3 m-3 border rounded'
    })
  })
}    </div>
  )
}

function App() {
  return (
    <Wrapper>
 
      <BootstrapTest
      left = {
        <DynamicGreating color={'primary'}>
        <h2>Lorem ipsum dolor </h2>
        <h2>Param pam</h2>
        </DynamicGreating>
      }
      right = {
        <DynamicGreating color={'primary'}>
        <h2> Kiss Kiss</h2>
        
        </DynamicGreating>
      }
      />
    < WhoAmi name ='John' surname='Onishnenko' link ='facebook.com'/>
    < WhoAmi name ='Max' surname='Maxon' link ='ticToc.net'/>

    </Wrapper>
  );
}

export default App;


