import React,{Fragment} from 'react'

function Plan(props) {
    const arr = props.p;
    return( 
            <>
             {/* <li key={props.id} className="shadow-md p-2 my-2 inline-block px-12 font-semibold py-2 mt-2 top-10 siz"> {props.value}  </li>
              <button className="bg-yellow-400 bg-gray-600 text-violet-700 text-base font-semibold px-2 py-2 mt-2 top-10 border-white  rounded-lg " onClick={() => {props.sendData(props.id)}}>x</button>   */}

              {
              
                  arr.map((value,i) => {
                    return (
                    <React.Fragment key={i} >
                    <li className="shadow-md p-2 my-2 inline-block px-12 font-semibold py-2 mt-2 top-10 siz"> {value}  </li>
              <button className="bg-yellow-400 bg-gray-600 text-violet-700 text-base font-semibold px-2 py-2 mt-2 top-10 border-white  rounded-lg " onClick={() => {props.sendData(i)}}>x</button>

                    </React.Fragment>)
                  })
              }
        </>
    )
}

export default Plan
