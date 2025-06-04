import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import { motion } from "framer-motion";
import ActivityCard from "./Activitycard";
import { Activity } from "@/types/type";

interface ItineraryListProps {
  initialData: Activity[];
}

export default function ItineraryList({ initialData }: ItineraryListProps) {
  const [items, setItems] = useState<Activity[]>(initialData);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    setItems((prevItems) => {
      const reordered = Array.from(prevItems);
      const [moved] = reordered.splice(sourceIndex, 1);
      reordered.splice(destinationIndex, 0, moved);
      return reordered;
    });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="itinerary">
        {(provided) => (
          <div
            className="p-4 bg-white w-full md:w-[50%] max-h-screen overflow-auto scrollbar-hidden"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="font-semibold text-pink-500 text-2xl">Y2Z TRAVEL</div>
            <div className="text-lg font-bold text-black ms-5 mt-3">Itinerary</div>
            <span className="text-sm text-gray-400 ms-5">Day</span>

            {items.map((activity, index) => (
              <Draggable key={activity.id} draggableId={activity.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <motion.div
                      layout
                      initial={{ scale: 1, boxShadow: "none" }}
                      animate={{
                        scale: snapshot.isDragging ? 1.05 : 1,
                        boxShadow: snapshot.isDragging
                          ? "0px 8px 15px rgba(0, 0, 0, 0.3)"
                          : "none",
                      }}
                      transition={{ duration: 0.2 }}
                      className="mb-3"
                    >
                      <ActivityCard activity={activity} index={index} />
                    </motion.div>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
