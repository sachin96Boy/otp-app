import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import auth from "./firebase/firebase";

function App() {
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleClick = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          console.log(response);
        },
      },
      auth
    );
    handleSignIn();
  };

  const handleSignIn = () => {
    const phoneNumber = "+94779746304";
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        window.confirmationResult = confirmationResult;
        setShowOtp(true);
        appVerifier.clear();
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
      })
      .catch((error) => {
        console.log(error);
        // Error; SMS not sent
        // ...
        
      });
  };

  const handleOtp = () => {
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  }
  return (
    <Flex align={"center"} justify="center" flexDir={"column"}>
      <Button onClick={handleClick}>Click Here</Button>
      <Box id="recaptcha-container"></Box>
      {showOtp && (
        <Box>
          <FormControl>
            <FormLabel>OTP</FormLabel>
            <Input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button onClick={handleOtp}>Verify</Button>
          </FormControl>
        </Box>
      )}
    </Flex>
  );
}

export default App;
