import React from 'react'
import PopupImage from '../Images/detailImage.png'
import {Modal, Button} from 'react-bootstrap'

function PopupDetailImage({show, handleClose, image }) {
  return (
    <>
     <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Art
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
            <img src={image} alt="PopupArt" width='100%' className='rounded' style={{objectFit:"cover"}} />
            <a href={image} download={image}>
            <Button style={{backgroundColor:'#2FC4B2', border:"none", marginTop:"15px", padding:"5px 15px"}}>
                Download
            </Button>
            </a>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PopupDetailImage