import Link from "next/link";

export const dynamic = "force-dinamyc";

export default function Home() {
  return (
    <main className="flex justify-center content-center">
      <div className="flex flex-col justify-center md:w-72 xl:w-96">
        <h1 className="text-center text-2xl">Random Quiz</h1>
        <hr className="mt-3 border-white"/>
        <Link href="pages/startGame" className="buttonEnlace">Comenzar</Link>
        <Link href="pages/createQuiz" className="buttonEnlace">Crear preguntas</Link>
        <Link  href="pages/showQuiz" className="buttonEnlace">Ver preguntas disponibles</Link>
        <Link  href="pages/showRecord" className="buttonEnlace">Record de jugador</Link>
      </div>
    </main>
  );
}
