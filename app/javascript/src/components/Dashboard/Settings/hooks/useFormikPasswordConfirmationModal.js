import { useState, useRef } from "react";

import { PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES } from "../constants";

export const useFormikPasswordConfirmationModal = () => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState(
    PASSWORD_CONFIRMATION_FORM_INITIAL_VALUES["password"]
  );
  const formRef = useRef();

  const closeModal = () => {
    setIsPasswordModalOpen(false);
  };

  const handlePasswordConfirmation = passwordFormValues => {
    setPassword(passwordFormValues["password"]);
    setIsPasswordModalOpen(false);
    formRef.current?.submitForm();
  };

  return {
    isPasswordModalOpen,
    setIsPasswordModalOpen,
    password,
    formRef,
    closeModal,
    handlePasswordConfirmation,
  };
};
