import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Tours from "../Tours/Tours";
const data = require('../../data.json')

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
            <div>
        <Tours/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
