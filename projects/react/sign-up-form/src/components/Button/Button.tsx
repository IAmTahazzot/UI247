import React, {FC, ReactNode} from "react";

interface props {
   children: ReactNode;
   type: 'submit'|'button'|'reset'|undefined;
}

const Button: FC<props> = ({children, type}) : JSX.Element => {
    return (
        <button type={type}>{children}</button>
    );
};

export default Button;