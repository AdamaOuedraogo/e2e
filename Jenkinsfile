pipeline {

    agent any
    tools {nodejs "node"}
    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/AdamaOuedraogo/e2e.git'
            }
        }
        stage('Download Feature Files'){
            steps {
                downloadFeatureFiles serverAddress: 'https://nehemiecreation.atlassian.net', 
                    projectKey: 'CT', 
                    targetPath:'/cypress/features'
            }
        }
        stage('Clean Work Space'){
            steps {
                sh 'npm clean'
            }
        }
        

        stage('install Dependencies') {
            steps {
                sh 'npm i'
            }
        }

        stage('Build and run Test') {
            steps {
                sh 'npm run cypress:ci'
            }
        }
    
    }
    post {
        always {
            junit 'cypress-report.xml'
            publishTestResults serverAddress: 'https://nehemiecreation.atlassian.net', 
                    projectKey: 'CT', 
                    filePath:'cypress-report.xml', 
                    format: 'Cucumber', 
                    autoCreateTestCases: false
        }
    }
}



   