import { FaMapMarkerAlt, FaMapMarker } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { Activity } from "@/types/type"; // Fix import path
import Image from "next/image";

export default function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  return (
    <div className="flex items-start align-center gap-3 bg-white rounded-lg p-5 shadow ">
      <div className="relative w-32 ">
        <div className="absolute top-4 left-[-19px] w-8 h-8 z-10">
          <FaMapMarker className="text-purple-600 text-4xl" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
            {index + 1}
          </span>
        </div>
        <Image
          src={activity.image}
          alt={activity.title || "Activity image"}
          className="rounded-lg object-cover w-36 h-24"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-black">{activity.title}</h4>
          </div>
          <div className="flex items-center gap-x-3 text-gray-500 text-lg">
            <FaMapMarkerAlt className="cursor-pointer text-green-400" title="View on Map" />
            <GrAttachment className="cursor-pointer" title="Edit Activity" />
            <RiDeleteBin6Fill className="cursor-pointer text-red-600" title="Delete Activity" />
          </div>
        </div>

        <div className="bg-gray-100 w-full p-3 flex justify-between rounded-xl mt-1">
          <p className="text-xs text-gray-600">{activity.description}</p>
          <span>
            <MdOutlineEdit className="text-gray-500" />
          </span>
        </div>

        <p className="text-sm text-yellow-600 mt-1">
          ⭐ {activity.rating} ({activity.reviews})
        </p>
      </div>
    </div>
  );
}
