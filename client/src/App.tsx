import { LogoSport } from './components/logo-sport';

function App() {
    return (
        <div className="grid h-screen grid-flow-col grid-cols-[32.5%_1fr] gap-5 overflow-hidden px-5">
            <aside className="bg-shape-body my-5 rounded-xl">
                <div>
                    <LogoSport size={128} />
                </div>
            </aside>
            <main className="bg-shape-body my-5 overflow-auto rounded-xl">
                <div></div>
            </main>
        </div>
    );
}

export default App;
