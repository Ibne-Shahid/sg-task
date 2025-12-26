import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeScreen from "../Pages/HomeScreen";
import AudioPlayer from "../Pages/AudioPlayer";
import QuizCreator from "../Pages/QuizCreator";

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
      {
        path: "quiz-creator",
        element: <QuizCreator />
      }
    ],
  },
]);

export default router;
