#!/usr/bin/env groovy


  // use the smaller nodejs build node since most 
  // Nodejs builds are Stripes.
  //def buildNode = config.buildNode ?: 'jenkins-slave-all'
  def buildNode = 'jenkins-slave-all'

  def foliociLib = new org.folio.foliociCommands()


  properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', 
                                          artifactNumToKeepStr: '30', 
                                          daysToKeepStr: '', 
                                          numToKeepStr: '30'))]) 
 
  
  node(buildNode) {
    timeout(60) { 

        stage('Checkout') {
          deleteDir()
          currentBuild.displayName = "#${env.BUILD_NUMBER}-${env.JOB_BASE_NAME}"
          sendNotifications 'STARTED'

          def retval = checkout([
                 $class: 'GitSCM',
                 branches: scm.branches,
                 extensions: scm.extensions + [[$class: 'SubmoduleOption',
                                                       disableSubmodules: false,
                                                       parentCredentials: false,
                                                       recursiveSubmodules: true,
                                                       reference: '',
                                                       trackingSubmodules: false]],
                 userRemoteConfigs: scm.userRemoteConfigs
          ])

          echo "Checked out branch: $env.BRANCH_NAME"
          retval.each{ k, v -> println "${k}:${v}" }

          // the actual NPM package name as defined in package.json
          env.npmName = foliociLib.npmName('package.json')

          // simpleName is similar to npmName except make name okapi compliant
          def Map folioNameVerMap = foliociLib.npmSimpleNameVersion('package.json')          
          folionameVerMap.each { key, value ->
            env.folioName = key
            env.version = value
          }
          // "short" name e.g. 'folio_users' -> 'users'
          env.npmShortName = foliociLib.getNpmShortName(env.folioName)

          // project name is the GitHub repo name and is typically
          // different from mod name specified in package.json
          env.projectName = foliociLib.getProjName()

          //git commit sha1
          env.gitCommit = foliociLib.getCommitSha()
          env.projUrl = foliociLib.getProjUrl()

          echo "Package Name: $env.npmName"
          echo "Package FOLIO Name: $env.folioName"
          echo "Package Short Name: $env.npmShortName"
          echo "Package Version: $env.version"
          echo "Project Name: $env.projectName"
          echo "Git SHA1: $env.gitCommit"
          echo "Project Url: $env.projUrl"
        }
    }
  }

      



