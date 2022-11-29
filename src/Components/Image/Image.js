//Image component
//Path: App > Display > Results > UserCard > IMAGE
//To contain: image of user / icon
//Props: ??

/**
 * Creates Image component for UserCard with class name, id and alt text, inheriting {photo} prop from user data gathered at app.js.
 */
function Image({photo}) {
    return(
        <img className="user-image" id="image" src={photo} alt="duck"/>
    )
  }
  
  export default Image;