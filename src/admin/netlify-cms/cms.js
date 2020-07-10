import React from "react";
import CMS from "netlify-cms-app";
import Homepage from "./templates/homepage";
import FirstTime from "./templates/first-time";
import ChefInspec from "./templates/chef-inspec";
import ChefHabitat from "./templates/chef-habitat";


CMS.registerPreviewStyle('https://unpkg.com/netlify-cms-yoast-seo@~1.0/dist/main.css');

CMS.registerPreviewTemplate("home", Homepage);
CMS.registerPreviewTemplate("first-time", FirstTime);
CMS.registerPreviewTemplate("chef-inspec", ChefInspec);
CMS.registerPreviewTemplate("chef-habitat", ChefHabitat);


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
  
localStorage.setItem("netlifySiteURL", "https://community.chef.io");

  
CMS.init({
  config: {

    load_config_file: true
	},
})

