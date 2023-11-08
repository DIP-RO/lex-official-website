import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Routes';

function App() {

  return (
    <div className=" bg-[#1d344a] min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
