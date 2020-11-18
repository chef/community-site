---
title: Chef Infra | Automate infrastructure configuration
aliases:
  - /tools/chef-infra
type: chef-infra
hero: 
  logo: /img/logos/chef-infra-dark.svg
  header: Automate infrastructure configuration
cards:
  header: Configuration Automation 
  one:
    icon: /img/icons/infra-1.svg
    title: Confidence Through Code
    body: >-
      Define infrastructure as code, making the process of managing configurations automated and testable.  
  two:
    icon: /img/icons/infra-2.svg
    title: Consistent Configuration
    body: >-
     Reduce duplicated manual configuration efforts, ensuring consistent configurations across the development lifecycle.
  three:
    icon: /img/icons/infra-3.svg
    title: Eliminate Drift
    body: >-
      Ensure configurations only change if a system diverges from the desired defined state and automatically correct configuration drift, if needed.
  four:
    icon: /img/icons/infra-4.svg
    title: Extreme Flexibility
    body: >-
      Use simple declarative definitions for common tasks or easily extend to support the most unique environmental requirements.
usage:
  headerImage: /img/logos/chef-infra-white.svg
  headerTwo: is Used For
  one: 
    header: Configuration Management 
    copy: >-
      ### Configuration Management 

      Express your infrastructure configuration as code, and make your systems testable, portable, and auditable. Give your teams the freedom to focus on building new innovations, rather than on solving problems that have already been solved in the past. Automate your systems' adherence to declared desired state and focus on solving the most important problems that your teams face.  
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
<p>Chef Infra is a powerful automation platform that transforms infrastructure configuration into code. Whether you’re operating in the cloud, on-premises, or in a hybrid environment, Chef Infra automates how infrastructure is configured, deployed, and managed across your network, no matter its size.</p>

<div class="center-xs">
<a class="btn btn-primary" href="https://docs.chef.io/chef_overview/" target="_blank" rel="noopener noreferrer">Get started</a>
<a class="btn btn-secondary" href="https://chef-marketing-public.s3-us-west-1.amazonaws.com/whitepapers/Chef-Infra-16-Product-Guide.pdf" target="_blank" rel="noopener noreferrer">Chef Infra 16 Product Guide</a>
</div>
<div class="center-xs">
<iframe title="Github" id="github-star" class="center-xs" src="https://ghbtns.com/github-btn.html?user=chef&repo=chef&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
</div>
