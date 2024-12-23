import { useState } from "react";

function CRUD() {
  const [data, setData] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState();

  const handleAddData = (e) => {
    e.preventDefault();

    const addData = {
      id: Date.now(),
      itemName:  itemName,
      itemPrice: itemPrice,
    };

    setData([...data, addData]);

    // Clear input fields after adding data
    setItemName("");
    setItemPrice("");
  };

  if (setItemName == "") {
    alert("Kindly Enter Data");
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 bg-[#2A6877] p-10">
      <form
        onSubmit={handleAddData} // Corrected to onSubmit instead of onChange
        className="w-[40%] flex flex-col justify-center items-center gap-2"
      >
        <input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          type="text"
          placeholder="Enter Item Name"
          className="w-full border-2 border-[#2A6877] rounded-xl p-[10px] shadow-xl"
        />

        <input
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          type="number"
          placeholder="Enter Item Price"
          className="w-full border-2 border-[#2A6877] rounded-xl p-[10px] shadow-xl"
        />

        <button
          type="submit" // Specify type as submit
          className="px-[20px] py-[12px] bg-white border-[#2A6877] border-2 rounded-full text-[#2A6877]"
        >
          SUBMIT DATA
        </button>
      </form>

      <div className="">
        <table className="gap-5">
          {data.map(({ itemName, itemPrice, id }) => (
            <tr key={id} className="bg-[#ffffff] border-2 border-[#2A6877]">
              <td className="p-5 ">Name: {itemName}</td>
              <td className="p-5 ">Price: {itemPrice}</td>
              <td className="p-5 ">
                <button
                  className="px-[20px] py-[12px] bg-[#2A6877] border-2 rounded-full text-white"
                >
                  Edit
                </button>
              </td>
              <td className="p-5 ">
                <button
                  className="px-[20px] py-[12px] bg-[#2A6877] border-2 rounded-full text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default CRUD;
