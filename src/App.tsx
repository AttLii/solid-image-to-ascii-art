import { Component } from 'solid-js';
import { ImageContextProvider } from './contexts/image';
import ImageToAscii from './components/ImageToAscii';

const App: Component = () => {
  return (
    <main class="bg-black text-white overflow-x-hidden">
      <section class="p-10">
        <ImageContextProvider>
          <ImageToAscii />
        </ImageContextProvider>
      </section>
    </main>
  );
};

export default App;
