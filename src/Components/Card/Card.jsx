import Vector1 from '../../Images/Vector1.png';
import Vector2 from '../../Images/Vector2.png';
import Vector3 from '../../Images/Vector3.png';
import Button from '../Button/Button';

function Card() {
    const cardData = [
        {
            id: 1,
            image: Vector1,
            heading: "Personal loan",
            paragraph: "Personal loans provide borrowers with flexibility in how they use the funds.",
        },
        {
            id: 2,
            image: Vector2,
            heading: "Business loan",
            paragraph: "Business Loan Services provide financial assistance to businesses for various purposes..",
        },
        {
            id: 3,
            image: Vector3,
            heading: "Auto loan",
            paragraph: "Auto Loan Services provide financing options for individuals businesses to purchase a vehicle.",
        }
    ]
  return (
    <>
        <div className='w-[100%] flex justify-center items-center'>
        <div className='w-[80%] grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
                cardData.map(({image, heading, paragraph}, index) => {
                    return <div key={index} className='p-10 flex flex-col items-center text-center border-[#F0F1F3] border-2 rounded-[39px]' >
                        <img src={image} alt='Vector' />
                        <h1 className='py-2 text-[33px] text-[#1B424C]'>{heading}</h1>
                        <p className='py-2 text-[18x] text-[#6F6969]'>{paragraph}</p>
                        <div className='py-2'><Button value="Apply Now" variant="Secondary" /></div>
                    </div>
                })
            }
        </div>
        </div>
    </>
  )
}

export default Card