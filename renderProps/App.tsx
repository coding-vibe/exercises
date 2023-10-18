import { clsx } from "clsx";
import ScrollSpy from "./components/ScrollSpy";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const TEXT_LENGTH = 20;
const PIXEL_QTY = 100;

function App() {
  const checkIsScrolledToBottom = (scrollY: number) =>
    scrollY + window.innerHeight >
    document.documentElement.scrollHeight - PIXEL_QTY;

  return (
    <ScrollSpy
      renderContent={(scrollY) => (
        <div>
          <header className="header">
            <a href="https://vitejs.dev" target="_blank">
              <img
                src={viteLogo}
                className={clsx("logo", scrollY >= PIXEL_QTY && "logo-small")}
                alt="Vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank">
              <img
                src={reactLogo}
                className={clsx(
                  "logo",
                  "react",
                  scrollY >= PIXEL_QTY && "logo-small"
                )}
                alt="React logo"
              />
            </a>
            <h1
              className={clsx(
                "title",
                clsx(scrollY >= PIXEL_QTY && "title-small")
              )}>
              Vite + React
            </h1>
            {scrollY}
          </header>
          <main
            className={clsx(
              checkIsScrolledToBottom(scrollY) && "main-with-shadow"
            )}>
            {Array.from({ length: TEXT_LENGTH }).map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus pretium molestie lobortis. Mauris justo mi,
                consectetur quis bibendum non, luctus non nunc. Maecenas cursus
                tincidunt placerat. Suspendisse potenti. Curabitur faucibus,
                tortor in pellentesque ullamcorper, tellus nunc viverra massa,
                sit amet posuere lacus augue ut dui. Ut non sem nunc. Vestibulum
                convallis erat tellus, eu blandit tellus aliquet vitae. Nam
                tristique nisl ut consectetur molestie. Curabitur dui est,
                sollicitudin in turpis ultrices, viverra feugiat est. Fusce eu
                urna vitae justo feugiat laoreet a vitae ante. Duis sollicitudin
                libero quam, in aliquet libero suscipit sed. In hac habitasse
                platea dictumst.
              </p>
            ))}
          </main>
        </div>
      )}
    />
  );
}
export default App;
