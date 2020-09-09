---
title: Application Delivery as Code
type: chef-habitat
hero: 
  logo: /img/logos/chef-habitat-dark.svg
cards:
  header: Application Definition, Packaging and Delivery Automation
  one:
    icon: /img/icons/habitat-1.png
    title: Reusable Content
    body: >-
      Hundreds of pre-defined application templates and a robust open source user community.
  two:
    icon: /img/icons/habitat-2.png
    title: Codified Instructions
    body: >-
      Automation is stored as coded artifacts that are easy to search and share. 
  three:
    icon: /img/icons/habitat-3.png
    title: Consistent Deployments
    body: >-
       What is built and run in development will be exactly the same in production.
  four:
    icon: /img/icons/habitat-4.png
    title: Advanced Features
    body: >-
      Built-in automation for dynamic service bindings, clustering topologies, service discovery, and update strategies. 
usage:
  headerImage: /img/logos/chef-habitat-white.svg
  one: 
    header: Studio
    copy: >-
      The Chef Habitat Studio is a development kit for creating automated build and deployment plans for any application and then testing them in a clean-room environment. 


      * Define how your application is built, installed, and run with PowerShell or Bash and your code editor of choice.  


      * Isolate dependencies into atomic plans and then build an Application Manifest which links to all direct & transitive runtime dependencies and provides tuneable instructions to install and run the app.   


      * Leverage hundreds of pre-built plans for common dependencies such as .NET, jdk or gcc on the Chef Habitat community on GitHub. 
  two:
    header: Artifact
    copy: >-
      Habitat packages the Application Manifest into an immutable artifact called the Habitat Application Artifact (.HART) file. Artifacts can be exported to run in a variety of runtimes with zero refactoring or rewriting.  


      * Create a package in the local Studio or integrate with any automated pipeline solution using the same commands and build processes.  


      * Simplify audit and compliance processes by explicitly defining application dependencies and packaging an application with only what is required.   

      * Easily export to tarball, Docker, or directly to container registries (Azure Container Registry, Amazon Elastic Container Registry, or Docker Hub).
  three:
    header: Supervisor
    copy: >-
      The Habitat Supervisor is a light-weight agent that runs on/in a server, virtual machine, or container and manages the application according to the instructions defined in the Habitat Plan. Tasks are defined via pre-set scripts called lifecycle hooks that are included as part of the application definition.  
      

      * Deploy and upgrade an application to any environment on-demand  
      
      
      * Automate health and compliance checks  
      

      * Templatize your configuration settings and update them as needed during runtime.
tutorials:
  header: Get Started with Chef Habitat
  one: 
    title: Deliver Applications with Chef Habitat
    link: "https://learn.chef.io/courses/course-v1:chef+Habitat101+Perpetual/about"
    copy: >-
      Learn to automate application management with Chef Habitat by bundling build and runtime instructions alongside your application source code.
  two: 
    title: Explore the Docs
    link: "https://www.habitat.sh/docs/"
    copy: >-
      Chef Habitat centers application configuration, management, and behavior around the application itself, not the infrastructure that the app runs on.
  three: 
    title: Habitize a Windows application
    link: "https://www.habitat.sh/demo/windows/steps/1/"
    copy: >-
      Package an ASP.NET application and bind to a SQL Server database.
builder:
  header: Chef Habitat Builder for Enterprise Wide Adoption
  copy: >-
    The Chef Habitat Builder provides a set of enterprise-class functionality that includes package storage, search, and automated API enabled services. Application binaries versioned and stored along with the corresponding Habitat Artifact. Clients have the option of leveraging the SaaS or on-premises version of Builder. 
  ctaOne:
    copy: Learn more about Builder
    link: https://www.habitat.sh/docs/using-builder/
  ctaTwo:
    copy: Log In
    link: https://bldr.habitat.sh/#/sign-in
resources:
  header: From the Chef Habitat Blog
contact:
  header: Accelerate your business’s move to the cloud and adoption of container technology.
  ctaOne: 
    link: https://www.chef.io/products/chef-habitat/
    copy: Learn more
---
<p>Chef Habitat is an open source automation solution for defining, packaging, and delivering applications to almost any environment regardless of operating system or platform.</p>

<div class="center-xs">
<a class="btn btn-primary" href="https://community.chef.io/products/chef-habitat/#learn/">Get started</a>
<a class="btn btn-secondary" href="https://www.habitat.sh/docs/" target="_blank" rel="noopener noreferrer">View Docs</a>
</div>
<div class="center-xs">
<iframe title="Github" id="github-star" class="center-xs" src="https://ghbtns.com/github-btn.html?user=habitat-sh&repo=habitat&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
</div>
<p class="center-xs">
<a class="cta" href="https://discourse.chef.io/c/habitat/12" target="_blank" rel="noopener noreferrer">Release notes</a></p>