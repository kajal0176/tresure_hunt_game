import React from 'react'
import "./style.css"
import { Card } from 'primereact/card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getActiveUser, getUserInfo } from '../../../reducer/user.slice';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 
import { Accordion, AccordionTab } from 'primereact/accordion';


const GameResult = () => {

  const dispatch =  useDispatch();
  const {user} = useSelector(state => state.auth);
 const {activeUser} = useSelector(state => state.user);

  useEffect(()=>{
   
    dispatch(getActiveUser(user.id))
    .unwrap()
    .then((res)=>{
      //  console.log(res)
    })
    .catch((err)=>{
        // console.log(err)
    })

},[])

const wrongansbody=( rowdata)=>{
 return rowdata.wrongAnsCount-1
}
  
 


const userInfoTable = ()=>{
  return (

  
     <Accordion activeIndex={0}>
        {activeUser &&
            <AccordionTab className='mt-5' key={activeUser.email} header={activeUser.email}>
                  <div className='flex justify-content-between '>
                        <div><h3 className=''>Total Time : {activeUser.userInfo.avgTime}</h3></div>
                        <div><h3 className=''>Dead Counts : {activeUser.userInfo.deadCounts}</h3></div>
                        <div><h3 className=''>Soft Skills : {activeUser.userInfo.softSkills}</h3></div>
                        <div><h3 className=''>Accuracy : {activeUser.userInfo.acc}</h3></div>
              
                  </div>    
                  <div className="card mt-5">
                      <DataTable value={activeUser.userClueInfo} tableStyle={{ minWidth: '65rem' }}>
                         
                              <Column key={'clue'} field={'clue'} header={'Clue'} />
                              <Column key={'time'} field={'time'} header={'Completion Time'} />
                              <Column key={'wrongAnsCount'} field={'wrongAnsCount'} header={'Wrong Ans Count'} body={
                                wrongansbody
                              } />
                          
                      </DataTable>
                  </div>

             </AccordionTab>
         }
      </Accordion>
                          
    
  );
}

  const header = (
    <img alt="Card" src={require('./map.jpg')} />
  );

  return (
    <div className='w-full __imgA flex justify-content-center pt-4 '>
         <div className="card  relative">
            <Card title="congratulations!"  header={header} className="w-5 mt-9 m-auto">
                <p className="m-0">
                    You got the Way to your tresure
                </p>
            </Card>
            {userInfoTable()}
        </div>
    </div>
  )
}

export default GameResult

