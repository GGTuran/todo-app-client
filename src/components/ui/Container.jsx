/* eslint-disable react/prop-types */


const Container = ({children}) => {
    return (
        <div className="w-full max-w-[1240px] px-[20px] mx-auto" >
            {children}
        </div>
    );
};

export default Container;