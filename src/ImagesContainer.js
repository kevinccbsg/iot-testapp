import React  from 'react';
import PropTypes from 'prop-types';
import greenOn from './green-led-on-md.png';
import greenoff from './green-led-off-md.png';
import amberOn from './amber-led-on-hi.png';
import amberoff from './amber-led-off-md.png';

const ImagesContainer = (props) => {
  const { green, amber } = props;
  return (
    <div className="led-container">
      {green && (
        <div className="led-item">
          <img src={greenOn} className="led led-green-on" alt="led-green-on" />
        </div>
      )}
      {!green && (
        <div className="led-item">
          <img src={greenoff} className="led led-green-on" alt="led-green-on" />
        </div>
      )}
      {amber && (
        <div className="led-item">
          <img src={amberOn} className="led led-amber-on" alt="led-amber-on" />
        </div>
      )}
      {!amber && (
        <div className="led-item">
          <img src={amberoff} className="led led-amber-on" alt="led-amber-on" />
        </div>
      )}
    </div>
  );
};

ImagesContainer.propTypes = {
  green: PropTypes.bool,
  amber: PropTypes.bool,
};

ImagesContainer.defaultProps = {
  green: false,
  amber: false,
};

export default ImagesContainer;
