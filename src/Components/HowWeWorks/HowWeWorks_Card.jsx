function HowWeWorks_Card({ image, heading, paragraph, imageOnRight }, index) {
  return (
    <>
        <div className="alternate-layout my-10" key={index}>
      {imageOnRight ? (
        <div className="flex justify-center items-center w-[100%] my-5">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
            <div className="content">
                <h2 className="text-[33px] font-bold text-[#2A6877] py-5">{heading}</h2>
                <p className="text-[18px] font-normal text-[#424545] py-2">{paragraph}</p>
            </div>
            <div className="image flex justify-center items-center">
                <img src={image} alt="Alternate Layout" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-[100%] my-5">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
            <div className="image flex justify-center items-center">
                <img src={image} alt="Alternate Layout" />
            </div>
            <div className="content">
                <h2 className="text-[33px] font-bold text-[#2A6877] py-5">{heading}</h2>
                <p className="text-[18px] font-normal text-[#424545] py-2">{paragraph}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default HowWeWorks_Card