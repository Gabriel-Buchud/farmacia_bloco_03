
function Home() {
  return (
      <>
          <div className="flex justify-center bg-white">
              <div className='grid grid-cols-2 text-black container'>
                  <div className="flex flex-col justify-center items-center gap-4 py-4">
                      <h2 className='font-bold text-5xl'>
                          Sejam bem vindos!
                      </h2>
                      <p className='text-xl'>Aqui você encontra os melhores Preços!</p>

                      <div className="flex justify-around gap-4">
                          <div className='border-2 text-whiteborder-white bg-white px-4 py-2 border-solid rounded'>
                              Novo Produto
                          </div>
                      </div>
                  </div>

                  <div className="flex justify-center">
                      <img
                          src="https://img.freepik.com/fotos-gratis/farmaceutica-jovem-desinfetando-maos-com-sanitazer_1303-25537.jpg?t=st=1725454050~exp=1725457650~hmac=08fbfaa0571bf9768c85f739744357e7775bce57fb286903e3ba086174c236fd&w=740"
                          alt="Imagem Página Home"
                          className='w-2/3'
                      />
                  </div>
              </div>
          </div>
          
      </>
  )
}

export default Home