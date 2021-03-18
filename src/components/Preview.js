import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { resetCameraImage, selectcameraImage } from '../features/cameraSlice';
import CloseIcon from '@material-ui/icons/Close';
import './Preview.css';

function Preview() {
  const cameraImage = useSelector(selectcameraImage);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      history.replace('/');
    }
  }, [cameraImage, history]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <img src={cameraImage} alt="user pic" />
    </div>
  );
}

export default Preview;
