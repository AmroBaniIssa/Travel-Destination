import Tour from "./Tour/Tour";
const data = require('../../data.json')

function Tours(props) {
  return (
    <div>
        <Tour ArrayData ={data}/>
    </div>
     );
}
export default Tours;
