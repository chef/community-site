---
title: Compliance as Code
type: inspec
hero: 
  logo: /img/logos/chef-inspec-dark.svg
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
  header: Compliance by design
  one:
    icon: /img/icons/inspec-1.png
    title: Platform Agnostic
    body: >-
      Chef InSpec supports all major operating systems and is platform agnostic, allowing you the freedom to run compliance and security tests anywhere. 
  two:
    icon: /img/icons/inspec-2.png
    title: Test Locally or Remotely
    body: >-
      Chef InSpec provides a local agent for host-based assessments, as well as full remote testing support via SSH and WinRM. 
  three:
    icon: /img/icons/inspec-3.png
    title: Free To Run Anywhere
    body: >-
      Chef InSpec is an open-source language that can easily express compliance as code, with the freedom to run anywhere.
  four:
    icon: /img/icons/inspec-4.png
    title: Extensible Language
    body: >-
       Easily extend the Chef InSpec language to cover new operating systems, devices, or applications.
benefits:
  headerImage: /img/logos/chef-inspec-white.svg
  headerTwo: can be used for
  one: 
    header: Compliance
    copy: >-
      ##### Codify agreements   

      Combine profiles and customize them with overlays. Pick controls and define exceptions as code.  

      ##### Add context to your tests  

      Utilize many fields like descriptions, tags, and impact.   
      
      ##### Apply to all systems  

      Analyze everything using the same codified profiles and controls.
    code: >-
      control 'sshd-21' do
        title 'Set SSH Protocol to 2'
        desc 'A detailed description'
        impact 1.0 # This is critical ref 'compliance guide, section 2.1'
        describe sshd_config do
        its('Protocol') { should cmp 2 }
        end
      end
  two:
    header: Infrastructure
    copy: >-
      ##### Test the desired state  

      Verify the current desired state of your apps and infrastructure according to the code you write.  

      ##### Human-readable code  

      Reduce friction by writing tests that are easy to understand by anyone.  

      ##### Extensible  

      Create custom resources with ease and share them easily with others.
    code: >-
      describe file('/etc/myapp.conf') do
        it { should exist }
        its('mode') { should cmp 0644 }
      end

      describe apache_conf do
        its('Listen') { should cmp 8080 }
      end

      describe port(8080) do
        it { should be_listening }
      end
  three:
    header: Provisioning
    copy: >-
      ##### Test AWS and Azure configuration  

      Verify all necessary settings of your favorite public cloud providers.  

      ##### Test provisioners  

      Chef InSpec can be used in combination with Cloudformation, Azure resource manager templates and Terraform.  

      ##### Verify security configuration  

      Ensure that your cloud deployments are not open to malicious attacks due to misconfiguration.
    code: >-
      describe aws_s3_bucket(bucket_name: 'my_secret_files') do
        it { should exist }
        it { should_not be_public }
      end

      describe aws_iam_user(username: 'test_user') do
        it { should have_mfa_enabled }
        it { should_not have_console_password }
      end
tutorials:
  columnOne: 
    header: Self-learning tutorials
    one: 
      title: Try Chef InSpec
      link: "https://learn.chef.io/modules/try-inspec/#/"
      copy: >-
        In this tutorial, see how Chef InSpec can help you quickly identify potential compliance and security issues on your infrastructure.
    two: 
      title: Explore Chef InSpec Resources
      link: "https://learn.chef.io/modules/explore-inspec-resources/#/"
      copy: >-
        Build an Chef InSpec profile that verifies whether an NGINX installation meets your requirements.
    three: 
      title: Create an InSpec profile from compliance documentation 
      link: "https://learn.chef.io/modules/create-profile-from-doc#/"
      copy: >-
        See how to create a compliance profile from documentation, using the Center for Internet Security (CIS) benchmarks as an example.
    four:
      title: Automating compliance for finance 
      link: "https://learn.chef.io/modules/hp-compliance/#/" 
      copy: >-
        Learn how Hewlett Packard Enterprise (HPE) uses Chef InSpec to ensure compliance and security.
  columnTwo:
    header: Community tutorials
    one: 
      title: Getting started with Chef InSpec -- The Chef InSpec basics series
      link: "http://www.anniehedgie.com/inspec-basics-1"
      author: Annie Hedgepeth
      image: "/img/annie_hedgepeth.jpg"
    two: 
      title: Windows infrastructure testing using Chef InSpec - Two part series
      link: "http://datatomix.com/?p=236"
      author: Christian Johannsen
      image: /img/christian_johannsen.jpg
    three:
      title: Operating Chef InSpec in an air-gapped environment
      link: "https://github.com/jeremymv2/chef-intranet-scaffolding/blob/master/README.md"
      author: Jeremy Miller
      image: "/img/jeremy_miller.jpg"
    four: 
      title: Testing Ansible with Chef InSpec
      link: "http://scienceofficersblog.blogspot.com/2016/02/testing-ansible-with-inspec.html"
      author: blindscientist
      image: "/img/favicons/android-chrome-256x256.png"
resources:
  header: From the Chef InSpec Blog
contact:
  header: Wondering how Chef InSpec might work for your team?
  copy: Chef InSpec provides a language for describing security and compliance rules that can be shared between software engineers, operations, and security engineers.
  ctaOne: 
    link: https://www.chef.io/products/chef-inspec/
    copy: Learn more
  ctaTwo:
    link: https://www.chef.io/pricing/
    copy: View pricing
---
<p class="lead">Turn your compliance, security, and other policy requirements into automated tests.</p>

<div class="center-mobile">
<a class="btn btn-primary" href="https://downloads.chef.io/" target="_blank">Download InSpec</a>
<a class="btn btn-secondary" href="https://docs.chef.io/" target="_blank">View Docs</a>
</div>