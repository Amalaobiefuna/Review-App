import PropTypes from "prop-types";

// // props is like the attribute value in html, but for components
// function Header(props) {
//   return (
//     <header>
//       <div className='container'>
//         <h1>
//             {props.text}
//         </h1>
//       </div>
//     </header>
//   )
// }

// export default Header

// destructing
function Header({ text, bgColor, textColor }) {
    const headerStyle = {
        backgroundColor : bgColor,
        color : textColor,
    }

  return (
    <header style={headerStyle} className = 'container'>
      <div>
        <h1>{text}</h1>
      </div>
    </header>
  );
}

//default props used when there is no props passed on the components
Header.defaultProps = {
  text: "Review Application",
  bgColor: 'coral',
  textColor: 'blue',
};

//how to assign proptypes to ppties to check the proptypes
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
