import './App.css';
import Hello from './Components/Hello';
import Time from './Components/Time';
import Body from './Components/Body';
import Resume from './Components/Resume';

function App() {
  return (
    <div>
      <Hello name="gary" age="10" />
      <Time />
      <Body />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
    </div>
  );
}

export default App;