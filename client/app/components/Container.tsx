import PropTypes from 'prop-types';

const Container = ({ children }:any) => {
  return (
    <div className=" items-center  w-[50%]  mx-auto px-4 sm:px-6 lg:px-8 border-2 border-black">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
