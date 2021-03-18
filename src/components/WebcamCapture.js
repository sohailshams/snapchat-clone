import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  with: 250,
  height: 400,
  facingMode: 'user',
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.with}
        videoConstraints={videoConstraints}
      />
    </div>
  );
}

export default WebcamCapture;
