import { createBrowserRouter } from "react-router";
import App from "./App";
import HomeScreen from "./HomeScreen";
import AudioPlayer from "./AudioPlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "audio-player",
        element: <AudioPlayer />,
      },
    ],
  },
]);

export default router;
