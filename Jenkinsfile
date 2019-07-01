pipeline {
    agent any
    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/AdamaOuedraogo/e2e.git'
            }
        }
        stage('Download Feature Files'){
            steps {
                downloadFeatureFiles serverAddress: 'https://nehemiecreation.atlassian.net', 
                    projectKey: 'CTP', 
                    targetPath:'src/test/resources/features'
            }
        }
        stage('Clean Work Space'){
            steps {
                sh 'npm clean'
            }
        }
        stage('Build') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            junit 'results/cypress-report.xml'
            publishTestResults serverAddress: 'https://nehemiecreation.atlassian.net', 
                    projectKey: 'CTP', 
                    filePath:'target/cucumber/*.json', 
                    format: 'Cucumber', 
                    autoCreateTestCases: false
        }
    }
}
   