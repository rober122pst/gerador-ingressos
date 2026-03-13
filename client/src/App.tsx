import { Forms } from './components/forms';
import { Sidebar } from './components/sidebar';

function App() {
    return (
        <div className="grid h-screen grid-flow-col grid-cols-[32.5%_1fr] gap-5 overflow-hidden px-5">
            <Sidebar />
            <main className="bg-shape-body my-5 overflow-auto rounded-xl">
                <Forms />
            </main>
        </div>
    );
}

export default App;
