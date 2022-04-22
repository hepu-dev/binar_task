import react from 'react';
//import component react
import styles from './helloclass.module.css'

//class componen
class HelloClassComponent extends react.Component{           
    constructor(props){
        super(props)
        this.state={
            name: 'heru',
            counter:0
        }
    }
    handleClick = () =>{
        this.setState({
            counter:this.state.counter +1
        });
    }

    componentDidMount(){
        // alert("component di mount")
    }
    
    componentDidUpdate(){
        alert("component update")
    }

    componentWillUnmount(){
        alert("componen will unmont")
    }
    render(){
        const {message} = this.props;
        const {name, counter} = this.state;
        return(
            <>
               <h2 className={styles.title}>{this.props.message} {this.state.name}</h2>
               <h3>counter: {counter}</h3>
               <button onClick={this.handleClick}>onClick</button>
            </>
          )
    }
}

export default HelloClassComponent;                   