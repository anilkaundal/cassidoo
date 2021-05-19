/*
Given a list of folders in a filesystem and the name of a folder to 
remove, return the new list of folders after removal.

Examples:
$ removeFolder([“/a”,”/a/b”,”/c/d”,”/c/d/e”,”/c/f”, “/c/f/g”], ‘c’)
$ [“/a”,”/a/b”]

$ removeFolder([“/a”,”/a/b”,”/c/d”,”/c/d/e”,”/c/f”, “/c/f/g”], ‘d’)
$ [“/a”,”/a/b”,”/c”,”/c/f”, “/c/f/g”]
*/

const removeFolder = (folders, toRemove) => [
  ...new Set(
    folders
      .map((str) => str.replace(new RegExp(`\/${toRemove}(.*)`), ""))
      .filter(Boolean)
  ),
];
console.log(
  removeFolder(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f", "/c/f/g"], "c")
);
console.log(
  removeFolder(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f", "/c/f/g"], "d")
);
