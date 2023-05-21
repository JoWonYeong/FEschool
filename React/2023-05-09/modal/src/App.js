import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        laudantium rem amet officia sed. Recusandae reprehenderit natus
        corporis, vitae pariatur veniam odio modi, alias possimus amet tenetur
        similique dolore nisi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eveniet voluptatem placeat a consectetur ab aspernatur
        sed similique vero nesciunt, maiores aperiam quasi, nulla enim tenetur
        quod quaerat qui, asperiores quos! Lorem, ipsum dolor sit amet
      </p>
      <button
        onClick={() => {
          setIsOpen(true);
        }}>
        모달창 열기
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}
export default App;
