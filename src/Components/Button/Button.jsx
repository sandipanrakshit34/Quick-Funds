function Button({value, variant}, index) {
  return (
    <>
      <div key={index}>
      {
        variant === "Primary" && (
          <button key={index} className={"px-[20px] py-[12px] bg-[#2A6877] border-[#2A6877] rounded-full text-white "}>
            {value}
          </button>
        )
      }
      {
        variant === "Secondary" && (
          <button key={index} className="px-[20px] py-[12px] bg-white border-[#2A6877] border-2 rounded-full text-[#2A6877] ">
            {value}
          </button>
        )
      }
      </div>
    </>
  )
}

export default Button