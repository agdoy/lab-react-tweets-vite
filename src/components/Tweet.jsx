import Timestamp from "./Timestamp";
import User from "./User"
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  console.log("tweet", tweet)

  const { user, timestamp, message } = tweet
  const { name, image, handle } = user

  return (
    <div className="tweet">
      <ProfileImage name={name} image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
