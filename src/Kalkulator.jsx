import { createSignal } from "solid-js";


export default function Kalkulator() {
    const [iznos, setIznos] = createSignal(0);
    const [lokacija, setLokacija] = createSignal('Zagreb (23.6% / 35s4%)');
    const [djeca, setDjeca] = createSignal(0);
    const [uzdrzavane, setUzdrzavane] = createSignal(0);
    const [invaliditet, setInvaliditet] = createSignal('Bez invalidnosti');
    const [neto, setNeto] = createSignal(null);

    function submit(event) {
        event.preventDefault();
        const netoIznos = izracunajNeto();
        setNeto(netoIznos);
    }
    function izracunajNeto(){
        //formualza izracun tu
        let netoValue = iznos() * 0.75; //primjer??
        return netoValue.toFixed(2);
    }

    return(
        <div>
            <h1>Kalkulator za izračun plaće</h1>
            <form onSubmit={submit}>
                <div>
                    <label>Iznos:</label>
                    <input type="number" value={iznos()} onInput={(event) => setAmount(event.target.value)} />
                </div>
                <label>Mjesto prebivališta (zbog stope poreza): </label>
                <select value={lokacija()} onInput={(event) => setLokacija(event.target.value)}>
                    <option value="Zagreb (23.6% / 35.4%)">Zagreb (23.6% / 35.4%)</option>
                    <option value="Split (21.5% / 32.25%)">Split (21.5% / 32.25%)</option>
                </select>
                <div>
                    <label>Broj djece:</label>
                    <input type="number" value={djeca()} onInput={(event) => setDjeca(event.target.value)} />
                </div>
                <div>
                    <label>Broj uzdržavanih osoba:</label>
                    <input type="number" value={uzdrzavane()} onInput={(event) => setUzdrzavane(event.target.value)} />
                </div>
                <div>
                    <label>Invalidnost:</label>
                    <input type="radio" value="Bez invalidnosti" onInput={(event) => setInvaliditet(event.target.value)}/>
                    
                </div>
            </form>
        
        </div>
        
    );

}