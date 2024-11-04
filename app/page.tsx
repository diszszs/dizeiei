export default function Home() {
  
    return (<>
    <div className="bg-orange-100 min-h-screen">
      <header className="flex justify-between items-center p-5 ">
          <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-3xl">home</span>
              <h1 className="text-2xl font-bold">CoC</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-lg text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-lg text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-lg text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="md:hidden flex flex-col space-y-1 cursor-pointer">
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
          </div>
        </header>
  
      <hr className="border-t border-gray-400 my-4"></hr>
  
      <section className="flex items-center justify-content: space-between h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1533673662755-98c661c601a1?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",}}>
          <div className=" bg-opacity-70 p-10 text-center max-w-lg">
              <h2 className="flex items-center text-2xl text-white " style={{ textShadow: '3px 3px 3px black' }}>Lorem ipsum dolor</h2>
              <h1 className="flex text-5xl font-bold text-white  mt-4 mb-6" style={{ textShadow: '3px 3px 3px black' }}>WE ARE THE BEST</h1>
              <p className=" text-white mb-8" style={{ textShadow: '3px 3px 3px black' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quis labore odio magni minima suscipit cum nostrum laudantium maiores aperiam fugit illum culpa.</p>
              <button  className="flex bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-gray-800" style={{ textShadow: '2px 2px 2px orange' }}>Join us now</button>
          </div>
      </section>
  
      <section className="py-8">
          <hr className="border-t border-gray-400 mb-6"></hr>
          <div className="flex justify-around mb-6">
              <span className="text-lg font-semibold">SERVICE 1</span>
              <span className="text-lg font-semibold">SERVICE 2</span>
              <span className="text-lg font-semibold hidden md:inline-flex">SERVICE 3</span>
          </div>
          <hr className="border-t border-gray-400"></hr>
      </section>
  
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-12">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", }} ></div>
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",}} ></div>
          <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1585128792020-803d29415281?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",}}></div>
          <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1686090449342-f8f94e6cbb9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",}}></div>
      </section>
  
      <footer className="bg-white-50 py-8 text-center"> 
          <hr className="border-t border-gray-400 mb-6"></hr>
          <p className="mt-4 text-black">Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem atque veritatis voluptatibus ex dolore.</p>
          <p className="mt-4 text-black">Copyright © All Right Reserved</p>
      </footer>
      </div>
      
      </>)
  }
  
  