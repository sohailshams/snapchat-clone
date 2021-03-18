import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectcameraImage } from '../features/cameraSlice';
import './Preview.css';

function Preview() {
  const cameraImage = useSelector(selectcameraImage);
  const history = useHistory();

  useEffect(() => {
    if (!cameraImage) {
      history.replace('/');
    }
  }, [cameraImage, history]);
  return (
    <div className="preview">
      <img src={cameraImage} alt="user image" />
    </div>
  );
}

export default Preview;
