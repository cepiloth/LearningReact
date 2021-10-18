import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id': 1,
  'image' : 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202110/05/5c1cef2f-2b0e-4901-b52e-583170963bd0.jpg',
  'name' : '홍길동',
  'birthday' : '989861',
  'gender' : '남자',
  'job' : ' 대학생'
},
{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍광표',
  'birthday' : '283901',
  'gender' : '남자',
  'job' : ' 대학생'
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이제동',
  'birthday' : '289208',
  'gender' : '남자',
  'job' : ' 대학생'
}
]

function App() {
  return (
    <div>
    {
      customers.map( c => {
        return (
          <Customer 
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })
    }
    </div>
  );
}

export default App;
