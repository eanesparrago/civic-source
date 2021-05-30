import Background from './Background';
import Dials from './Dials';
import ForSaleSign from './ForSaleSign';
import Ticker from './Ticker';
import TopNav from './TopNav';

function DetailView() {
  return (
    <div>
      <TopNav />

      <Ticker />

      <Dials />

      <ForSaleSign />

      <Background />
    </div>
  );
}

export default DetailView;
