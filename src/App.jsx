import { IoMdDownload } from 'react-icons/io'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'

function App() {

  const handleClick = () => {
    toast("Iltimas kútiń...")
  }

  return (
    <div className='h-screen bg-indigo-400 flex justify-center items-center'>
      <Toaster />
      <a href="./latin_qr.zip" download>
        <button title='Fayldı júklep alıw' className='bg-blue-300 size-20 rounded-full flex justify-center items-center shadow hover:bg-blue-200 hover:scale-150 transition-all' type="submit" onClick={handleClick}>
          <IoMdDownload size={25} />
        </button>
      </a>
    </div>
  )
}

export default App
