import { useState, createContext } from "react";

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [isOpen00, setIsOpen00] = useState(false);
  const [isOpen01, setIsOpen01] = useState(false);
  const [isOpen02, setIsOpen02] = useState(false);
  const [isOpen03, setIsOpen03] = useState(false);
  const [isOpen04, setIsOpen04] = useState(false);
  const [isOpen05, setIsOpen05] = useState(false);
  const [isOpen06, setIsOpen06] = useState(false);
  const [isOpen07, setIsOpen07] = useState(false);
  const [isOpen08, setIsOpen08] = useState(false);
  const [isOpen09, setIsOpen09] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);

  const toggleModal00 = () => setIsOpen00(!isOpen00);
  const toggleModal01 = () => setIsOpen01(!isOpen01);
  const toggleModal02 = () => setIsOpen02(!isOpen02);
  const toggleModal03 = () => setIsOpen03(!isOpen03);
  const toggleModal04 = () => setIsOpen04(!isOpen04);
  const toggleModal05 = () => setIsOpen05(!isOpen05);
  const toggleModal06 = () => setIsOpen06(!isOpen06);
  const toggleModal07 = () => setIsOpen07(!isOpen07);
  const toggleModal08 = () => setIsOpen08(!isOpen08);
  const toggleModal09 = () => setIsOpen09(!isOpen09);
  const toggleModal10 = () => setIsOpen10(!isOpen10);
  const toggleModal11 = () => setIsOpen11(!isOpen11);

  return (
    <PortfolioContext.Provider
      value={{
        isOpen00,
        isOpen01,
        isOpen02,
        isOpen03,
        isOpen04,
        isOpen05,
        isOpen06,
        isOpen07,
        isOpen08,
        isOpen09,
        isOpen10,
        isOpen11,
        toggleModal00,
        toggleModal01,
        toggleModal02,
        toggleModal03,
        toggleModal04,
        toggleModal05,
        toggleModal06,
        toggleModal07,
        toggleModal08,
        toggleModal09,
        toggleModal10,
        toggleModal11,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider, PortfolioContext };
