interface ButtonProps {
    classes: string;
    clickHandler: any
}
const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
        <>
            <button onClick={props.clickHandler} className={props.classes}>{props.children}</button>
        </>
    );
};

export default CustomButton;