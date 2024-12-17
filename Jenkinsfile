pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                echo 'Cloning source code...'
                retry(3) { // Thử lại nếu gặp lỗi
                    sh '''
                    git config --global http.postBuffer 524288000
                    git clone https://github.com/LVNAnh/product-api.git .
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh '''
                docker stop nodejs-server || true
                docker rm nodejs-server || true
                docker build -t nodejs-server .
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Starting Node.js server container...'
                sh '''
                docker run -d --name nodejs-server -p 3000:3000 nodejs-server
                '''
            }
        }

        stage('Test API') {
            steps {
                echo 'Testing /product route...'
                sh 'curl http://localhost:3000/product'
            }
        }
    }

    post {
        always {
            echo 'Stopping server container after pipeline...'
            sh 'docker stop nodejs-server || true'
        }
    }
}
