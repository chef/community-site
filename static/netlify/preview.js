import Homepage from "/netlify/preview-components/homepage.js";
import Post from "/netlify/preview-components/post.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("home", Homepage);
CMS.registerPreviewTemplate("blog", Post);

// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
