import * as React from 'react';



import {TextAreaHOCType } from '../../../utils/types';
import { Modal, ModalContent, StyledBackdrop } from '../styles/styles';




 const TextAreaHOC = ({WrappedComponent,handler,data,componentTitle}:TextAreaHOCType)=> {
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => setOpen(false);

  return (
    <>
   
     <WrappedComponent index={1} modalHandler={setOpen} isModalOpen={open} data={data} handler={handler}  componentTitle={componentTitle}/>
     
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 'auto' }}>
         
        <WrappedComponent index={2}modalHandler={setOpen} isModalOpen={open} data={data} handler={handler} componentTitle={componentTitle}/>
       
        
        </ModalContent>
      </Modal>
    </>
  );
}


export default TextAreaHOC;



