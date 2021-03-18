import React from 'react';
import { useSelector } from 'react-redux';
import { selectcameraImage } from '../features/cameraSlice';
import './Preview.css';

function Preview() {
  const cameraImage = useSelector(selectcameraImage);
  return (
    <div className="preview">
      <img src={cameraImage} alt="user image" />
    </div>
  );
}

export default Preview;
