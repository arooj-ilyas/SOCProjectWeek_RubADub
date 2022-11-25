//Image component
//Path: App > Display > Results > UserCard > IMAGE
//To contain: image of user / icon
//Props: ??

function Image({photo}) {
    return(
        <img className="user-image" id="image" src={photo} alt="duck"/>
    )
  }
  
  export default Image;