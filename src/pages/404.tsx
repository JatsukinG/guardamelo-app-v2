import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '@components'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
      <div className="w-full min-h-screen flex bg-[#ffdca0]">
        <div className="container m-auto max-w-5xl flex flex-col items-center">
          <img src="/images/404.jpg" alt="" className="w-full h-auto runded-2xl"/>
          <p className="text-stone-600 font-bold text-base md:text-lg text-center">
            Ups!, Parece que no encontramos la pagina que estas buscando.
          </p>
          <CustomButton
              className="mt-8 font-bold"
              onClick={() => navigate('/')}>
            <FaArrowLeft className="me-2"/>
            Regresar al inicio
          </CustomButton>
        </div>
      </div>
  )
}

export default NotFoundPage