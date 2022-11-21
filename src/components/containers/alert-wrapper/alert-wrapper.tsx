import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import AlertBase from "components/alerts/alert-base/alert-base";
import PortalWrap from "../portal-wrap/portal-wrap";
import useAlert from "store/alert/useAlert";

import { IAlert } from "store/alert/types";

const transitionName = `fade`;

const AlertWrapper = () => {
  const { alerts } = useAlert();

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
            <Alert>
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
  top: 80px;
  right: 10px;
  display: flex;
  width: 350px;
  max-width: 92%;
  flex-direction: column;
`;

const Alert = styled.div`
  width: 150px;
  height: 100px;
  background-color: red;
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
