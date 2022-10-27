import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router/Routers';
import { Toaster } from 'react-hot-toast';
import ReactTooltip from 'react-tooltip';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ReactTooltip />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
