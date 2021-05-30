import Background from './Background';
import Dials from './Dials';
import Ticker from './Ticker';
import TopNav from './TopNav';

function DetailView() {
  return (
    <div>
      <TopNav />

      <Ticker />

      <Dials />

      <Background />
    </div>
  );
}

export default DetailView;
