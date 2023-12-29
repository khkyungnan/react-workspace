import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const API_KEY = '4edac2eabf494946a189e86050976521';

  const searchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`
      );

      // api에서 데이터를 get으로 가지고 왔다면
      // post를 이용해서 바로 db에 넣어버림
      await axios.post('http://localhost:5000/api/saveWeatherData', {
        //response.data : 필수로 데이터를 불러오기 위한 작업
        //.data[0] : 검색했을 때 제일 첫 번 째로 나오는 데이터를
        //가지고 오기 위해서 사용하는 이름
        city_name: response.data.data[0].city_name,
        temp: response.data.data[0].temp,
        rh: response.data.data[0].rh,
        description: response.data.data[0].weather.description,
      });

      setWeather(response.data.data[0]);
    } catch (error) {
      console.error('데이터베이스에 넣는데 실패하였습니다.', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>날씨</h1>
      <input
        type="text"
        placeholder="도시를 입력하세요."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchWeather}>검색하기</button>
      {loading && <p>Loading ...</p>}
      {weather.city_name && (
        <div>
          <h3>{weather.city_name}</h3>
          <p>온도 : {weather.temp}</p>
          <p>습도 : {weather.rh}</p>
          <p>날씨 : {weather.weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
