export default function Event(props) {
const timeEventAm = [1,2,3,4,5,6,7,8,9,10,11,12];
const timeEventPm = [1,2,3,4,5,6,7,8,9,10,11,12];  
return (     
    <div className="timegrid-container">
        <div style={{fontSize: "11px"}}>
            <div data-timezone-index="0" style={{position: "absolute", top: "0", width: "100%", height: "100%", left:" 0%", borderRight: "1px solid #e5e5e5", backgroungColor: "white"}}>
                {
                    timeEventAm.map((val)=>(
                        <div className="timegrid-hour" style={{height: "52px", color: "#bbb", fontWeight: "normal"}}>
                                    <span >{val} AM</span>
                                    <p><bold>Entity</bold> Artificial Inteligent and virtual reality
                                   <italic> Move to </italic> reality to shedule
                                  <bold>  Assignd by</bold>  Arvind Netto</p>
                                </div>
                    ))
                }

                {
                    timeEventPm.map((val)=>(
                        <div className="timegrid-hour" style={{height: "52px", color: "#bbb", fontWeight: "normal"}}>
                                    <span >{val} PM</span>
                                    <p><bold>115 Entity</bold>
                                    <bold>Environment </bold> reality to shedule
                                    <italic> Status</italic>Publised</p>
                                    
                                </div>
                    ))
                }               
            </div>
        </div>
    </div>       
    )
}

 
