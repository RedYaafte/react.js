import React from 'react';

const IMCList = (props) => {
    return (
        <ul>
            {props.IMCList.map(item => {
                return (
                    <li key={item.id}>
                        {item.weight} {item.height} {item.imc}
                    </li>
                )
            })}
        </ul>
    )
}

export default IMCList;