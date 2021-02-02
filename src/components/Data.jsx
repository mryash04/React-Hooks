import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Data = (props) => {
    return (
        <div className="data">
            <table class="table table-striped table-bordered table-hover table-sm">
                <tbody>
                    <tr>
                        <th scope="row" className="table-primary">{props.id}</th>
                        <td className="text-center w-75 table-danger">{props.title}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Data;






