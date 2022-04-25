import React from "react";
import { ThemeButton } from "../../styles/GlobalComponents";

export const EventButton = ({ children, onClick, loading, buttonSize, buttonStyle }) => {
  return (
      <>
        {loading ? (
            <ThemeButton disabled>Carregando...</ThemeButton>
        ) : (
            <ThemeButton buttonSize={buttonSize} buttonStyle={buttonStyle} onClick={onClick}>{children}</ThemeButton>
        )}
      </>
  )
};

export const SubmitButton = ({ children, loading, buttonSize, buttonStyle }) => {
    return (
        <>
          {loading ? (
              <ThemeButton disabled>Carregando...</ThemeButton>
          ) : (
              <ThemeButton buttonSize={buttonSize} buttonStyle={buttonStyle} type="submit">{children}</ThemeButton>
          )}
        </>
    )
};

export const LinkButton = ({ children, link, buttonSize, buttonStyle }) => {
  return (
    <a href={link}>
      <ThemeButton buttonSize={buttonSize} buttonStyle={buttonStyle}>{children}</ThemeButton>
    </a>
  );
};
