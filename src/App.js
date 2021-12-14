import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Kien'
  const age = 21
  const isMale = true
  const profile = {
    name: 'Huynh Trung Kien'
  }
  const course = ['React', 'Javascript', 'PHP']
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trung Kien
        </p>
          <p>Hello {name} - {age} yeaars - {isMale ? 'Male' : 'Female'}</p>
          {isMale && (
            <>
              <p>Male 1</p>
              <p>Male 2</p>
              <p>Male 3</p>
            </>
          )}

          {profile.name}
          <ul>
            {course.map(item => (<li key={item}>{item}</li>))}
          </ul>
      </header>
    </div>
  );
}

export default App;
