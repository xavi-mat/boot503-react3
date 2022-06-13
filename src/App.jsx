import CounterFunc from './components/CounterFunc/CounterFunc';
import RestHeader from './components/RestHeader/RestHeader';
import RestHome from './components/RestHome/RestHome';

const dishes = [
  {
    id: 1,
    name: 'plato 1',
    description: 'Este es el plato 1',
    price: 10,
    img: 'https://bakeitwithlove.com/wp-content/uploads/2021/11/teriyaki-chicken-stir-fry-sq.jpg'
  },
  {
    id: 2,
    name: 'plato 2',
    description: 'Este es el plato 2',
    price: 20,
    img: 'https://t1.rg.ltmcdn.com/es/posts/1/3/0/hacer_sushi_paso_a_paso_16031_600.jpg'
  },
  {
    id: 3,
    name: 'plato 3',
    description: 'Este es el plato 3',
    price: 15,
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/f4/3c/12/photo2jpg.jpg'
  }
]

function App() {
  return (
    <>
      <RestHeader />
      <RestHome dishes={dishes} />
      <hr />
      <CounterFunc />
    </>
  );
}

export default App;
