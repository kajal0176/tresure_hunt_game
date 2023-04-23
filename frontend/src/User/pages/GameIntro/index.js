import React from 'react'
import "./style.css"
import { Card } from 'primereact/card';

import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

        

const GameIntro = () => {
  const navigate = useNavigate()

  return (
    <div className=' flex flex-column justify-content-center align-items-center'>

      <div className='__image w-full  flex flex-column justify-content-center align-items-center '>
        <div className='mt-0'>
          <h1 className='__welcomeText'>Welcome to Tresure Hunt</h1>
        </div>

      </div>

      <div className="card w-10 mt-5">
        <Card title="Objective of Game">
           <p className="m-0 font-normal __font">
            The puzzle example I provided involves multiple soft skills,
            <p className="mt-3 font-normal __font">including problem-solving, critical thinking, and attention to detail.

              To successfully complete the puzzle,
              the player must use their problem-solving
              skills to decipher each clue and solve each challenge. They must also use critical thinking to analyze the clues and come up with a strategy to progress through the castle and ultimately find the treasure.
            </p>
            <p className="mt-3 font-normal __font">In addition, attention to detail is critical in this puzzle as the player must carefully observe their surroundings to find hidden clues and objects that will help them solve each challenge. These soft skills are important in many areas of life and work, including education, business, and personal development.</p>

          </p>
        </Card>

        <div className='flex justify-content-center mt-5'>
           <Button className='w-5' label="Let's Enter In The game" onClick={()=>{
            navigate('/gameProblem')
           }} severity="warning" />
        </div>

      </div>

    </div>
  )
}

export default GameIntro
