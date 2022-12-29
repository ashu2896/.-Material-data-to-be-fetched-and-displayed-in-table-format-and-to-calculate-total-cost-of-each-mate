import React from 'react'
import { useState,useEffect } from 'react'
//import JsonData from './data.json'

const data = [
    {employeeId: '01',
        "name": "Cement",
        "uom": "Bags",
        "qty": 10,
      },
      {
        employeeId: '02',
        "name": "Steel",
        "uom": "Kgs",
        "qty": 10,
      },
      {
        employeeId: '03',
        "name": "Glass",
        "uom": "Nos",
        "qty": 10,
      },
      {
        employeeId: '04',
        "name": "Pipe",
        "uom": "Mtrs",
        "qty": 10,
      },
      {
        employeeId: '05',
        "name": "Wooden door",
        "uom": "Nos",
        "qty": 2,
      }
]
export default function Table(){
    const [employeeData, setEmployeeData] = useState(data);
    const [tableTotal, setTableTotal ] = useState(0);

    const onChangeInput = (e, employeeId) => {
      const { name, value } = e.target
  
      const editData = employeeData.map((item) =>
        item.employeeId === employeeId && name ? { ...item, [name]: value, total: value * item.qty } : item
      )
       console.log("editData", JSON.stringify(editData));
      setEmployeeData(editData);

    }

    useEffect(()=>{
        const sum =  employeeData.reduce((sum, item)=> item.total+sum,0)      
       setTableTotal(sum)       
       },[employeeData])

      
    
  return (
    <div className="container">
      <h1 className="title">Centrol Technology</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>uom</th>
            <th>qty</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({employeeId, name, price, uom, qty,total }) => (
            
            <tr key={employeeId}>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChangeInput(e,employeeId )}
                  placeholder="Type Name"
                />
              </td>
              <td>
               <input
                  name="Price"
                  value={price}
                  type="number"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type number"
                />
              </td>
              <td>
                <input
                  name="uom"
                  value={uom}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="qty"
                  value={qty}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Name"
                />
              </td>
              <td>
              {total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>GrandTotal:{tableTotal}</p>
    </div>
  )
}

