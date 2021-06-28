import './App.css';
import List from './components/List/List'

function App() {
  return (
    <div className="App">
      <form /*onSubmit={this.handleSubmit}*/>
        <label htmlFor="tarea">Tarea:</label><br/>
        <input type="text" id="tarea" name="tarea" placeholder="tarea"/><br/><br/>
        <input type="submit" value="ADD"/>
      </form>
      <List/>
    </div>
  );
}

export default App;
