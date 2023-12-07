import { Toaster } from "react-hot-toast";
import Answer from "./components/Answer";
import Question from "./components/Question";
import Timer from "./components/Timer";

import { promises as fs} from 'fs';
import Progress from "./components/Progress";
import CanvasContainer from "./components/CanvasContainer";

type EnglishClass = {
  Class: string;
  "Letters Given": string;
  Words: string;
  Reward: string;
};

export type ApiResponse = {
  items: EnglishClass[];
};

export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/app/classes.json', 'utf8');
  const data: ApiResponse = JSON.parse(file);

  return (
    <main 
      className="relative bg-black/95 h-full w-full">
      <div className="absolute bottom-2 z-50 left-1/2 -translate-x-1/2 bg-white py-3 px-6 rounded-xl">
        <Timer />
      </div>
      <CanvasContainer items={data} />
      <Toaster />
    </main>
  )
}
