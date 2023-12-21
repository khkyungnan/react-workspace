import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className='App'>
      <header className='bg-dark text-light py-5'>
        <h1>리액트 부트스트랩 사이트</h1>
      </header>  
      <main className='container mt-2'>
        <section className='mb-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src="https://img.freepik.com/free-vector/simple-geometric-seo-sessions-facebook-profile-cover_23-2149509971.jpg?w=900&t=st=1703121945~exp=1703122545~hmac=380d3ff3b58be68a3d954b9e215a25f7207f2e3bd6e620236cea037624be5e8a"/>
              <h2>하나</h2>
              <p>이것은 하나입니다.</p>
            </div>
          </div> 
        </section>    
      </main>
    </div>
  );
}

export default App;
