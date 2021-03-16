---
title: Chef Infra Client IAC Tool – Developer Resources | Chef Community
meta_description: Chef Infra is an open-source infrastructure as code (IAC) tool for automating configuration management, ensuring that every system is configured correctly.
aliases:
  - /products/chef-infra
type: chef-infra
hero: 
  logo: /img/logos/chef-infra-dark.svg
  header: Chef Infra Client Developer Resources
cards: 
  one:
    icon: /img/icons/infra-1.svg
    title: LEARN
    body: >-
      Take advantage of free and flexible <a href="https://learn.chef.io/">online</a> learning resources.  
  two:
    icon: /img/icons/infra-2.svg
    title: CONNECT
    body: >-
     Join the conversation on the Chef Community <a href="https://community-slack.chef.io/">Slack</a> and <a href="https://discourse.chef.io/">Discourse</a>. 
  three:
    icon: /img/icons/infra-3.svg
    title: CONTRIBUTE
    body: >-
      Read the <a href="https://community.chef.io/first-time/">First Time Contributor guide</a> and start submitting your ideas. 
  four:
    icon: /img/icons/infra-4.svg
    title: JOIN US
    body: >-
      View <a href="https://events.chef.io/">upcoming</a> webinars, meetups, and other user events.
intro: 
  header: Chef Infrastructure as Code Software  
  copy: >-

      Chef Infra Client is an open-source infrastructure as code tool for automating the creation of configuration policies that are flexible, versionable, testable, and human readable. Systems managed by Chef Infra Client are continuously evaluated against their desired state, ensuring that configuration drift is automatically corrected, and configuration changes are universally applied.
usage:
  headerImage: /img/logos/chef-infra-white.svg
  headerTwo: is Used For
  one: 
    header: Infrastructure as Code (IAC) 
    copy: >-
      ### Infrastructure as Code (IAC) 

      Express your infrastructure configuration as code, and make your systems testable, portable, and auditable. Give your teams the freedom to focus on building new innovations, rather than on solving problems that have already been solved in the past. Automate your systems’ adherence to declared desired state and focus on solving the most important problems that your teams face.  
    image: /img/infra/infra_config.svg
  two:
    header: System Hardening
    copy: >-
       ### System Hardening

       Applying OSes and patches, deploying core libraries to these Operating Systems, deploying apps into these images, and finally scanning everything for known vulnerabilities. Keep these patches, libraries and apps automatically updated. Leverage a rich set of APIs as well as the CLI to integrate with other tools.  
    code: |-

      # remove write permissions from path folders ($PATH) for all regular users  
      # this prevents changing any system-wide command from normal users  

      paths = %w[/usr/local/sbin /usr/local/bin /usr/sbin /usr/bin /sbin /bin] + node['os-hardening']['env']['extra_user_paths']  

      paths.each do |folder|  

      execute "remove write permission from #{folder}" do  
        command "chmod go-w -R #{folder}"
        not_if "find #{folder}  -perm -go+w -type f | wc -l | egrep '^0$'"
      end
  three:
    header: DevOps and Cloud Automation
    copy: >-
      ### DevOps and Cloud Automation

      Integrate with tools across the DevOps toolchain, including source code and artifact repositories (GitHub, GitLab, Atlassian BitBucket), CI/CD tools (Cloudbees/Jenkins, CircleCI, Azure DevOps), provisioning (HashiCorp Terraform, Packer, Vagrant, Vault). Work with any cloud resource manager, including Azure Resource Manager and AWS CloudFormation. Multi-cloud automation enabled via integrations with provisioning tools like Terraform. 
    image: /img/infra/infra_devopscloud.png
  four:
    header: Incident Management 
    copy: >-
      ### Incident Management

      View a summary or detailed view to look at a node/app status or troubleshoot errors. Filter down to classes of nodes or classes of errors to isolate data. Display notifications on a per-node, per-failure basis, or configured for alerts to chat, to webhook endpoints, or to ServiceNow. 
    image: /img/infra/infra_node-integrations.png
