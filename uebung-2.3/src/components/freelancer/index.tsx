import React from "react";
import { Freelancer } from "../../models/freelancer";
import FreelancerForm from "./form";

interface Props {
    onDelete: (id: number) => void;
    onEdit: (freelancer: Freelancer) => void;
    freelancers: Freelancer[];
}

class FreelancerIndex extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <table>
            <tr>
                <th>ID</th>
                <th>Forename</th>
                <th>Lastname</th>
                <th>Created at</th>
                <th>Salery</th>
                <th>Actions</th>
            </tr>
            {this.props.freelancers.map((f) => {
                return (
                    <tr>
                        <td>{f.id}</td>
                        <td>{f.forename}</td>
                        <td>{f.lastname}</td>
                        <td>{f.createdAt ? f.createdAt.toLocaleString('de') : null}</td>
                        <td>{f.salery}</td>
                        <td>
                            <button onClick={() => this.onDelete(f.id)}>
                                Delete
                            </button>
                            <FreelancerForm freelancer={f} onSave={this.props.onEdit} />
                        </td>
                    </tr>
                );
            })}
            </table>
        );
    }

    private onDelete(id: number|undefined) {
        if(id) {
            this.props.onDelete(id);
        }
    }
}

export default FreelancerIndex;