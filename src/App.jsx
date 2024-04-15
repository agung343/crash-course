import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div class="container m-auto">
        <header>
          <h1>Solid Crash Course</h1>
        </header>

        <img src={banner} alt="site banner" class="rounded-md" />
        <div class="grid grid-cols-4 gap-10 my-4">
          <Card rounded={true} flat={false}>
            <h2 class="font-bold text-center">Studio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ulla
              harum velit prorro autaem odia!
            </p>
            <button class="btn">View</button>
          </Card>
          <Card rounded={false} flat={true}>
            <h2 class="font-bold text-center">Monita 191</h2>
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
