import './App.css';
import Button from './components/Button';
import Divine from './components/Divine';
import {useState} from 'react';
import Button2 from './components/Button2';

function App() {
  const [cases, changeCase] = useState(0);

  //states bài trên lớp
  const[text, TextChange] = useState('MindX')

  //states bài tập 2
  const [status,statusChange] = useState(0);
  const [btnText,btnTextChange] = useState('Hidden')
  const [visible,visibleChange] = useState('Show')

  switch (cases) {
    case 0: 
      return (
        <div className='container'>
          <Button text='Bài tập trên lớp' onClick={()=>{changeCase(1)}}/>
          <Button text='Bài tập 1' onClick={()=>{changeCase(2)}}/>
          <Button text='Bài tập 2' onClick={()=>{changeCase(3)}}/>
          <Button text='Bài tập 3' onClick={()=>{changeCase(4)}}/>
        </div>
      );
      break;
    case 1:
      const change = () => {
        TextChange('MindX Teens')
      }

      return (
        <div className='container'>
          <Button useTo='backBtn' text='Quay lại' onClick={()=>{changeCase(0)}}/>
          <Button onClick={change} text='Change to MindX Teens' color='green'/>
          <div>{text}</div>
        </div>
      );
      break;
    case 2: 
      return (
        <div className='container'>
          <Button useTo='backBtn' text='Quay lại' onClick={()=>{changeCase(0)}}/>
          <Divine color='red' shape='circle'/>
          <Divine color='yellow' shape='square'/>
        </div>
      );
      break;
    case 3: 
      const btnEvent = () => {
        if(status === 0) {
          statusChange(1)
          btnTextChange('Show')
          visibleChange('Hidden')
        } else {
          statusChange(0)
          btnTextChange('Hidden')
          visibleChange('Show')
        }
      }
    
      return (
        <div className='container'>
          <Button useTo='backBtn' text='Quay lại' onClick={()=>{changeCase(0)}}/>
          <Button onClick={btnEvent} text={btnText}/>
          <div className={visible}>Đây là text</div>
        </div>
      );
      break;
    case 4:
      return (
        <div className='container'>
          <Button useTo='backBtn' text='Quay lại' onClick={()=>{changeCase(0)}}/>
          <Button2 text='Chiếc thuyền ngoài xa'/>
          <Button2 text='Vợ chồng A Phủ'/>
          <Button2 text='Vợ nhặt'/>
          <Button2 text='Tây tiến'/>
          <Button2 text='Rừng Xà Nu'/>
        </div>
      );

  }
}

export default App;

//---------------------------------- Bài tập trong buổi học -----------------------------------//

// function App() {

//   const[text, TextChange] = useState('MindX')

//   const change = () => {
//     TextChange('MindX Teens')
//   }

//   return (
//     <div className='container'>
//       <Button onClick={change} text='Change to MindX Teens' color='green'/>
//       <div>{text}</div>
//     </div>
//   );
// }
// export default App


//----------------------------------------- Bài tập 1 -----------------------------------------//

// function App() {

//   return (
//     <div className='container'>
//       <Divine color='red' shape='circle'/>
//       <Divine color='yellow' shape='square'/>
//     </div>
//   );
// }
// export default App


//----------------------------------------- Bài tập 2 -----------------------------------------//

// function App() {

//   const [status,statusChange] = useState(0);
//   const [btnText,btnTextChange] = useState('Hidden')
//   const [visible,visibleChange] = useState('Show')

//   const btnEvent = () => {
//     if(status === 0) {
//       statusChange(1)
//       btnTextChange('Show')
//       visibleChange('Hidden')
//     } else {
//       statusChange(0)
//       btnTextChange('Hidden')
//       visibleChange('Show')
//     }
//   }

//   return (
//     <div className='container'>
//       <Button onClick={btnEvent} text={btnText}/>
//       <div className={visible}>Đây là text</div>
//     </div>
//   );
// }
// export default App


//----------------------------------------- Bài tập 3 -----------------------------------------//

// function App() {

//   return (
//     <div className='container'>
//       <Button2 text='Chiếc thuyền ngoài xa'/>
//       <Button2 text='Vợ chồng A Phủ'/>
//       <Button2 text='Vợ nhặt'/>
//       <Button2 text='Tây tiến'/>
//       <Button2 text='Rừng Xà Nu'/>
//     </div>
//   );
// }
// export default App