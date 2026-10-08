import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>VaultSpring</h1><p>Goal-based savings vaults with auditable milestone releases.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
