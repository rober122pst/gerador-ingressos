import { Calendar } from 'lucide-react';
import { Fieldset, Legend } from './forms/fieldset';
import { InputText } from './forms/inputs';

export function Forms() {
    return (
        <div className="mx-auto max-w-140 py-20">
            <h1 className="txt-heading">Gere seu ingresso</h1>
            <form className="mt-10">
                <Fieldset>
                    <Legend legend="Sobre o jogo">
                        <Calendar size={24} />
                    </Legend>

                    <InputText placeholder="Sport x Náutico" id="game-name" label="Nome do jogo" />
                </Fieldset>
            </form>
        </div>
    );
}
