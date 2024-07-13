import {
    AlertDialog, 
    AlertDialogBody, 
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogOverlay,
    AlertDialogFooter,
    Button
   } from "@chakra-ui/react"; 
   import { useAlertContext } from "./AlertContext"; 
   import { useRef } from "react";
   import { MdClose } from "react-icons/md";
    
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
      mx={{ base: 4, md: 0 }}
    >
      <AlertDialogOverlay
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
      >
        <AlertDialogContent
          py={1}
          mx={{ base: 4, md: 0 }}
          backgroundColor={isSuccess ? '#22c55e' : '#ef4444'}
          color={'#ffffff'}
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'Success!' : 'Oops!'}
            <Button  pos="absolute" top="2" right="2" onClick={onClose} colorScheme="none">
                <MdClose fontSize="1.5rem" />
            </Button>
          </AlertDialogHeader>
          <AlertDialogBody fontSize="1rem">{message}</AlertDialogBody>
          <AlertDialogFooter
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button onClick={onClose} p={4} textAlign="center" w="100%" h={4} colorScheme="whiteAlpha">
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
    ); 
   } 
    
   export default Alert;
