
import male from './images/male.png';
import female from "./images/female.png";

export default function Employee({employee,team,changeTeam,editTeam}) {
  return (
    <div className='container'>
        <div className="row justify-content-center m-2">
            <div className="col-6">
                <select className="form-select form-select-lg" name="" id="" value={team} onChange={changeTeam}>
                    <option value="A">Team A</option>
                    <option value="B">Team B</option>
                    <option value="C">Team C</option>
                    <option value="D">Team D</option>
                </select>
            </div>
        </div>
        <div className="row justify-content-center m-2">
            <div className="col-6">
                <div className="collection">
                    {
                        employee.map((em) =>(
                            
                            <div  id={em.id} className={(em.team === team)? "card m-2 standout":"card m-2 "}  style={{cursor:"pointer"}} onClick={editTeam}>:
                            
                                
                                {
                                    (em.gender==='male')?<img src={male} className="card-img-top"/>:<img src={female} className="card-img-top"/>
                                }
                                
                                <div className="card-body">
                                    <h5 className="car-title">Name:{em.Name}</h5>
                                    <p className="card-body"><b>Post:</b>{em.Post}</p>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
