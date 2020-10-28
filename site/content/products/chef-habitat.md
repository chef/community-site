---
title: Chef Habitat | Developer Resources 
type: chef-habitat
hero: 
  logo: /img/logos/chef-habitat-dark.svg
  header: Developer Resources 
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
    header: Define
    image: /img/habitat/step_1.svg
    copy: >-
      The Chef Habitat Studio is a development kit for creating automated build and deployment plans for any application and then testing them in a clean-room environment. 


      * Define how your application is built, installed, and run with PowerShell or Bash and your code editor of choice.  


      * Isolate dependencies into atomic plans and then build an Application Manifest which links to all direct & transitive runtime dependencies and provides tuneable instructions to install and run the app.   


      * Leverage hundreds of pre-built plans for common dependencies such as .NET, jdk or gcc on the Chef Habitat community on GitHub. 
  two:
    header: Package
    image: /img/habitat/step_2.svg
    copy: >-
      Habitat packages the Application Manifest into an immutable artifact called the Habitat Application Artifact (.HART) file. Artifacts can be exported to run in a variety of runtimes with zero refactoring or rewriting.  


      * Create a package in the local Studio or integrate with any automated pipeline solution using the same commands and build processes.  


      * Simplify audit and compliance processes by explicitly defining application dependencies and packaging an application with only what is required.   

      * Easily export to tarball, Docker, or directly to container registries (Azure Container Registry, Amazon Elastic Container Registry, or Docker Hub).
  three:
    header: Deliver
    image: /img/habitat/step_3.svg
    copy: >-
      The Habitat Supervisor is a light-weight agent that runs on/in a server, virtual machine, or container and manages the application according to the instructions defined in the Habitat Plan. Tasks are defined via pre-set scripts called lifecycle hooks that are included as part of the application definition.
      

      * Deploy and upgrade an application to any environment on-demand  
      
      
      * Automate health and compliance checks  
      

      * Templatize your configuration settings and update them as needed during runtime.
tutorials:
  header: Self-Learning Tutorials and Resources
  one: 
    link: "https://learn.chef.io/courses/course-v1:chef+Habitat101+Perpetual/about"
    img: /img/habitat/lcr-deliver.png
    copy: >-
      ####  Deliver Applications with Chef Habitat   
    
      Learn to automate application management with Chef Habitat by bundling build and runtime instructions alongside your application source code.   


      <a href="https://learn.chef.io/courses/course-v1:chef+Habitat101+Perpetual/about" class="cta" target="_blank" rel="noreferrer noopener">Go to course</a>
  two: 
    link: "https://community.chef.io/windows-resources/"
    img: https://chef-marketing-public.s3-us-west-1.amazonaws.com/resource-hub-img/Resources/Resource-Card-Images_WebPage.png
    copy: >- 
      #### Windows Resource Center  
      
      Chef Habitat provides a single way to deliver and manage Windows applications. Find ebooks, demos, and other resources to help you get started.


      <a href="/windows-resources" class="cta">Windows resources</a>
  three: 
    link: "https://chef.io/wp-content/uploads/2020/09/Automated-Application-Rollback-Insurance-for-Release-Teams_White-Paper.pdf"
    img: https://chef-marketing-public.s3-us-west-1.amazonaws.com/resource-hub-img/Resources/Resource-Card-Images_Whitepaper.png
    copy: >-
      ####  Automated Application Rollback Insurance for Release Teams 

      This paper provides an overview of rollback vs. rollforward and how to implement within Chef Habitat. 

      
      <a href="https://chef.io/wp-content/uploads/2020/09/Automated-Application-Rollback-Insurance-for-Release-Teams_White-Paper.pdf" class="cta" target="_blank" rel="noreferrer noopener">Download white paper</a>
getStarted: 
  header: Getting started
  one: 
    header: Install Chef Habitat 
    copy: >-
      Everything you need to get started packaging applications is included with the Chef Habitat Command-Line Interface (CLI).  The Chef Habitat installer CLI is supported on Linux, Mac, and Windows. 
    code: |-

  two:
    header: Install Secondary Tools
    copy: >-
      In addition to installing Chef Habitat it is suggested you also install your favorite text editor (vim, emacs or nano), Git, and Docker Community Edition.   
    code: |-

      ~$ sudo yum install -y vim-enhanced git
      ~$ sudo yum install docker-ce docker-ce-cli containerd.io
  three:
    header: Create an Origin Keypair
    copy: >-
      Every package that you build with Chef Habitat belongs to an origin and is cryptographically signed with that origin’s private key. As part of the set-up you’ll need to generate or define a set of origin keys.  
    code: |-

      ~$ export HAB_ORIGIN=’myinitials_tryhab’
      ~$ hab origin key generate
      » Generating origin key for myinitials_tryhab
      ★ Generated origin key pair myinitials_tryhab-20200521200652
  four:
    header: Clone and Unpack the Application
    copy: >-
      In this case we describe the application at a high level. What does it do, how does it work, and what bits of functionality might be configurable? This is where we basically map a manual runbook to an automation plan. 
    code: |-

      ~ $ git clone https://github.com/chef-training/java-sample
  five:
    header: Define and Package the Application with Habitat  
    copy: >-
      The Habitat Manifest is typically added to the root of your application. It is typically structured into three folders: habitat/, hooks/, and a config.toml file used for templating. The contents of the Manifest will vary greatly depending on your application requirements.  
    code: |-

      Common Habitat Manifest Directory Structure
        |-- config.toml
        |-- habitat
        |   |-- README.md
        |   |-- config
        |   |-- default.toml
        |   |-- hooks
        |   `-- plan.sh
        |-- results
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
<a class="btn btn-primary" href="#start">Get started</a>
<a class="btn btn-secondary" href="https://www.habitat.sh/docs/" target="_blank" rel="noopener noreferrer">View Docs</a>
</div>
<div class="center-xs">
<iframe title="Github" id="github-star" class="center-xs" src="https://ghbtns.com/github-btn.html?user=habitat-sh&repo=habitat&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
</div>
<p class="center-xs">
<a class="cta" href="https://forums.habitat.sh/c/announcements/22" target="_blank" rel="noopener noreferrer">Release notes</a></p>