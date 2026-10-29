import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-cream px-6">
    <div className="text-center">
      <p className="font-serif text-7xl text-green-soft mb-4">404</p>
      <h1 className="font-serif text-3xl text-green-deep mb-3">Página não encontrada</h1>
      <p className="text-text-mid font-light mb-8">O endereço que você procurou não existe ou foi movido.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-green-deep text-cream text-sm font-medium px-6 py-3 rounded-full hover:bg-green-mid"
      >
        Voltar para o início
      </Link>
    </div>
  </div>
);

export default NotFound;
