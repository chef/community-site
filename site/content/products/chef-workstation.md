---
title: The quickest way to get started with Chef’s suite of tools
type: chef-workstation
hero: 
  logo: /img/logos/chef-workstation-dark.svg
cards:
  header: Tools and libraries for interacting with Chef’s tools
  one:
    icon: /img/icons/inspec-1.png
    title: One click gets you everything you need
    body: >-
      Chef Workstation gives you all the tools you need to get started and includes:  

      - Chef Workstation App  

      - Chef Infra Client  

      - Chef InSpec  

      - Chef Command Line Tool  

      - Test Kitchen  

      - Cookstyle  

      - Various Test Kitchen and Knife plugins  

      - Upgrade Lab  
  two:
    icon: /img/icons/inspec-2.png
    title: Run Ad-Hoc tasks from the CLI
    body: >-
      Apply dynamic, repeatable configurations to your servers directly over SSH or WinRM via chef-run. This provides a quick way to apply config changes to the systems you manage whether or not they’re being actively managed by Chef Infra, without requiring any pre-installed software.  
  three:
    icon: /img/icons/inspec-3.png
    title: Robust testing & development tools
    body: >-
      Chef Workstation includes everything packaged within the Chef Development Kit. Development tools for testing, dependency resolution, and cookbook generation are all included, ensuring that whether you’re consuming existing chef policies, or creating your own, you have everything you need to get up and running quickly.  


      <a class="cta" href="https://www.chef.sh/docs/chef-workstation/getting-started/" target="_blank" rel="noopener noreferrer">Learn more</a>
benefits:
  headerImage: /img/logos/chef-workstation-white.svg
  headerTwo: can be used to
  one: 
    header: Detect & Remediate
    copy: >-

      ####  Detect & Remediate Security Issues  

      1. Scan a server to verify network time protocol (ntp) is installed and running  

      2. Remediate scan failure by Installing and configuring ntp  
 
      3. Re-scan server for compliance  

 
      <a class="btn btn-primary-white" href="https://docs.chef.io/workstation/getting_started/#ad-hoc-remote-execution-with-chef-run" target="_blank" rel="noreferrer noopener">Learn more</a>
  two: 
    header: Define Automation
    copy: >-

      #### Define Customized Automation  

      Visit the <a class="white" href="https://supermarket.chef.io/">Chef Supermarket</a> to find a library of partner and community maintained configuration policy, or use Chef's declarative resources to create custom automation for your organization. 


      <a class="btn btn-primary-white" href="https://docs.chef.io/cookbooks/" target="_blank" rel="noreferrer noopener">Learn more</a>
    code: |-

      $ chef-run 34.222.175.132 \
      my_cookbook::my_recipe \
      --user centos -i ~/.ssh/mykey \

      ✔ Packaging cookbook... done!
      ✔ Generating local policyfile... exporting... done!
      / Applying my_cookbook::my_recipe from /Users/nickrycar/Projects/
        / 34.222.175.132 Applying my_cookbook::my_recipe...
  three:
    header: Manage Infrastructure
    copy: >-
      #### Effortless Manage Infrastructure   

      Quickly configure servers directly over SSH or WinRM. Execute ad-hoc tasks on multiple hosts in parallel to quickly configure groups of servers.

      <a class="btn btn-primary-white" href="https://docs.chef.io/workstation/getting_started/#recipe-and-multi-node-convergence" target="_blank" rel="noopener noreferrer">Learn More</a>
    code: |-

      chef-run `terraform output mynodes_public_ips` \
      --user centos -i ~/.ssh/mykey \
      package ntp
      ✔ Packaging cookbook... done!
      ✔ Generating local policyfile... exporting... done!
      \ Applying package[ntp] from resource to targets.
        \ 34.222.192.248 Applying package[ntp]...
        \ 34.222.175.132 Applying package[ntp]...
        \ 34.223.63.28 Applying package[ntp]...
  four:
    header: Test Locally
    copy: >-
      #### Test Automation Locally Before You Publish  

      Chef Workstation includes Cookstyle and Test Kitchen to provide automated testing of your configuration policy. Combine these tools with Chef Automate to provide an auditable history of all change being applied to your environments.  

      <a class="btn btn-primary-white" href="https://learn.chef.io/courses/course-v1:chef+LocalDev101+Perpetual/about" target="_blank" rel="noopener noreferrer">Learn More</a>
    code: |-

      $ kitchen test \

      -----> Starting Test Kitchen (v2.5.3)
      -----> Cleaning up any prior instances of <default-centos-7>
      -----> Destroying <default-centos-7>...
             Finished destroying <default-centos-7> (0m0.00s).
      -----> Testing <default-centos-7>
      -----> Creating <default-centos-7>...
             Bringing machine 'default' up with 'virtualbox' provider...
             ==> default: Checking if box 'bento/centos-7' version '202002.04.0' is up to date...
             ==> default: Machine not provisioned because `--no-provision` is specified.
resources:
  header: From the Chef Workstation Blog
contact:
  header: Accelerate your business’s move to the cloud and adoption of container technology.
  copy: 
  ctaOne: 
    link: https://www.chef.io/products/
    copy: Learn more
---
<div class="center-xs">
<a class="btn btn-primary" href="https://downloads.chef.io/products/workstation" target="_blank" rel="noopener noreferrer">Download Workstation</a>
<a class="btn btn-secondary" href="https://www.chef.sh/docs/chef-workstation/getting-started/" target="_blank" rel="noopener noreferrer">Get Started</a>
<br/>
<iframe title="Github" id="github-star" src="https://ghbtns.com/github-btn.html?user=chef&repo=chef-workstation&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
</div>