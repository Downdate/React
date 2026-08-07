import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));

function HomePage() {
  return (
    <div>
      <h1>Dorood bar shoma!</h1>
      <div>Hello, World!</div>
    </div>
  );
}

root.render(
  HomePage()
)


