import Image from "next/image";
import Accueil from "../component/Acceuil";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Accueil />
    </main>
  );
}
