import React from 'react'
import { Card } from 'primereact/card';
import "./style.css"
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from 'react';      
import { useDispatch } from "react-redux";
import { postUserInfo } from '../../../reducer/user.slice';


const GameProblem = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  useEffect(()=>{
    const data = {
      email:user?.email,
      userInfo:{
          avgTime:0,
          deadCounts:0,
          acc:0,
          softSkills:'',
          clueNum:0,
          wrongAnsCount:1,
          deadCounts:0
      },
      userClueInfo:[]
    }

    dispatch(postUserInfo(data))
    .unwrap()
    .then((res)=>{
        //console.log(res)
    })
    .catch((err)=>{
        //console.log(err)
    })

  },[])

  return (
    <div className='w-full m-auto __img'>
      <div className='__imgDark w-full'></div>
       <div className='z-1 mt-8 absolute w-full m-auto pt-6 '>
          <Card title="Problem " className='w-9 __card m-auto 1 mt-8 '>
           <p className="m-0 font-normal __font">
           A group of treasure hunters are searching for a lost treasure in a remote jungle. They have found an old map that leads to the treasure, but the map is incomplete and they must solve a series of clues to find the missing pieces and ultimately discover the location of the treasure.
            </p>

          <p className='mt-3 font-normal __font'>
          As the treasure hunters solve each clue and find the missing pieces of the map, they get closer to discovering the location of the lost treasure. The challenge for the treasure hunters is to work together to solve each clue and navigate through the jungle to find the treasure.
          </p>


          </Card>
          <div className='flex justify-content-center mt-5'>
           <Button className='w-2' label="Play" severity="warning"  onClick={()=>{
            navigate('/clue')
           }} />
          </div>

       </div>
    </div>
  )
}

export default GameProblem