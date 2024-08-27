import Modal from "@/components/modal";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
    <div className="p-10 text-center">
      <h1 className="text-3xl mb-5">
          Create Custom Modal
      </h1>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
        Text Modal
      </button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
        Video Modal
      </button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
        Form Modal
      </button>
      <Modal isVisible />
    </div>
    </Fragment>
  )
}