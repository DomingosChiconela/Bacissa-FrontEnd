export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-green-nevon text-white text-xs md:text-base p-2  md:p-2 pt-0">
      <aside className="text-center mb-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1286/1286209.png"
          alt="Logo"
          className="  w-8  relative left-32 md:left-40 mb-2 rounded-full bg-green-200"
        />
        <p className="font-bold">Bacissa Ltd.</p>
        <p>Feito com amor ❦</p>
        <p>Copyright © {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </aside>
      <nav>
        <div className="flex space-x-4">
          <a href="https://github.com/DomingosChiconela/Bacissa-FrontEnd" target="_blank" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.797 8.205 11.391.6.111.827-.261.827-.577 0-.286-.011-1.042-.017-2.048-3.338.724-4.042-1.606-4.042-1.606-.545-1.378-1.333-1.743-1.333-1.743-1.087-.742.083-.726.083-.726 1.205.085 1.838 1.237 1.838 1.237 1.069 1.834 2.807 1.303 3.492.997.108-.775.419-1.303.762-1.604-2.665-.304-5.467-1.334-5.467-5.923 0-1.309.467-2.375 1.235-3.216-.124-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.298 1.227.954-.265 1.979-.397 3.001-.402 1.022.005 2.047.137 3.001.402 2.291-1.549 3.298-1.227 3.298-1.227.653 1.652.241 2.873.118 3.176.77.841 1.235 1.907 1.235 3.216 0 4.599-2.804 5.619-5.47 5.923.431.372.818 1.103.818 2.223 0 1.607-.014 2.906-.014 3.303 0 .319.224.693.834.577C20.563 21.797 24 17.303 24 12c0-6.629-5.371-12-12-12z" />
            </svg>
          </a>
          <a href="/" aria-label="Rede Social 2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
            </svg>
          </a>
          <a href="#" aria-label="Rede Social 3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95 0-7.15-3.2-7.15-7.15h2.01c0 2.85 2.31 5.15 5.14 5.15 2.85 0 5.15-2.3 5.15-5.15s-2.3-5.15-5.15-5.15c-.77 0-1.5.15-2.15.39V9.1c1.5-.66 3.21-1.1 5-1.1 3.95 0 7.15 3.2 7.15 7.15s-3.2 7.15-7.15 7.15z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
