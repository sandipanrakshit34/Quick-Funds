import { HowWeWorks_Card} from ".."
import Mobile from "../../Images/mobile.png"
import Left_hand from "../../Images/Left_hand.png"
import Card from "../../Images/Card.png"
import Speech_bubble from "../../Images/Speech_bubble.png"


function HowWeWorks() {
  return (
    <div>
      <div className="my-20">
        <div className="text-center my-20">
          <h1 className="text-[40px] text-[#2A6877] font-bold text-center" >How we works ?</h1>
          <p className="text-[16px] font-normal text-[#424545]" >This is a process, how you can get loan for your self.</p>
        </div>
          <HowWeWorks_Card  
            image={Mobile}
            heading="Application"
            paragraph="The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan."
            imageOnRight={false}
          />
          <HowWeWorks_Card  
            image={Left_hand}
            heading="Documentation and Verification"
            paragraph="The bank requests supporting documents from the borrower, such as identification proof, income statements, bank statements, and collateral details (if applicable). The bank verifies the information provided to assess the borrower's creditworthiness and eligibility for the loan."
            imageOnRight={true}
          />
          <HowWeWorks_Card  
            image={Card}
            heading="Credit Assessment"
            paragraph="The bank conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors."
            imageOnRight={false}
          />
          <HowWeWorks_Card  
            image={Speech_bubble}
            heading="Loan Approval"
            paragraph="If the borrower meets the bank's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees."
            imageOnRight={true}
          />
          
        </div>
    </div>
  )
}

export default HowWeWorks