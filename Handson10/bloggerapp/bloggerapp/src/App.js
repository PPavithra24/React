import logo from './logo.svg';
import './App.css';
import {Blog,posts,courses,books} from './Components/blogkey'

function App() {
  return (
  
    <div>
      <Blog posts={posts} courses={courses} books={books}/> 
    </div>
    
  );
}

export default App;
