//Tagcomponent
//Path: App > Display > Results > UserCard > TAG
//To contain: key tags for user e.g. programming languages
//Props: ??

function Tag({tags}) {
    //console.log(tags);
    return(
        tags?.map((tag) =>
        <button className="user-tag" id="user-tag" key={tag}>{tag}</button> )
    )  }
  
  export default Tag;
