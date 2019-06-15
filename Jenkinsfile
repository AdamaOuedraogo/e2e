
pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        //CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
       
        /*
        stage('Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
        */

        stage('e2e Tests') {
            steps {
                sh 'npm run cypress:ci'
            }
        }
       
    }

    post {
    always {
        junit 'results/cypress-report.xml'
    }
}
}