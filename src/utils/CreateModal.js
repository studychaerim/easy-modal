import EasyModal from "../components/EasyModal";

const CreateModal = () => {
  return function EasymodalFactory({ isVisible, message, backgroundColor, duration, radius, width, height, color, bottom, left }) {
    return (
      <EasyModal 
        isVisible={isVisible}
        bottom={bottom}
        duration={duration}
        message={message}
        backgroundColor={backgroundColor}
        radius={radius}
        width={width}
        height={height}
        color={color}
        left={left}
      />);
};
}

export default CreateModal;