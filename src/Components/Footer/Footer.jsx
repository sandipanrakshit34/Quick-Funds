import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div id="Footer" className="w-full flex justify-center items-center py-10">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 ">
        <div>
        <h1 className="text-[1.8rem] text-white font-semibold">Quick<span className="text-[#92E3A9]">Funds</span></h1>
        <p className='py-2 text-[18x] text-white'>
        Our mission is to empower individuals and <br/>
        businesses by providing them with the<br/>
        financial resources they <br/>
        need to achieve their goals.</p>
        <div className="flex gap-5 py-5">
          <div className="text-[30px] text-white rounded-full"><FaFacebook /></div>
          <div className="text-[15px] text-black p-2 bg-white rounded-full"><FaPhoneAlt /></div>
          <div className="text-[15px] text-black p-2 bg-white rounded-full"><FaLinkedinIn /></div>
          <div className="text-[15px] text-black p-2 bg-white rounded-full"><FaInstagram /></div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="py-2 text-[22px] text-white">OUR SERVICES</h2>
            <p className="text-white py-1">Personal loan</p>
            <p className="text-white py-1">Business loan</p>
            <p className="text-white py-1">Education loan</p>
            <p className="text-white py-1">Auto loan</p>
          </div>
          <div>
            <h2 className="py-2 text-[22px] text-white">CONTACT US</h2>
            <p className="text-white py-1 flex gap-3"><div className="text-[14px] text-black p-2 bg-white rounded-full "><FaPhoneAlt /></div>+91 99999 99999</p>
            <p className="text-white py-1 flex gap-3"><div className="text-[14px] text-black p-2 bg-white rounded-full "><MdMailOutline /></div>xyzfh5@gmail.com</p>
            {/* <p className="text-white py-1 flex gap-3">Address line-1 <br/>  Address line-2, <br/> city, state-pin code</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer