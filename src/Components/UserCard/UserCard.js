//UserCard component
//Path: App > Display > Results > USERCARD > Image / Bio / UserName / Tag
//To contain: Image, Bio, UserName, Tag
//Props: ??

import Image from '../Image/Image'
import UserName from '../UserName/UserName'
import Tag from '../Tag/Tag.js'
import Bio from '../Bio/Bio.js'

function UserCard({data}) {
    console.log(data)

    return(
        <div className="card">
        <Image />
        <div className="container">
            <UserName name = {data?.name} />
            <Tag tags = {data?.programming_lang}/>
            <Bio bio = {data?.bio}/>
        </div>
        </div>
    )
  }
  
  export default UserCard;