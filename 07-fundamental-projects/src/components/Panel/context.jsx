import { createContext, useState, useContext } from "react";
import {
  homeData,
  aboutData,
  projectsData,
  contactData,
  profileData,
} from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = (linkText) => {
    switch (linkText) {
      case "home":
        openModal(homeData);
        break;
      case "team":
        openModal(aboutData);
        break;
      case "projects":
        openModal(projectsData);
        break;
      case "calendar":
        openModal(contactData);
        break;
      case "documents":
        openModal(profileData);
        break;
      default:
        openModal({});
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        modalContent,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
        handleLinkClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
