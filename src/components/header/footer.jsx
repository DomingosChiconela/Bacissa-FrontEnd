export const Footer = () =>{
return(
<footer className="footer footer-center  bg-green-950 text-white p-5">
  <aside>
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="inline-block  fill-current">
     
    </svg>
    <p className="font-bold">
      Bacissa Ltd.
      <br />
      Feito com amor.
    </p>
    <p>Copyright © {new Date().getFullYear()} - Todos os direitos reservados.</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
         
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
         
        </svg>
      </a>
    </div>
  </nav>
</footer>
)
} 
