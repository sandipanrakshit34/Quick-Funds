import Table from '../../Images/Table.png';
import Button from '../Button/Button';

function About_us() {
  return (
    <div className="w-[100%] flex justify-center items-center py-10 bg-[#c9e4de96]">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-[100%] md:w-[90%]">
                <h1 className="text-[40px] text-[#2A6877] font-bold mb-10" >About us</h1>
                <img src={Table} alt='Table' />
                <p className="text-[16px] font-normal text-[#424545] mt-10">QuickFunds- Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet your unique needs. Empowering you to achieve your financial goals. Apply online today!</p>
            </div>
            <div className="flex justify-center items-center">
                <div className='bg-white rounded-3xl w-[90%] md:w-[70%] p-8'>
                    <label className='text-[16px] p-2'>Your Name</label><br/>
                    <input className='border-2 rounded-full p-2 pl-5 w-full mb-4' placeholder='' /><br/>
                    <label className='text-[16px] p-2'>Phone number</label><br/>
                    <input className='border-2 rounded-full p-2 pl-5 w-full mb-4' placeholder='' /><br/>
                    <label className='text-[16px] p-2'>Email address</label><br/>
                    <input className='border-2 rounded-full p-2 pl-5 w-full mb-4' placeholder='' /><br/>
                    <div className='flex justify-center mt-5'>
                        <Button value="SEND" variant="Primary"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_us