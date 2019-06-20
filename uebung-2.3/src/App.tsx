import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Freelancer } from './models/freelancer';
import FreelancerIndex from './components/freelancer';
import FreelancerForm from './components/freelancer/form';

interface State {
  freelancers: Freelancer[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      freelancers: [
        { id: 1, forename: 'Nicolas', lastname: 'Kubat', createdAt: new Date(), salery: 10000 },
        { id: 2, forename: 'Joel', lastname: 'Stäuble', createdAt: new Date(), salery: 14000 },
        { id: 3, forename: 'Tim', lastname: 'Lanbacher', createdAt: new Date(), salery: 10 }
      ]
    }

    this.deleteFreelancer = this.deleteFreelancer.bind(this);
    this.createFreelancer = this.createFreelancer.bind(this);
    this.editFreelancer = this.editFreelancer.bind(this);
  }

  render() {
    return (
      <div>
        <FreelancerForm onSave={this.createFreelancer} />
        <FreelancerIndex 
          onDelete={this.deleteFreelancer}
          onEdit={this.editFreelancer}
          freelancers={this.state.freelancers} />
      </div>
    );
  }

  private createFreelancer(freelancer: Freelancer) {
    const newFreelancers = this.state.freelancers;
    const newId = Math.max(...newFreelancers.map(f => f.id ? f.id : 0)) + 1;
    const newFreelancer = {...freelancer, id: newId, createdAt: new Date()};
    newFreelancers.push(newFreelancer);

    this.setState({...this.state, freelancers: newFreelancers});
  }

  private editFreelancer(freelancer: Freelancer) {
    const newFreelancers = this.state.freelancers.map((f) => f.id === freelancer.id ? freelancer : f)
    this.setState({...this.state, freelancers: newFreelancers})
  }

  private deleteFreelancer(id: number) {
    const newState = this.state.freelancers.filter((f) => f.id !== id);
    this.setState({freelancers: newState});
  }
}

export default App;
