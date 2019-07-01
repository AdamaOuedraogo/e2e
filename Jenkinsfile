pipeline {
    agent any
    stages {
        stage('Preparation') {
            steps {
                git 'ssh://your_repository.git'
            }
        }
        stage('Download Feature Files'){
            steps {
                downloadFeatureFiles serverAddress: 'http://localhost:2990/jira', 
                    projectKey: 'WEB', 
                    targetPath:'src/test/resources/features'
            }
        }
        stage('Clean Work Space'){
            steps {
                sh 'mvn clean'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn test'
            }
        }
    }
    post {
        always {
            junit 'results/cypress-report.xml'
            publishTestResults serverAddress: 'http://localhost:2990/jira', 
                    projectKey: 'WEB', 
                    filePath:'target/cucumber/*.json', 
                    format: 'Cucumber', 
                    autoCreateTestCases: false
        }
    }
}
   