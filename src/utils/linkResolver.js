exports.linkResolver = function linkResolver(doc) {
  // Route for blog posts
  console.log('in link resolver doc type is', doc.type)
  if (doc.type === "article") {
    return "/articles/" + doc.uid
  }
  // Homepage route fallback
  return "/"
}