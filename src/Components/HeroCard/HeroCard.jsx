import Illustartion from '../../Images/illustartion.png'
import Button from '../Button/Button'

function HeroCard() {
  return (
    <>
      <div className="flex justify-center items-center my-14">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className='text-7xl font-semibold text-[#2A6877]'>Quick and Easy Loans for Your Financial Needs.</h1>
              <p className='text-[#424545] py-4 px-2'>Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.</p>
              <Button value="Get started" variant="Secondary"/>
            </div>
            <div>
                <img src={Illustartion} alt='Illustartion' />
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroCard