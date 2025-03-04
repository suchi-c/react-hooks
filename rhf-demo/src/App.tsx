import { YouTubeForm } from "./components/YouTubeForm";
import { YupYouTubeForm } from "./components/YupYouTubeForm";
import { ZodYouTubeForm } from "./components/ZodYouTubeForm";
import "./App.css";

function App() {
  return (
    <div>
      <YouTubeForm />
      <YupYouTubeForm/>
      <ZodYouTubeForm/>
    </div>
  );
}

export default App;
