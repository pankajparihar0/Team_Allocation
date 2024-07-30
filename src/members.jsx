import male from './images/male.png';
import female from "./images/female.png";
import { useState } from 'react';
import { Collapse } from 'bootstrap';

export default function Members({employee,team,changeTeam}) {
    const [groupedteam,setgrouped] = useState(teammembers());
    function teammembers(){
        var teams=[];
        var memberA = employee.filter((employee)=>employee.team === "A");
        var teamA = {team:"A",member:memberA,collapsed :(team==="A")?false:true};
        teams.push(teamA);

        var memberB = employee.filter((employee)=>employee.team === "B");
        var teamB = {team:"B",member:memberB,collapsed :(team==="B")?false:true};
        teams.push(teamB);

        var memberC = employee.filter((employee)=>employee.team === "C");
        var teamC = {team:"C",member:memberC,collapsed :(team==="C")?false:true};
        teams.push(teamC);

        var memberD = employee.filter((employee)=>employee.team === "D");
        var teamD = {team:"D",member:memberD,collapsed :(team==="D")?false:true};
        teams.push(teamD);
        return teams;
    }
    function handelcollesp(e){
        var newgrouped = groupedteam.map((item)=>(item.team === e.currentTarget.id)?{...item,collapsed:!item.collapsed}:item);
        setgrouped(newgrouped);
    }
  return (
    <div>
      {
        groupedteam.map((item)=>{
            return (
                <div key={item.team} className='card mt-2' >
                    <h4 id={item.team}  className='card-header text-secondary bg-white ' onClick={handelcollesp} >
                        Team : {item.team};
                    </h4>
                    <div className={(item.collapsed === true)?'collapse':''}>
                        <hr/>
                        {
                            item.member.map(em=>{
                                return (
                                    <div className='mt-2'>
                                        <h5 className='card-title mt-2'>
                                            <span className='text=dark'> Name :{em.Name}</span>
                                        </h5>
                                        <p>Post : {em.Post}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}
