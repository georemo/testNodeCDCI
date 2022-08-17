pipeline {
  agent any
  stages {
    stage('Cloning our Git') {
      steps {
        git 'https://github.com/georemo/testNodeCDCI.git'
      }
    }

    stage('Building Docker Image') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }

      }
    }

  }
}