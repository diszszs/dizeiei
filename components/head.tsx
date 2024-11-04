export default function Head() {
  return (
    <header
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1525522819526-d571040e1607?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  )`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
        height: "80vh", 
        width: "100%", 
      }}
      className="h-screen w-full relative rounded-b-lg overflow-hidden"
    >
      <div className="container mt-1 mx-auto px-3 py-0">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center ">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h1 className="text-5xl font-bold text-white sm:text-3xl"style={{ textShadow: '3px 3px 3px black' }}>Music store</h1>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button" style={{ textShadow: '3px 3px 3px black' }}
              >
                Home
              </button>
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button" style={{ textShadow: '3px 3px 3px black' }}
              >
                Our Shop
              </button>
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button" style={{ textShadow: '3px 3px 3px black' }}
              >
                Product Details
              </button>
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button"
              >
                Contact Us
              </button>
              <button
                className="inline-block rounded-full bg-orange-500 px-5 py-3 text-lg font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                SIGN IN
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between mt-12">
            <div className="text-left lg:w-1/2">
              <h1 className="text-4xl font-bold text-white px-50 py-0"style={{ textShadow: '3px 3px 3px black' }}>WELCOME TO MUSIC STORE</h1>
              <h2 className="text-4xl font-bold text-white mt-4  py-0"style={{ textShadow: '3px 3px 3px black' }}>BEST MUSIC SITE EVER!</h2>
              <p className="text-2xl font-medium  text-white mt-4  py-0"style={{ textShadow: '3px 3px 3px black' }}>
              This music store was established in 1990 by a group of musicians passionate about music and creativity. The store's goal is to promote a love for music and provide high-quality instruments to support both beginners and experienced musicians.</p>
           
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
