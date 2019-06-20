import React from "react";
import { Freelancer } from "../../models/freelancer";
import './form.css';
import Dialog from "../dialog";

interface Props {
    onSave: (freelancer: Freelancer) => void;
    freelancer?: Freelancer;
}

interface State {
    open: boolean;
    freelancer: Freelancer;
}

class FreelancerForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        const actualFreelancer = this.props.freelancer ? this.props.freelancer : {
            forename: '',
            lastname: '',
            salery: 0
        }

        this.state = {
            freelancer: actualFreelancer,
            open: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleOpen()}>{this.props.freelancer ? "Edit" : "New"}</button>
                <Dialog open={this.state.open}>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="forename">Forename</label>
                        <input 
                            type="text" 
                            name="forename" 
                            id="forename"
                            defaultValue={this.state.freelancer.forename}
                            onChange={this.onChange}
                        />
                        <label htmlFor="lastname">Lastname</label>
                        <input
                            type="text" 
                            name="lastname" 
                            id="lastname"
                            defaultValue={this.state.freelancer.lastname}
                            onChange={this.onChange}
                        />
                        <label htmlFor="salery">Salery</label>
                        <input
                            type="number"
                            name="salery"
                            id="salery"
                            defaultValue={this.state.freelancer.salery.toString()}
                            onChange={this.onChange}
                        /> 
                        <input type="submit" value="Save" />
                        <button onClick={() => this.toggleOpen()}>Cancel</button>
                    </form>
                </Dialog>
            </div>
        )
    }

    private toggleOpen() {
        this.setState({...this.state, open: !this.state.open});
    }

    private onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newFreelancer = {...this.state.freelancer, [e.target.name]: e.target.value}
        const newState = {...this.state, freelancer: newFreelancer};
        this.setState(newState);
    }

    private onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.onSave(this.state.freelancer);
        this.toggleOpen();
    }
}

export default FreelancerForm;