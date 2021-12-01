import React,{useState} from "react";

function App() {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [tab, setTab] = useState("");
  return (
    <div className="2xl:container 2xl:mx-auto flex justify-center items-center flex-col py-12 lg:px-20 md:px-6 px-4 ">
    <h1 className="font-semibold text-lg py-4"> JSON Generator</h1>
    <div className="w-96 rounded-md shadow-lg p-5 flex justify-start items-start flex-col space-y-4">
    <form className="w-full flex justify-start items-start flex-col  space-y-4">
     <div className="w-full flex justify-start items-start flex-col  space-y-2">
     <label className="text-sm font-medium">id</label>
      <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" type="text" name="id" />
      </div>
      <div className="w-full flex justify-start items-start flex-col  space-y-2">
     <label className="text-sm font-medium">Name</label>
      <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" type="text" name="name" />
      </div>
      <div className="w-full flex justify-start items-start flex-col  space-y-1">
     <label className="text-sm font-medium">Type</label>
     <select className="border-b w-full py-1 focus:outline-none" value={type}  onChange={(e) => setType(e.target.value) } >
      <option value="Pro">Pro</option>
      <option value="Community">Community</option>
      <option value="Public">Public</option>
      </select>
      </div>
      <div className="w-full flex justify-start items-start flex-col  space-y-2">
     <label className="text-sm font-medium">Image</label>
      <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" type="text" name="image" />
      </div>
      <div className="w-full flex justify-start items-start flex-col  space-y-2">
     <label className="text-sm font-medium">Tags</label>
      <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" type="text" name="tags" />
      </div>
      <div className="w-full flex justify-start items-start flex-col  space-y-1">
     <label className="text-sm font-medium">Category</label>
     <select className="border-b w-full py-1 focus:outline-none" value={category}  onChange={(e) => setCategory(e.target.value2) } >
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
      <input className="w-full p-1 px-2 border  focus:outline-none rounded shadow-sm" type="text" name="subCategory" />
      </div>
      <div className="w-full flex justify-start items-start flex-col  space-y-1">
     <label className="text-sm font-medium">Tab</label>
     <select className="border-b w-full py-1 focus:outline-none" value={tab}  onChange={(e) => setTab(e.target.value) } >
      <option value="Blueprints">Blueprints</option>
      <option value="Ui Kits">Ui Kits</option>
      </select>
      </div>
      <div className="py-3 w-full">
      <button className=" w-full rounded py-2 bg-gray-800 text-white hover:bg-gray-700 ">
      Submit
      </button>
      </div>
      </form>
    </div>
    </div>
  );
}

export default App;
