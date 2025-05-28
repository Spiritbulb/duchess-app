import Image from "next/image"
import Navbar from "./components/Navbar"


export default function Page() {
  return (
    <div>
      <Navbar />
      
      <h1 className="text-3xl font-bold underline">
        Duchess Women's Group
      </h1>
      <p className="text-lg">
        Welcome to the Duchess</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  )
}