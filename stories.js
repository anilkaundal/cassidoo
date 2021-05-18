/*
You are building stories into an app. Your inputs are an object with 
the structure { username, postedAt }, and a date in the future. Each 
story lives for 24 hours. Write a function that outputs the stories 
that are visible for the inputted time.
*/

const validFleets = ({ username, postedAt }) => {
  const deltaDate = postedAt - new Date();
  return deltaDate < 86400000 && deltaDate > 0;
};

console.log(
  [
    { username: "tzyinc", postedAt: new Date(+new Date() + 100) },
    { username: "tzyinc", postedAt: new Date(+new Date() - 100) },
    { username: "tzyinc", postedAt: new Date(+new Date() + 86400001) },
  ].filter(validFleets)
);
