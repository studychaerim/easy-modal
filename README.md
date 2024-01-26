## Install

```bash
npm install react-very-easy-modal
```

## Usage

### Single Modal

```jsx live
import { createModal, useModal } from "react-very-easy-modal";

function App() {
    const Modal = createModal();
    const { isVisible, showModal } = useModal();

    return (
        <div>
            // Provide the duration(ms) to maintain the modal as an argument to the 'showModal' function.
            <button onClick={() => showModal(1000)}>click</button>

            // Duration prop should be same as the argument to the 'showModal' function.
            <Modal
              isVisible={isVisible}
              duration={1000}
              message={"Clicked!"}
              backgroundColor="rgba(0,0,0,0.7)"
            />
        </div>
    );
}

export default App;
```