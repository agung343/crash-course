import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleThemeHandler() {
    setDarkTheme(prev => !prev)
  }

  return (
    <>
      <div class="container m-auto">
        <header class="my-4 p-2 text-xl flex items-center gap-4" classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}>
          <span onClick={toggleThemeHandler} class="material-symbols-outlined cursor-pointer">
            🌗
          </span>

          <h1>Solid Crash Course</h1>
        </header>

        <img src={banner} alt="site banner" class="rounded-md" />
        <div class="grid grid-cols-4 gap-10 my-4">
          <Card rounded={true} flat={false}>
            <h2 class="font-bold text-center text-2xl">Studio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ulla
              harum velit prorro autaem odia!
            </p>
            <button class="btn">View</button>
          </Card>
          <Card rounded={false} flat={true}>
            <h2 class="font-bold text-center text-2xl">Monita 191</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ulla
              harum velit prorro autaem odia!
            </p>
            <button class="btn">View</button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
