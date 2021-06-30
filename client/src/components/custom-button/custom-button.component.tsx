import { FC } from 'react';
import './custom-button.styles.scss';

// const CustomButton = ({children, ...otherProps}) => (
//     <button className="custom-button" {...otherProps}>
//         {children}
//     </button>
// );

interface Props {
    // any props that come into the component
}

const CustomButton: FC<Props> = ({ children, ...props }) => (
    <button {...props}>{children}</button>
);

export default CustomButton;