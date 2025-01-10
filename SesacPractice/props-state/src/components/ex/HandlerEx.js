import { Component, useState } from 'react';

// export default class HandlerEx extends Component {
//   state = {
//     First: 'Hello World!',
//   };
//   render() {
//     const { First } = this.state;
//     return (
//       <div>
//         <p>{First}</p>
//         <button onClick={this.setState({ First: 'Goodbye World!' })}>
//           클릭
//         </button>
//       </div>
//     );
//   }
// }

export default function HandlerEx() {
  const [First, setFirst] = useState('Hello World!');

  const Last = () => {
    setFirst('Goodbye World!');
  };
  return (
    <div>
      <p className="state">{First}</p>
      <button onClick={Last}>클릭</button>
    </div>
  );
}
