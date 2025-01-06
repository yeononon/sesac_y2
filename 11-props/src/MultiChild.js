import { Children } from 'react';
import './MultiChild.css';

// #2. 다중 요소 전달
const MultiChild = ({ Children }) => {
    return <div>{Children}</div>;
};
export default MultiChild;
