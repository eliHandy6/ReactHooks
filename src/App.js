import React from 'react';
import './App.css';
import ComponentC from './component/ContextAPI/ComponentC';
import ComponentE from './component/ContextAPI/ComponentE';
import MulitpleReducer from './component/UseReducer/MultipleReducer';
import UseReducerObject from './component/UseReducer/UseReducerObject';
// import HookCounter from './component/HookCounter';


// import HookObject from './component/HookObject';
// import HooksArray from './component/HooksArray';
// import CounterTitle from './component/useEffect/CounterTitle';
import DataFetching from './component/useEffect/DataFetching/DataFetching';
import DataFetchingUseReducer from './component/useEffect/DataFetching/DataFetchingUseReducer';
// import FetchingIndividualData from './component/useEffect/DataFetching/FetchingIndividualData';
// import HookMouse from './component/useEffect/HookMouse';
// import IntervalHookCounter from './component/useEffect/IntervalHookCounter';
// import UseEffectwithCleanup from './component/useEffect/UseEffectwithCleanup';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">

     <UserContext.Provider value={'Zack'}>
        <ChannelContext.Provider value={'codevolution'}>
          <ComponentC />

        </ChannelContext.Provider>

     </UserContext.Provider>  

      
      <DataFetchingUseReducer/>

      {/* <MulitpleReducer/> */}

      {/* <UseReducerObject/> */}
      {/* <FetchingIndividualData/> */}
      {/* <DataFetching/ */}
      {/* <IntervalHookCounter/> */}
      {/* <UseEffectwithCleanup/> */}
      {/* <HookMouse/> */}
      {/* <CounterTitle/> */}
      {/* <HooksArray/> */}
      {/* <HookObject/> */}
      {/* <HookCounterTwo/> */}
    </div>
  );
}

export default App;
