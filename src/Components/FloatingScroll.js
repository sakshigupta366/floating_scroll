import React, { useEffect } from 'react';
// import '../Style/FloatingScroll.css';
// import $ from 'jquery';
import { Table } from 'react-bootstrap'

const FloatingScroll = () => {
    
    useEffect(() => {
        
        var $ = global.jQuery;
        $(".fs-demo").floatingScroll();
        
    }, [])
    

    return (
        <div className=" table-outer fs-demo" data-fl-scrolls>
         
                <Table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            {Array.from({ length: 100 }).map((_, index) => (
                                <th key={index}>Table heading</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({length:50}).map((_,index)=>(
                            <tr key={index}>
                                <td>{index}</td>
                                {Array.from({ length: 100 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                        ))}
                        
                    </tbody>
                </Table>
        
        </div>
    )
}

export default FloatingScroll;