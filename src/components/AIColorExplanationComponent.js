import LoadingComponent from "./general/LoadingComponent";

export default function AIColorExplanationComponent({colorExplanation,explanationLoading}) {
    return explanationLoading ? <LoadingComponent /> :
        <div>
            <h1>AI Color Explanation</h1>
            {colorExplanation != null || '' ? <p>{colorExplanation}</p> : <h1>Click on any button to get an explanation of each color.</h1>}
        </div>
    
}