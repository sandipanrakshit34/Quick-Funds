import Button from "../Button/Button"
import Card from "../Card/Card"

function OurServices() {
  return (
    <div className="bg-[#c9e4de96]">
      <h1 className="text-[40px] text-[#2A6877] font-bold text-center py-10" >Our Services</h1>
      <Card />
      <div className="flex justify-center items-center py-10">
        <Button value="View more" variant="Primary" />
      </div>
    </div>
  )
}

export default OurServices;