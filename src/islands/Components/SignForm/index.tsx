import { useState } from "preact/hooks";
import { createVariableComponent } from "#utils/createVariableComponent.ts";
import LoginFormIsland from "../LoginForm/index.tsx";
import RegistrationFormIsland from "../RegisterForm/index.tsx";
import { create } from "node:domain";

function useSignForm() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
    setIsRegisterFormOpen(false);
  };

  const openRegisterForm = () => {
    setIsRegisterFormOpen(true);
    setIsLoginFormOpen(false);
  };

  return {
    isOpen,
    isLoginFormOpen,
    isRegisterFormOpen,
    toggleMenu,
    openLoginForm,
    openRegisterForm
  };
}


export type SignFormProps = ReturnType<typeof useSignForm>;

function SignForm({
  isOpen,
  isLoginFormOpen,
  isRegisterFormOpen,
  toggleMenu,
  openLoginForm,
  openRegisterForm
}: SignFormProps) {
  return (
    <div class={`sign-form ${isOpen ? "open" : ""}`}>
      <button onClick={toggleMenu} class="toggle-button">
        {isOpen ? "Close" : "Sign In / Register"}
      </button>
      {isOpen && (
        <div class="form-container">
          <button onClick={openLoginForm} class="login-button">
            Login
          </button>
          <button onClick={openRegisterForm} class="register-button">
            Register
          </button>
          {isLoginFormOpen && <LoginFormIsland />}
          {isRegisterFormOpen && <RegistrationFormIsland />}
        </div>
      )}
    </div>
  );
}

const SignFormIsland = createVariableComponent(useSignForm, {
  default: SignForm,
});

export default SignFormIsland;

