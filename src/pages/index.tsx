import Modal from "@/components/modal"
import Link from "next/link"
import { Fragment, useState } from "react"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)

  return (
    <Fragment>
      <div className="p-10 text-center bg-gradient-to-b from-red-800 to-black min-h-screen flex items-center justify-center">
        <div className="text-center bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-4xl">
          <h1 className="text-4xl mb-8 text-red-500 font-serif">Create Custom Modal</h1>
          <div className="space-x-4">
            <button
              className="bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 focus:outline-none font-serif text-sm rounded-full px-6 py-3 shadow-md transition-transform transform hover:scale-105"
              onClick={() => setShowModal(true)}
            >
              Text Modal
            </button>
            <button
              className="bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 focus:outline-none font-serif text-sm rounded-full px-6 py-3 shadow-md transition-transform transform hover:scale-105"
              onClick={() => setShowModal2(true)}
            >
              Video Modal
            </button>
            <button
              className="bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 focus:outline-none font-serif text-sm rounded-full px-6 py-3 shadow-md transition-transform transform hover:scale-105"
              onClick={() => setShowModal3(true)}
            >
              Form Modal
            </button>
          </div>

          <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div className="p-6 bg-gray-800 rounded-xl shadow-2xl">
              <h1 className="text-3xl font-serif text-red-500 mb-4">Title</h1>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem minus animi soluta.
                Deleniti quasi vel ex odit unde voluptas eaque cupiditate. Corrupti accusantium facilis autem expedita
                recusandae voluptate earum.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem minus animi soluta.
                Deleniti quasi vel ex odit unde voluptas eaque cupiditate. Corrupti accusantium facilis autem expedita
                recusandae voluptate earum.
              </p>
            </div>
          </Modal>

          <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
            <div className="flex justify-center items-center p-6 bg-gray-800 rounded-xl shadow-2xl">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/By9wCB9IZp0?si=TasW1PmZt_qxooWe"
                title="YouTube video player"
                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </Modal>

          <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
            <div className="p-6 bg-gray-900 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-serif mb-4 text-red-500">Form</h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-gray-400">
                    <input
                      type="checkbox"
                      className="form-checkbox text-red-600"
                    />
                    <span className="ml-2">Remember Me</span>
                  </label>
                  <Link href="#" className="text-red-600 hover:underline">Forgot Password?</Link>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 font-serif rounded-lg px-6 py-3 shadow-md transition-transform transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
              <div className="mt-6 text-gray-400 text-center">
                <p>Don&apos;t have an account? <Link href="#" className="text-red-600 hover:underline">Sign Up</Link></p>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </Fragment>
  )
}
