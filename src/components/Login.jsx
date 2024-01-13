import {  Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";

const Login = () => {


  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm()

    const handleForm = ( newUser ) =>{
      handlerCreateBook(newUser)
    }


    return (
        <>
        <section className='lg:w-1/2 md:w-2/3 mx-auto'>

   
          <h3 className="text-purple-400 tracking-widest font-medium title-font mb-4">
          login</h3>

          <form onSubmit={handleSubmit(handleForm)} className='flex flex-wrap -m-2' >
            
            <div className='p-2 w-full'>
              <div className='relative'>

                {/* <label htmlFor="title" className='eading-7 text-sm text-gray-400'>Nombre:</label>
                <input type="text" name="name" id="name" { ...register("name", { required: true })} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5' />

                {errors.name?.type === 'required' && <Alert text={"El campo nombre es requerido"}/>} */}

                <label htmlFor="writer" className='eading-7 text-sm text-gray-400'>Email:</label>
                <input type="email" name="email" id="email" { ...register("name", {  required: true
                })} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5'/>

                {errors.email?.type === 'required' && <Alert text={"El campo emial es requerido"}/>}

                <label htmlFor="writer" className='eading-7 text-sm text-gray-400'>Contraseña:</label>
                <input type="password" name="password" id="password" { ...register("password", {  required: true
                })} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5'/>

                {errors.email?.type === 'required' && <Alert text={"El campo password es requerido"}/>}


                <button type="submit" className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5'> Login🐱‍🚀</button>
              </div>
              
            </div>
          </form>
          { isSubmitSuccessful && <Modal message={"✋🏽 Bienvenida"}/> }
        </section>
        <div className='flex items-center mt-5 text-center md:w-2/3 '>
                    <h5 className='text-xs text-purple-400  font-medium title-font'> ¿Es tu primer día?</h5>
                    <button className='ml-4  text-gray-400 bg-gray-800 border-0 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'><Link to={"/register"}>Register</Link></button>
        </div>
        </>
        
      )
}

export default Login