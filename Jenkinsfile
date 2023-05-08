pipeline {
  agent any
  tools {
    nodejs "NodeJS"
    }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm run start'
      }
    }

    // stage('Deploy') {
    //   environment {
    //     HOST = "<server-host>"
    //     PORT = "<server-port>"
    //     USER = "<server-user>"
    //     KEY = credentials('ssh-private-key')
    //   }
    //   steps {
    //     sshagent(['$KEY']) {
    //       sh "ssh -o StrictHostKeyChecking=no $USER@$HOST -p $PORT 'cd /path/to/app && git pull && npm install && pm2 restart app'"
    //     }
    //   }
    // }
  }
}
