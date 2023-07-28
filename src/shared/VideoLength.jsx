import React from "react";
import moment from "moment";
const VideoLength = ({ time }) => {
  //format of time to show in video cards (length of video)
  const VideoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-3 bg-black py-1 px-2 text-white text-xs rounded-md">
      {VideoLengthInSeconds}
    </div>
  );
};
export default VideoLength;
