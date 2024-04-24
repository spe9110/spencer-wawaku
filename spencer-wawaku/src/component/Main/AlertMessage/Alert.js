import {
    AlertDialog, 
    AlertDialogBody, 
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogOverlay, 
   } from "@chakra-ui/react"; 
   import { useAlertContext } from "./AlertContext"; 
   import { useRef } from "react"; 
    
   /** 
   * This is a global component that uses context to display a global alert message. 
   */ 
   function Alert() { 
    const { isOpen, type, message, onClose } = useAlertContext(); 
    const cancelRef = useRef(); 
    const isSuccess = type === "success" 
    
    return ( 
      <AlertDialog 
        isOpen={isOpen} 
        leastDestructiveRef={cancelRef} 
        onClose={onClose} 
      > 
        <AlertDialogOverlay> 
          <AlertDialogContent py={4} backgroundColor={isSuccess ? '#22c55e' : '#ef4444'} color={'#ffffff'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold"> 
              {isSuccess ? 'Success!' : 'Oops!'} 
            </AlertDialogHeader> 
            <AlertDialogBody>{message}</AlertDialogBody> 
          </AlertDialogContent> 
        </AlertDialogOverlay> 
      </AlertDialog> 
    ); 
   } 
    
   export default Alert;