pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                echo 'Cleaning workspace...'
                cleanWs() 
            }
        }

        stage('Checkout') {
            steps {
                echo 'Cloning source code...'
                git url: 'https://github.com/LVNAnh/product-api.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'node --version' 
                sh 'npm --version'
                sh 'npm install'
            }
        }

        stage('Run Server') {
            steps {
                echo 'Stopping existing Node.js server (if any)...'
                sh 'pkill -f "node index.js" || true' 

                echo 'Starting new Node.js server...'
                sh 'nohup node index.js > output.log 2>&1 &'
                sleep 5 
            }
        }

        stage('Test API') {
            steps {
                echo 'Testing /product route...'
                sh 'curl http://localhost:3000/product'
            }
        }

        stage('Display Logs') {
            steps {
                echo 'Displaying server logs...'
                sh 'cat output.log'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
            sh 'pkill -f "node index.js" || true' 
        }
    }
}
