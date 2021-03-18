import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
  with: 250,
  height: 400,
  facingMode: 'user',
};

function WebcamCapture() {
  const webcamRef = useRef(null);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);
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
      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={captureImage}
      />
    </div>
  );
}

export default WebcamCapture;
