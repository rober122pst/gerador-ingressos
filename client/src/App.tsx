import banner from './assets/ilha-do-retiro.jpg';
import { LogoSport } from './components/logo-sport';

function App() {
    return (
        <div className="grid h-screen grid-flow-col grid-cols-[32.5%_1fr] gap-5 overflow-hidden px-5">
            <aside className="bg-shape-body my-5 rounded-xl" style={{ backgroundImage: `url(${banner})` }}>
                <div className="p-8">
                    <div className="flex flex-col items-center">
                        <LogoSport size={70} />
                        <span className="text-brand-mid txt-heading ml-2 text-4xl">Sport Recife</span>
                    </div>
                    <p className="text-heading mt-3.5 ml-2 text-base">
                        Gere seu ingresso personalizado para assistir o jogo do leão!
                    </p>
                </div>
            </aside>
            <main className="bg-shape-body my-5 overflow-auto rounded-xl">
                <div></div>
            </main>
        </div>
    );
}

export default App;
