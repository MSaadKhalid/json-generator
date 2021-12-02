import React, { useState } from "react";
import axios from "axios";

function App() {
  const [event, setEvent] = useState({
    id: "",
    name: "",
    type: "Pro",
    image: "",
    tags: "",
    category: "Websites",
    subcategory: "",
    tab: "Blueprints"
  })

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  }


  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (event.id && event.name && event.subcategory && event.image && event.tags !== "") {
      axios.post('http://localhost:2000/', event).then(res => {
        console.log(res)
      })
    } else {
      alert("Please Enter Value")
    }
  }

  return (
    <div className="2xl:container 2xl:mx-auto flex justify-center items-center flex-col py-12 lg:px-20 md:px-6 px-4 ">
      <h1 className="font-semibold text-lg py-4"> JSON Generator</h1>
      <div className="w-full md:w-2/3 xl:w-2/4  rounded-md shadow-lg p-5 flex justify-start items-start flex-col space-y-4">
        <form onSubmit={formSubmitHandler} className="w-full flex justify-start items-start flex-col  space-y-4">
          <div className="w-full flex justify-start items-start flex-col  space-y-2">
            <label className="text-sm font-medium">id</label>
            <input onChange={(e) => onInputChange(e)} className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" value={event.id} type="text" name="id" />
          </div>
          <div className="w-full flex justify-start items-start flex-col  space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" value={event.name} onChange={(e) => onInputChange(e)} type="text" name="name" />
          </div>
          <div className="w-full flex justify-start items-start flex-col  space-y-1">
            <label className="text-sm font-medium">Type</label>
            <select className="border-b w-full py-1 focus:outline-none" name="type" value={event.type} onChange={(e) => onInputChange(e)} >
              <option value="Pro">Pro</option>
              <option value="Community">Community</option>
              <option value="Public">Public</option>
            </select>
          </div>
          <div className="w-full flex justify-start items-start flex-col  space-y-2">
            <label className="text-sm font-medium">Image</label>
            <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" value={event.image} onChange={(e) => onInputChange(e)} type="text" name="image" />
          </div>
          <div className="w-full flex justify-start items-start flex-col  space-y-2">
            <label className="text-sm font-medium">Tags</label>
            <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" value={event.tags} onChange={(e) => onInputChange(e)} type="text" name="tags" />
          </div>
          <div className="w-full flex justify-start items-start flex-col  space-y-1">
            <label className="text-sm font-medium">Category</label>
            <select className="border-b w-full py-1 focus:outline-none" name="category" value={event.category} onChange={(e) => onInputChange(e)} >
              <option value="Websites">Websites</option>
              <option value="Marketing">Marketing</option>
              <option value="Dashboards">Dashboards</option>
              <option value="Web Applications">Web Applications</option>
              <option value="Stores">Stores</option>
              <option value="Ecommerce">Ecommerce</option>
            </select>
          </div>
          <div className="w-full flex justify-start items-start flex-col  space-y-2">
            <label className="text-sm font-medium">Sub Category</label>
            <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" value={event.subcategory} onChange={(e) => onInputChange(e)} type="text" name="subcategory" />
          </div>
          <div className="w-full flex justify-start items-start flex-col  space-y-1">
            <label className="text-sm font-medium">Tab</label>
            <select className="border-b w-full py-1 focus:outline-none" name="tab" value={event.tab} onChange={(e) => onInputChange(e)}  >
              <option value="Blueprints">Blueprints</option>
              <option value="Ui Kits">Ui Kits</option>
            </select>
          </div>
          <div className="py-3 w-full">
            <button type="submit" className=" w-full rounded py-2 bg-gray-800 text-white hover:bg-gray-700 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
