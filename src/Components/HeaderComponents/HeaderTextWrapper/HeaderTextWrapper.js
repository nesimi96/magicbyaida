import React, { Component } from 'react';
import './HeaderTextWrapper.scss';
import HeaderLogo from '../../../assets/img/header-logo.png';

class HeaderTextWrapper extends Component {


    state = {
        text: [],
    }

    componentDidMount(){
        setTimeout(() => {
           this.writeText();
        }, 4000)
    }

    writeText = () => {
        let text = 'Mi kreiramo magiju';
        const splited = text.split('');
         
        let counter = 0;
        let newArr = [];
        setInterval(() => {
            newArr.push(splited[counter]);
            counter++
            if(counter <= splited.length){
                this.setState({text: newArr})
            }
        }, 100)

    }


    render(){

    
        return <div className="HeaderTextWrapper">
                    <h1>{this.state.text}</h1>
            </div>
    }

}

export default HeaderTextWrapper;