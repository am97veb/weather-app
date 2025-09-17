import { Message, SpinnerWrapper, Wrapper } from "./styled";
import spinnerIcon  from "../../assets/spinnerIcon.svg";

export const Loading = () => (
    <Wrapper>
      <Message>Loading data, please wait...</Message>
      <SpinnerWrapper>
        <img src={spinnerIcon} alt="loading icon"/>
      </SpinnerWrapper>
    </Wrapper>
)