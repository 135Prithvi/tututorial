"use client";

import { useState } from "react";

function EditableComments({
  comments: originalComments,
}: {
  comments: string[];
}) {

  const [comments, setComments] = useState(originalComments);

  return (
    <div>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}

    </div>
  );
}

export default EditableComments;