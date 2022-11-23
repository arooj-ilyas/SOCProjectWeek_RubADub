//Biocomponent
//Path: App > Display > Results > UserCard > BIO
//To contain: bio from user table
//Props: ??

function Bio({bio}) {
    return(
        <p className="user-bio" id="user-bio">{bio}</p>
    )
  }
  
  export default Bio;