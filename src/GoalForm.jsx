import { Component } from "react";
export class GoalForm extends Component{
    state={
        goal:'',

    }
    onFormSubmit=(event)=>{
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <textarea name="goal" value={this.state.goal}></textarea>
                <button type="submit">Create</button>
            </form>
        )
    }
}