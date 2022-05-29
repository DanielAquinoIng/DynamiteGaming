import React from 'react';
import BarraBusqueda from "./barraBusqueda"; 
import "../css/compras.css"
import nintendo from "../assets/nintendo.jpeg"

const Compras = () => {

   return (
     <div>
       <BarraBusqueda />
       <h1>Historial de compras</h1>
       <div className='card-wrap'>
         <article className='card'>
           <header className='header-card'>
             <img src={nintendo}/>
           </header>
           <footer className='footer-card'>
             <div className='categoria-card'>
               <span>Categoria</span>
             </div>
             <div className='texto-card'>
               <h3>Hola mundo titulo</h3>
               <p>Hola mundo como estas, esto unicamente es relleno,
                 creo que ni lo voy a usar, aqui iran los datos de la
                 compra.
               </p>
             </div>
             <div className='perfil-card'>
               <div className='img-perfil-card'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefsPjZCPtkTdmq5XFCmJXLflZZ4lQZvlsCQ&usqp=CAU"/>
               </div>
               <div className='text-perfil-card'>
                 <span>Nombre</span>
                 <span>Fecha</span>
               </div>
             </div>
           </footer>
         </article>
         <article className='card'>
           <header className='header-card'>
             <img src={nintendo}/>
           </header>
           <footer className='footer-card'>
             <div className='categoria-card'>
               <span>Categoria</span>
             </div>
             <div className='texto-card'>
               <h3>Hola mundo titulo</h3>
               <p>Hola mundo como estas, esto unicamente es relleno,
                 creo que ni lo voy a usar, aqui iran los datos de la
                 compra.
               </p>
             </div>
             <div className='perfil-card'>
               <div className='img-perfil-card'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefsPjZCPtkTdmq5XFCmJXLflZZ4lQZvlsCQ&usqp=CAU"/>
               </div>
               <div className='text-perfil-card'>
                 <span>Nombre</span>
                 <span>Fecha</span>
               </div>
             </div>
           </footer>
         </article>
         <article className='card'>
           <header className='header-card'>
             <img src={nintendo}/>
           </header>
           <footer className='footer-card'>
             <div className='categoria-card'>
               <span>Categoria</span>
             </div>
             <div className='texto-card'>
               <h3>Hola mundo titulo</h3>
               <p>Hola mundo como estas, esto unicamente es relleno,
                 creo que ni lo voy a usar, aqui iran los datos de la
                 compra.
               </p>
             </div>
             <div className='perfil-card'>
               <div className='img-perfil-card'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefsPjZCPtkTdmq5XFCmJXLflZZ4lQZvlsCQ&usqp=CAU"/>
               </div>
               <div className='text-perfil-card'>
                 <span>Nombre</span>
                 <span>Fecha</span>
               </div>
             </div>
           </footer>
         </article>
         <article className='card'>
           <header className='header-card'>
             <img src={nintendo}/>
           </header>
           <footer className='footer-card'>
             <div className='categoria-card'>
               <span>Categoria</span>
             </div>
             <div className='texto-card'>
               <h3>Hola mundo titulo</h3>
               <p>Hola mundo como estas, esto unicamente es relleno,
                 creo que ni lo voy a usar, aqui iran los datos de la
                 compra.
               </p>
             </div>
             <div className='perfil-card'>
               <div className='img-perfil-card'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefsPjZCPtkTdmq5XFCmJXLflZZ4lQZvlsCQ&usqp=CAU"/>
               </div>
               <div className='text-perfil-card'>
                 <span>Nombre</span>
                 <span>Fecha</span>
               </div>
             </div>
           </footer>
         </article>
       </div>
     </div>
   );
};

export default Compras;