import { Component } from 'solid-js';
import { ImageContextProvider } from './contexts/image';
import ImageToAscii from './components/ImageToAscii';

const App: Component = () => {
  return (
    <ImageContextProvider>
      <main class="bg-black text-white overflow-x-hidden">
        <section class="p-10">
          <ImageToAscii />
        </section>
      </main>
    </ImageContextProvider>
  );
};

export default App;