getStarted: 
  header: Getting started
  one: 
    header: Install Chef Workstation
    copy: >-
      Start working with Chef Infra Client by installing Chef Workstation (formerly ChefDK) on any Windows, Mac or Linux machine where you do your work. Chef Workstation provides chef, knife, Test Kitchen and all the tools you need to start defining configurations as code on local or remote servers, virtual machines and containers. 
    code: |-
    
      ~$ chef --version
      Chef Workstation version: 21.1.233
      Chef Infra Client version: 16.9.20
      Chef InSpec version: 4.24.32
      Chef CLI version: 3.0.35
      Chef Habitat version: 1.6.181
      Test Kitchen version: 2.9.0
      Cookstyle version: 7.5.3
  two:
    header: Create a Project Repo
    copy: >-
      Working with Chef Infra Client starts with creating workspaces that provide flexibility to manage a wide variety of configurations, policies, node lists and much more from your workstation. The chef generate cookbook <cookbook_name> command builds the context for your configuration management projects and creates initial files and folders to keep everything in order.   
    code: |-

      ~$ chef generate cookbook try_chef_infra
      Generating cookbook try_chef_infra
      - Ensuring correct cookbook content 
      - Committing cookbook files to git 

      Your cookbook is ready. Type `cd try_chef_infra` to enter it. 

      There are several commands you can arun to get started locally developing and testing your cookbook. 
      Type `delivery local --help` to see a full list of local testing commands.

      Why not start by writing an InSpec test? Tests for the default recipe are stored at: 

      test/integration/default/default_test.rb

      If you would prefer to dive right in, the default recipe can be found at: 

      recipes/default.rb
  three:
    header: Create Recipes
    copy: >-
      Chef Infra Client recipes contain lists of files, packages, services, users and other resources you want to configure on your managed hosts. You can run ad hoc chef-run actions from the command line for testing or add plain-language commands to your recipes when you move to production.  
    code: |-

      package "emacs" do
          action: install
      end

      ~$ chef-run host1.example.com ./recipes/default.rb

      ~$ chef-run host1.example.com package emacs --user myusername --password mypassword

      [✓] Packaging cookbook... done! 
      [✓] Generating local policyfile... exporting... done!
      [✓] Applying package[emacs] from resource to target. 
      |-- [✓] [host1.example.com] Successfully converged packing[emacs].
  four:
    header: Test and Explore
    copy: >-
      Whether you’re new to Chef Infra Client or a seasoned pro, you can use Test Kitchen to test and run recipes, try publicly available cookbooks and policy configuration from the Chef Supermarket, and even create entire test environments using Vagrant, Docker, GCE, EC2, Azure and other familiar resources. 
    code: |-

      ---
      driver: 
        name: vagrant # Or dokken, azurerm, ec2, docker, etc

      provisioner: 
        name: chef_zero
        product_name: chef
        product_version: 14.12.9
        client_rb: 
          chef_license: accept

      verifier: 
        name: inspec

      platforms: 
        - name: ubunto-18.04
        - name: centos-8 

      suites: 
        - name: default 
          verifier: 
            inspec_tests: 
              -test/integration/default
          attributes:
adoption:
  header: Enterprise Scale and Support
  copy: >-
    Chef Automate provides enterprise management and observability capabilities and is  included with every Chef Subscription. Automate offers visual UIs, real-time interactive dashboards, role-based access controls, 3rd party integrations, data APIs, and much more. Automate enables Infrastructure, DevOps, Security, Cloud and Release teams to easily collaborate and get work done, all while maintaining an auditable history of changes to systems environments.  

    In addition, Chef Automate can be used to install Chef Infra Server either for a single-host installation that contains both Chef Infra Server and Chef Automate, or for a standalone Chef Infra Server instance. Chef Automate also provides a graphical management console for the Chef Infra Server.
  image: /img/infra/EnterpriseScaleandSupport.png
tutorials:
  columnOne: 
    header: Self-learning tutorials
    one: 
      title: Manage Your Fleet with Chef Infra
      link: "https://learn.chef.io/courses/course-v1:chef+Infra101+perpetual/about"
      copy: >-
        Learn how to express your infrastructure policies as easily-managed, traceable code.
      image: "/img/infra/build-spell.png"
      imageAlt: Build Spell - badge with scroll
    two: 
      title: "Validate Infrastructure Code with Test Kitchen"
      link: "https://learn.chef.io/courses/course-v1:chef+LocalDev101+Perpetual/about"
      copy: >-
        Learn how to use Test Kitchen to test your cookbooks on your local machine before you deploy your cookbooks to your infrastructure. 
      image:  "/img/infra/realm.png"
      imageAlt: Realm of possiblities - badge with castle
    three: 
      title: "Transform Your Organization with DevOps"
      link: "https://learn.chef.io/courses/course-v1:chef+DevOpsTransformation+Perpetual/about"
      copy: >-
        Learn the principles of DevOps and transform your organization into a coded enterprise.
      image: "/img/infra/crystal.png"
  columnTwo:
    header: Community resources
    one: 
      title: Chef Infra for Dummies - How SAP Ramps Up New Developers
      link: "https://www.youtube.com/watch?v=4TetOuDGB_s"
      author: Dan-Joe Lopez
      image: "/img/HumanIcon.svg"
      imageAlt: Transmogrifier Cyrstal - badge of crystals
    two: 
      title: Third Time’s a Charm - Introducing and Evolving a Chef Infra Implementation
      link: "https://www.youtube.com/watch?v=hluE31gRUPc"
      author: Graham Davison
      image: "/img/HumanIcon.svg"
    three:
      title: Easy Multi-Node Configuration with Chef and HashiCorp Consul
      link: "https://www.youtube.com/watch?v=lIdFnic4mzM"
      author: Sean Carolan
      image: "/img/HumanIcon.svg"
    four: 
      title: Integrating Chef with ServiceNow
      link: "https://pages.chef.io/202001-Webinar-IntegratingChefwithServiceNow_01Register.html"
      author: Nick Rycar, Brittany Woods
      image: "/img/HumanIcon.svg"
resources:
  header: From the Chef Infra Blog
contact:
  header: Accelerate your business’s move to the cloud and adoption of container technology.
  ctaOne: 
    link: https://www.chef.io/products/chef-infra/
    copy: Learn more
---
<p>Chef Infra Client is an open-source infrastructure as code (ICA) tool for reducing manual and repetitive tasks for Windows, Linux, Mac and *nix systems. </p>

<div class="center-xs">
<a class="btn btn-primary" href="https://docs.chef.io/chef_overview/" target="_blank" rel="noopener noreferrer">Get started</a>
<a class="btn btn-secondary" href="https://discourse.chef.io/c/chef-release/9" target="_blank" rel="noopener noreferrer">Release Notes</a>
</div>
<div class="center-xs">
<iframe title="Github" id="github-star" class="center-xs" src="https://ghbtns.com/github-btn.html?user=chef&repo=chef&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
</div>
