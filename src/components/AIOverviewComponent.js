
export default function AIOverviewComponent({description}){
    return (
        <div>
         <h2>AI Overview of Album</h2> 
         <p style ={{height: '100%', overflow: 'scroll'}}>{description}</p>
     </div>)
    
}