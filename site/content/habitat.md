---
title: Application Delivery as Code
type: habitat
hero: 
  logo: /img/logos/chef-habitat-dark.svg
getStarted: 
  header: Get started in 3 simple steps
  one: 
    header: Write the test
    copy: >-
      Create simple Ruby-based tests to verify your expected state against the current state of your systems.
  two:
    header: Run the test
    copy: >-
      Execute your test against your target system locally or remotely with one simple command.
  three:
    header: See the results
    copy: >-
      See which tests failed, passed and skipped and the expected state against the current state of your target system, in one simple output.
cards:
  header: Application Definition, Packaging and Delivery Automation
  one:
    icon: /img/icons/habitat-1.png
    title: Reusable Content
    image: 
    body: >-
      Hundreds of pre-defined application templates and a robust open source user community.
  two:
    icon: /img/icons/habitat-2.png
    title: Codified Instructions
    image: 
    body: >-
      Automation is stored as coded artifacts that are easy to search and share. 
  three:
    icon: /img/icons/habitat-3.png
    title: Consistent Deployments
    image: 
    body: >-
       What is built and run in development will be exactly the same in production.
  four:
    icon: /img/icons/habitat-4.png
    title: Advanced Features
    image: 
    body: >-
      Built-in automation for dynamic service bindings, clustering topologies, service discovery, and update strategies. 
usage:
  headerImage: /img/logos/chef-habitat-white.svg
  header: Lorem ipsum
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
  columnOne: 
    one: 
      title: Package a sample application
      link: "https://www.habitat.sh/demo/packaging-system/steps/1/"
      copy: >-
        Package a Node.js application as a Chef Habitat artifact that can run on any platform, then export and run it locally in a Docker container.
    two: 
      title: Set up automated deployments
      link: "https://learn.chef.io/modules/explore-inspec-resources/#/"
      copy: >-
        Use Chef Habitat Builder to set up automated builds for a Node.js application, then publish the build artifacts as container images on Docker Hub.
      subtext: 
  columnTwo:
    one: 
      title: Auto-update a running application
      link: "https://www.habitat.sh/demo/build-system/steps/1/"
      copy: >-
        See how the Supervsior can auto-update a running Node.js application to a new version by simply building and promoting a new package.    
    two: 
      title: Habitize a Windows application
      link: "#"
      copy: >-
        Package an ASP.NET application and bind to a SQL Server database.
builder:
  header: Chef Habitat Builder for Enterprise Wide Adoption
  copy: >-
    The Chef Habitat Builder provides a set of enterprise-class functionality that includes package storage, search, and automated API enabled services. Application binaries versioned and stored along with the corresponding Habitat Artifact. Clients have the option of leveraging the SaaS or on-premises version of Builder. 
  cta: Learn More About Chef Habitat Builder
  ctaLink: "https://bldr.habitat.sh/#/pkgs/core"
resources:
  header: From the Chef Habitat Blog
  headerTwo: 
contact:
  header: Wondering how Chef Habitat might work for your team?
  copy: Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.aliquip ex ea commodo consequat.
  ctaOne: 
    link: https://www.chef.io/products/chef-habitat/
    copy: Learn more
  ctaTwo:
    link: https://www.chef.io/pricing/
    copy: View pricing
---
<p class="lead">Chef Habitat is an open source automation solution for defining, packaging, and delivering applications to almost any environment regardless of operating system or platform.</p>

<a class="btn btn-primary" href="https://downloads.chef.io/" target="_blank">Download Habitat</a>
<a class="btn btn-secondary" href="https://docs.chef.io/" target="_blank">View Docs</a>
