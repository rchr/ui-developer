#!/usr/bin/env groovy


  // use the smaller nodejs build node since most 
  // Nodejs builds are Stripes.
  //def buildNode = config.buildNode ?: 'jenkins-slave-all'
  def buildNode = 'jenkins-slave-all'


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
        }
    }
  }

      



