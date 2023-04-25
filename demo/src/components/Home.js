import Header from "./Header";
import Footer from "./Footer";
import Tours from "./Tours";
const data = require('../data.json')

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Tours ArrayData ={data}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
