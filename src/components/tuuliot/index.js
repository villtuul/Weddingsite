import React, {useState} from "react";

import StartPage from "../StartPage";
import InfoPage from "../InfoPage";

const Tuuliot = () => {
    const [passcodeCorrect, setRuning] = useState(false);
    return passcodeCorrect ? (
        <InfoPage/>
    ) : (
        <StartPage/>
    );
};

export default Tuuliot;