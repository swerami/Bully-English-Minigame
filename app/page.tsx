import Answer from "./components/Answer";
import Question from "./components/Question";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <main 
      className="flex flex-col gap-6 min-h-screen">
        <Timer />
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10 bg-pink-100">
        <Answer />
        <Question />
      </div>
    </main>
  )
}
