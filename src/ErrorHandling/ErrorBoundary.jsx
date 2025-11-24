import React from 'react';
class ErrorBoundary extends React.Component{

    state={
        error:null
    }

    static getDerivedStateFromError(error){
        return {
            error:error
        }
    }

    componentDidCatch(error,info){
        console.log("Error: ", error);
        console.log("Info: ", info);
    }
    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>Something went wrong.</h2> 
                    <p>{this.state.error.toString()}</p>                   
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;