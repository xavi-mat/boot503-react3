import CounterClass from './components/CounterClass/CounterClass';
import CounterFunc from './components/CounterFunc/CounterFunc';
import RestHeader from './components/RestHeader/RestHeader';
import RestHeaderClass from './components/RestHeaderClass/RestHeaderClass';
import RestHome from './components/RestHome/RestHome';
import RestHomeClass from './components/RestHomeClass/RestHomeClass';

const dishes = [
  {
    id: 1,
    name: 'Pollo teriyaki',
    description: 'Este es el plato 1',
    price: 10,
    img: 'https://bakeitwithlove.com/wp-content/uploads/2021/11/teriyaki-chicken-stir-fry-sq.jpg'
  },
  {
    id: 2,
    name: 'Sushi',
    description: 'Este es el plato 2',
    price: 20,
    img: 'https://t1.rg.ltmcdn.com/es/posts/1/3/0/hacer_sushi_paso_a_paso_16031_600.jpg'
  },
  {
    id: 3,
    name: 'Ramen',
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
      <hr className='my-5' />
      <CounterFunc />
      <hr className='my-2' />
      <div className='bg-info'>
        <h2 className='p-5 text-center'>Con clases:</h2>
        <RestHeaderClass />
        <RestHomeClass dishes={dishes} />
        <hr className='my-5' />
        <CounterClass />
        <hr className='mt-5 pt-5' />
      </div>
    </>
  );
}

export default App;
