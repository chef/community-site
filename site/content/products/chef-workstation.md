---
title: The quickest way to get started with Chef’s suite of tools
type: chef-workstation
hero: 
  logo: /img/logos/chef-workstation-dark.svg
  image: /img/chef-run.gif
cards:
  header: Tools and libraries for interacting with Chef’s tools
  one:
    icon: /img/icons/workstation-1.svg
    title: One click gets you everything you need
    body: >-
      Chef Workstation gives you all the tools you need to get started and includes:  

      • Chef Workstation App  

      • Chef Infra Client  

      • Chef InSpec  

      • Chef Habitat  

      • Chef Command Line Tool  

      • Test Kitchen  

      • Cookstyle  

      • Various Test Kitchen and Knife plugins  

      • [Upgrade Lab](https://docs.chef.io/workstation/upgrade_lab/) 
  two:
    icon: /img/icons/workstation-2.svg
    title: Run Ad-Hoc tasks from the CLI
    body: >-
      Apply dynamic, repeatable configurations to your servers directly over SSH or WinRM via chef-run. This provides a quick way to apply config changes to the systems you manage whether or not they’re being actively managed by Chef Infra, without requiring any pre-installed software.  
  three:
    icon: /img/icons/workstation-3.svg
    title: Robust testing & development tools
    body: >-
      Chef Workstation comes to replace  Chef DK. It includes features such as development tools for testing, dependency resolution, and cookbook generation, ensuring that whether you’re consuming existing chef policies, or creating your own, you have everything you need to get up and running quickly.  
 
 
      <a class="cta" href="https://docs.chef.io/workstation/" target="_blank" rel="noopener noreferrer">Learn more</a>
benefits:
  headerImage: /img/logos/chef-workstation-white.svg
  headerTwo: can be used to
  one: 
    header: Detect & Remediate
    copy: >-

      ####  Detect & Remediate Security Issues  

      1. Scan a server to verify network time protocol (`ntp`) is installed and running  

      2. Remediate scan failure by Installing and configuring `ntp`
 
      3. Re-scan server for compliance  

 
      <a class="btn btn-primary-white" href="https://docs.chef.io/workstation/getting_started/#ad-hoc-remote-execution-with-chef-run" target="_blank" rel="noreferrer noopener">Learn more</a>
    code: |-
      
      $ inspec exec check_ntp.rb -t ssh://centos@34.222.175.132  

      Profile: tests from /Users/tball/check_ntp.rb (tests from .Users.tball.check_ntp.rb)
      Version: (not specified)
      Target:  ssh://centos@34.222.175.132:22  

        ×  check ntp: Service ntp (2 failed)
          ×  Service ntp is expected to be installed
          expected that `Service ntp` is installed
          ×  Service ntp is expected to be running
          expected that `Service ntp` is running  

      Profile Summary: 0 successful controls, 1 control failure, 0 controls skipped
      Test Summary: 0 successful, 2 failures, 0 skipped  

      $ chef-run ssh://centos@34.222.175.132 start_ntp.rb
      [✔] Packaging cookbook... done!
      [✔] Generating local policyfile... exporting... done!
      [✔] Applying start_ntp from /Users/tball/start_ntp.rb to target.
      └── [✔] [ubuntu1] Successfully converged start_ntp.  

      $ inspec exec check_ntp.rb -t ssh://centos@34.222.175.132  

      Profile: tests from /Users/tball/check_ntp.rb (tests from .Users.tball.check_ntp.rb)
      Version: (not specified)
      Target:  ssh://centos@34.222.175.132:22  

        ✔  check ntp: Service ntp
          ✔  Service ntp is expected to be installed
          ✔  Service ntp is expected to be running  
          
      Profile Summary: 1 successful control, 0 control failures, 0 controls skipped
      Test Summary: 2 successful, 0 failures, 0 skipped
  two: 
    header: Define Automation
    copy: >-

      #### Define Customized Automation  

      Visit <a class="white" href="https://supermarket.chef.io/" target="_blank" rel="noopener noreferrer">Chef Supermarket</a> to find a library of partner and community maintained configuration policy, or use Chef's declarative resources to create custom automation for your organization. 


      <a class="btn btn-primary-white" href="https://docs.chef.io/cookbooks/" target="_blank" rel="noreferrer noopener">Learn more</a>
    code: |-

      $ chef generate cookbook my_custom_policy \
      --copyright 'Jean Doe' --email jdoe@company.tld

      Generating cookbook my_custom_policy
      - Ensuring correct cookbook content
      - Committing cookbook files to git

      Your cookbook is ready. Type `cd my_custom_policy` to enter it.

      Why not start by writing an InSpec test? Tests for the default recipe are stored at:

      test/integration/default/default_test.rb

      If you'd prefer to dive right in, the default recipe can be found at:

      recipes/default.rb

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
  header: Free in-depth training and hands-on experiences built by the Chef experts.
  copy: 
  ctaOne: 
    link: https://learn.chef.io/#/infrastructure-automation
    copy: Learn Chef
---
<div class="center-xs">
<a class="btn btn-primary" href="https://downloads.chef.io/products/workstation" target="_blank" rel="noopener noreferrer">Download Workstation</a>
<a class="btn btn-secondary" href="https://docs.chef.io/workstation/" target="_blank" rel="noopener noreferrer">Get Started</a>
<br/>
<iframe title="Github" id="github-star" src="https://ghbtns.com/github-btn.html?user=chef&repo=chef-workstation&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
</div>