pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/priyabratakhandual/Gym-React.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}

