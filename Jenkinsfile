pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "yarn"
                sh "yarn build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /home/ubuntu/test/"
                sh "sudo cp -r ${WORKSPACE}/build/ /home/ubuntu/test/"
            }
        }
    }
}
