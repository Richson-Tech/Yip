import React from 'react';
import './Planner.css';

const Planner = () => {
    return (
        
            <React.Fragment>
                <div className='queue'>
                        <table className='table'>
                            <caption>Planner</caption>
                            <thead className='table_head'>
                                <tr className='table_header'>
                                    <th></th>
                                    <th>Nov 1</th>
                                    <th>Nov 2</th>
                                    <th>Nov 3</th>
                                    <th>Nov 4</th>
                                    <th>Nov 5</th>
                                    <th>Nov 6</th>
                                    <th>Nov 7</th>
                                </tr>
                            </thead>
                            <tbody className='table_body'>
                            <tr className='table_details'>
                                <th>Slot 1</th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                            </tr>
                            <tr>
                                <th>Slot 2</th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                            </tr>
                            <tr>
                                <th>Slot 3</th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                            </tr>
                            <tr>
                                <th>Slot 4</th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                                <th className='empty'></th>
                             </tr>         
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        
    );
}

export default Planner;