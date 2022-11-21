import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import AlertBase from "components/alerts/alert-base/alert-base";
import PortalWrap from "../portal-wrap/portal-wrap";
import useAlert from "store/alert/useAlert";
import useTheme from "store/common/useTheme";

import { IAlert } from "store/alert/types";
import { IThemeStyleProps } from "constants/types/common-types";

const transitionName = `fade`;

const AlertWrapper = () => {
  const { alerts } = useAlert();
  const { isDarkTheme } = useTheme();

  return (
    <PortalWrap>
      <StyledTransitionGroup>
        {alerts.map((alert: IAlert) => (
          <CSSTransition
            key={alert.id}
            unmountOnExit
            timeout={500}
            classNames={transitionName}
          >
            <Alert isDarkTheme={isDarkTheme}>
              <AlertBase alert={alert} />
            </Alert>
          </CSSTransition>
        ))}
      </StyledTransitionGroup>
    </PortalWrap>
  );
};

export default AlertWrapper;

const StyledTransitionGroup = styled(TransitionGroup)`
  position: fixed;
  z-index: 3;
  top: 100px;
  right: 20px;
  display: flex;
  width: 85%;
  max-width: 400px;
  flex-direction: column;
`;

const Alert = styled.div<IThemeStyleProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.isDarkTheme ? "#ebebeb" : "#747474")};
  background-color: #4991d5de;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  &.${transitionName}-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 400ms;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    transition: all 400ms;
  }
`;
