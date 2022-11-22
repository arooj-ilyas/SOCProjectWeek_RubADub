import Image from '../Image/Image'
import UserName from '../UserName/UserName'
import Tag from '../Tag/Tag.js'
import Bio from '../Bio/Bio.js'

function UserCard() {
    return(
        <div className="card">
        <Image />
        <div className="container">
            <UserName />
            <Tag />
            <Bio />
        </div>
        </div>
    )
  }
  
  export default UserCard;