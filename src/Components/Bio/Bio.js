//Biocomponent
//Path: App > Display > Results > UserCard > BIO
//To contain: bio from user table
//Props: ??

/**
 * Creates a p element with a class, id and content carrying {bio} prop data
 * @param {*} param0 
 */
function Bio({bio}) {
    return(
        <p className="user-bio" id="user-bio">{bio}</p>
    )
  }
  
  export default Bio;