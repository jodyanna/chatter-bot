import React, { useState, useRef, useEffect } from "react";
import { Container, Button, RedText, TextRow } from "./style";
import { HiddenWindow } from "../HiddenWindow";
import UserLoginForm from "../UserLoginForm";
import UserInfo from "../UserInfo";
import UserSignUpForm from "../UserSignUpFrom";


export default function UserSettings(props) {
  const [ isSignInActive, setIsSignInActive ] = useState(false);
  const [ isSignUpActive, setIsSignUpActive ] = useState(false);
  const [ spacing, setSpacing ] = useState(0);

  const containerRef = useRef(null);

  const handleSignInClick = () => setIsSignInActive(!isSignInActive)
  const handleSignUpClick = () => setIsSignUpActive(!isSignUpActive)
  const handleSignOut = () => {
    props.setSignInStatus();
    props.setUser({name: "anonymous", id: "2"})
  }

  useEffect(() => {
    if (containerRef.current) setSpacing(containerRef.current.offsetHeight)
  }, [])

  const renderUserInfo = () => {
    // User id's 1 and 2 are reserved, user made accounts start at 3
    if (props.user.id < 3) return <RedText>You are not signed in</RedText>
    else return <UserInfo user={props.user} />
  }

  const renderSignInOutButtons = () => {
    if (props.isSignedIn) return <Button onClick={handleSignOut}>Sign Out</Button>
    else return <Button onClick={handleSignInClick}>{isSignInActive ? "Cancel" : "Sign In"}</Button>
  }

  return (
    <Container ref={containerRef}>
      <Container>
        {renderUserInfo()}
        <TextRow>
          {renderSignInOutButtons()}
          {props.isSignedIn ? "" : <Button onClick={handleSignUpClick}>{isSignUpActive ? "Cancel" : "Sign Up"}</Button>}
        </TextRow>
      </Container>
      <HiddenWindow isActive={isSignInActive && props.isActive} isUp={true} spacing={spacing + "px"}>
        <UserLoginForm setUser={props.setUser}
                       close={handleSignInClick}
                       setSignInStatus={props.setSignInStatus}
        />
      </HiddenWindow>
      <HiddenWindow isActive={isSignUpActive && props.isActive} isUp={true} spacing={spacing + "px"}>
        <UserSignUpForm setUser={props.setUser}
                        close={handleSignUpClick}
        />
      </HiddenWindow>
    </Container>
  )
}