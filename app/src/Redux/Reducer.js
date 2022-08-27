import{ADD_TASK,DELETE_TASK,DONE_TASK,UPDATE_TASK} from './Types';
const initState=[
    {id:0,text:"playing football",done:false},
    {
id:1,text:"playing tennis",done:false},
];
const Reducer=(state=initState,action)=>{
    switch(action.type){
        case DELETE_TASK: return state.filter((elt)=>elt.id !==action.payload);
        case ADD_TASK: return [...state,action.payload];
        case UPDATE_TASK:return state.map((elt)=>{
            if(elt.id===action.payload.id){
                return {...elt,text:action.payload.text};
            }
            else{
                return elt;
            }
        });
        case DONE_TASK: return state.map((el)=>{
            if(el.id===action.payload && el.done){
                return {...el,done:false}; 
            }
            if(el.id===action.payload && !el.done){
                return {...el,done:true};
            }
            else{
                return el
            }
        });
        default:return state;
    }
};
export default Reducer;