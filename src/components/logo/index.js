import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Logo = ({ size, className }) => {
  const wrapperStyle = classNames(
    'inline-flex flex-row flex-nowrap gap-2 items-center text-left',
    className
  );

  const nameStyle = classNames(
    'font-bold font-parityDisplay uppercase wordmark leading-extra-tight text-blue-500',
    { 'text-4xl': !size, 'text-5xl': size === 'lg' }
  );

  const dateStyle = classNames('font-black uppercase text-neutral-900', {
    'text-base': !size,
    'text-2xl': size === 'lg',
  });

  const panelStyle = classNames(
    'panels-panel absolute opacity-80 mix-blend-multiply'
  );

  const panel1Style = classNames(panelStyle, 'animate-panelFront');

  const panel2Style = classNames(panelStyle, 'animate-panelBack');

  return (
    <div className={wrapperStyle}>
      <div
        className={classNames(
          'panels items-center relative text-blue-400',
          size
        )}
      >
        <svg
          width="63"
          height="81"
          viewBox="0 0 63 81"
          xmlns="http://www.w3.org/2000/svg"
          className={panel1Style}
        >
          <path
            fill="currentColor"
            d="M0 0C20.8818 2.37277 41.7636 4.74555 62.6454 7.11832C62.6454 28.6428 62.6454 50.1672 62.6454 71.6917C41.7636 74.7147 20.8818 77.7395 0 80.766C0 53.8422 0 26.9203 0 0Z"
          />
        </svg>
        <svg
          width="63"
          height="81"
          viewBox="0 0 63 81"
          xmlns="http://www.w3.org/2000/svg"
          className={panel2Style}
        >
          <path
            fill="currentColor"
            d="M0 0C20.8818 2.37277 41.7636 4.74555 62.6454 7.11832C62.6454 28.6428 62.6454 50.1672 62.6454 71.6917C41.7636 74.7147 20.8818 77.7395 0 80.766C0 53.8422 0 26.9203 0 0Z"
          />
        </svg>
      </div>
      <div>
        <h1 className={nameStyle}>
          Decoupled <br />
          Days <span className="text-blue-800">2022</span>
        </h1>
        <p className={dateStyle}>August 17-18, NYC</p>
      </div>
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
