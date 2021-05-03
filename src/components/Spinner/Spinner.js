import React from "react"
import { colors } from "../../lib/style/theme";
import { Container } from "./SpinnerStyle";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


export const Spinner = () => {
    return (
        <Container>
            <Loader
                type="ThreeDots"
                color={colors.yellow}
                height="100"
                width="100"
            />
        </Container>
    );
}