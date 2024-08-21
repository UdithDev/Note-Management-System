"use client";
import { useRouter } from "next/navigation";
const Header = () => {

  const router=useRouter();
  const handleAddNewNote=()=>{
    console.log("handleAddNewNote Work")
    router.push("/add-new-note")
  }
  return (
    <div
      className="bg-white border-b-2  h-20r flex flex-row flex-wrap justify-between items-center"
      id="header"
    >
      <div className=" p-5 font-bold text-4xl text-gray-700 ">Latest Notes</div>
      <button className="text-white border-2 bg-green-600 border-gray-400 rounded-md mr-8 p-2 font-bold hover:bg-green-700 hover:font-extrabold hover:border-gray-400"
      onClick={handleAddNewNote}
      >
        + Add New Notes
      </button>
    </div>
  );
};

export default Header;
// display: flex;
// flex-direction: row;
// align-content: center;
// flex-wrap: wrap;
// align-items: center;
// justify-content: space-between;
