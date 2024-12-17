pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning source code...'
                git url: 'https://github.com/LVNAnh/product-api.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Server') {
            steps {
                echo 'Running server...'
                sh 'node index.js & sleep 10'
            }
        }

        stage('Test API') {
            steps {
                echo 'Testing /product route...'
                sh "curl http://localhost:3000/product"
            }
        }
    }
}
