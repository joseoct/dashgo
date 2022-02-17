import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerContextProps) {
  const disclosure = useDisclosure()
  const { events } = useRouter();

  // Close the drawer when the user navigates to a new page
  useEffect(() => {
    events.on("routeChangeComplete", () => {
      disclosure.onClose()
    })
  }, [disclosure, events])


  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
} 

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
