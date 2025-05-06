import { useState } from "react";

const ManageData = () => {
    const [number, setNumber] = useState(15)
    console.log(number);
  return (
    <div>
        <div>
            <p>Valor é: {number}</p>
            <button onClick={() => setNumber(25)}>Alterar numero</button>
        </div>
    </div>
  )
}

export default ManageData;