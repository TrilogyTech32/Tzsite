
function App() {
  return (
    <div className="w-full h-full z-10 flex flex-col items-center">
      {/* HOME ===================================================================== */}
      <div className="w-full max-w-[1900px] h-screen">
        {/* BG --------------- */}
        <div className="">
          <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline preload="auto" >        
            <source src="/video/videoBG.mp4" type="video/mp4" />
          </video>
          <div className="absolute z-10 top-0 left-0  w-full h-screen bg-gradient-to-b from-black/50 to-black"></div>
        </div>
        {/* MENU --------------- */}
        <div className="relative z-20 w-full h-screen flex flex-col items-center justify-between backdrop-blur-[3px] pb-7">
          <div className=" w-[40vw] h-[10vh] flex justify-center items-center p-4 gap-8">
            <a href="#" className='w-full flex justify-center text-2xl text-white hover:scale-105 hover:font-bold'>Agencia</a>
            <a href="#" className='w-full flex justify-center text-2xl text-white  hover:scale-105 hover:font-bold'>Viagem</a>
            <img src="/img/logoTZ.png" className=" h-max w-[10vw]  hover:scale-105" />
            <a href="#" className='w-full flex justify-center text-2xl text-white  hover:scale-105 hover:font-bold'>Duvidas</a>
            <a href="#" className='w-full flex justify-center text-2xl text-white  hover:scale-105 hover:font-bold'>Contato</a>
          </div>
          <div className="w-[55vw]  flex flex-col items-center justify-center text-center">
            <p className="titleFont text-sm text-white font-bold" >CONSULTORIA DE VIAGENS</p>
            <h1 className="titleFont  text-6xl text-white font-extraboldblond mt-2 mb-5" >CONSULTORIA DE VIAGENS</h1>
            <h3 className="text-lg text-white font-light">A Consultoria é o primeiro passo do nosso trabalho para planejar a sua viagem. É um serviço premium para destinos internacionais e possíveis roteiros através de uma análise do seu perfil, preferências e investimento disponível. Veja abaixo como funciona cada etapa e entenda como podemos te ajudar!</h3>
          </div>
          <div className=" flex justify-center gap-5 mt-14">
              <button className="border-white rounded-full border-2 w-[2vw] h-[2vw]  text-xl text-white font-bold hover:bg-white hover:text-black" >v</button>
              {/* <button className="border-white border-2 w-[15vw] p-3 text-2xl text-white font-bold" >Contato</button>
              <button className="border-white border-2 w-[15vw] p-3 text-2xl text-black font-bold bg-white" >Contato</button> */}
            </div>
        </div>
      </div>
      {/* SOBRE ===================================================================== */}
      <div className="w-full h-screen ">
        <h1 className='text-6xl text-black'>Teste do TailwindCss</h1>
      </div>
    </div>
  );
}

export default App;
