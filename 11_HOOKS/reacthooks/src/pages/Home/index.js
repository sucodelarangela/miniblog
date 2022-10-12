import { HookUseReducer } from "components/HookUseReducer";
import { HookUseState } from "components/HookUseState";

const Home = () => {
    return (
        <div>
            <HookUseState />
            <HookUseReducer />
        </div>
    );
};

export default Home;