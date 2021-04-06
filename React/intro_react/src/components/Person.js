import React from 'react';
export function Person({obj}) {
  return(
    <div>
      <h2>
        name is {obj.name} and job is {obj.job} developer
      </h2>
    </div>
  )
}
