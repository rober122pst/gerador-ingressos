import { motion } from 'motion/react';
import banner from '../assets/ilha-do-retiro-2.jpg';
import { LogoSport } from './logo-sport';

export function Sidebar() {
    return (
        <aside
            className="bg-shape-body after:from-shape-body relative -z-20 my-5 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:-z-10 after:absolute after:inset-0 after:-z-10 after:bg-linear-to-b after:from-30%"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="mt- absolute left-0 z-[-1] mt-8 flex w-full flex-col gap-6.75">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="bg-brand-mid h-8 w-full origin-left"
                />
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2, ease: 'easeInOut' }}
                    className="bg-brand-mid h-8 w-1/3 origin-left"
                />
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, ease: 'easeOut' }}
                    className="bg-brand-mid h-8 w-1/4 origin-left"
                />
            </div>
            <div className="px-8 py-12">
                <div className="flex items-center">
                    <LogoSport size={118} />
                    <span className="txt-heading leading-thin mx-auto px-3 text-center text-4xl font-black">
                        Sport Recife
                        <p className="txt-body text-body mx-auto text-sm">Gerador de ingressos personalizado!</p>
                    </span>
                </div>
            </div>
        </aside>
    );
}
