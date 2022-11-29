//Tagcomponent
//Path: App > Display > Results > UserCard > TAG
//To contain: key tags for user e.g. programming languages
//Props: ??

/**
 * Creates Tag components by mapping through fetched user data and generating a button with text value = one of the user tags
 */
function Tag({tags}) {
    return(
        tags?.map((tag) =>
        <button className="user-tag" id="user-tag" key={tag}>{tag}</button> )
    )  }
  
  export default Tag;
