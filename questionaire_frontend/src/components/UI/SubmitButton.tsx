import CustomButton from "./CustomButton";
import SpinnerButton from "./SpinnerButton";

interface ButtonProps {
    isLoading: boolean;
    clickHandler: any,
    classes: string
}
const SubmitButton: React.FC<ButtonProps> = (props) => {
    return (
        <>
            {props.isLoading ?
                <SpinnerButton>Loading...</SpinnerButton>
                : <CustomButton clickHandler={props.clickHandler} classes={props.classes}>
                    {props.children}
                </CustomButton>}
        </>
    );
};

export default SubmitButton;