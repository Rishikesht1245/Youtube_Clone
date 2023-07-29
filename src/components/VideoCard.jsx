import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { VscVerifiedFilled } from "react-icons/vsc";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  return (
    //Link cart is used to provide the route (href)
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        {/* Thumbnail for each video */}
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            src={video?.thumbnails?.[0]?.url}
            alt="Video Thumbnail"
            className="h-full w-full object-cover"
          />
          {video.lengthSeconds && <VideoLength time={video.lengthSeconds} />}
        </div>

        <div className="flex text-white mt-3">
          {/* video's channel avatar */}
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt="Author"
              />
            </div>
          </div>
          {/* video title, author , views (3-rows)*/}
          <div className="flex flex-col ml-3 overflow-hidden">
            {/* first row */}
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            {/* second row */}
            <span className="text-[12px] font-semibold mt-2 text-white flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <VscVerifiedFilled className="tex-white/[0.5] text-[12px]" />
              )}
            </span>
            {/* third row */}
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
