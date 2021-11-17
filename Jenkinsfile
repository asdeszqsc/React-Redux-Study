pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
		sh "docker build -t builder:1.${env.BUILD_ID} ."
		sh "docker run -dit --name 1.${env.BUILD_ID} builder:1.${env.BUILD_ID}"
		sh "docker cp 1.${BUILD_ID}:/app/build ./"
		sh "sudo mkdir /home/ubuntu/web-versions/1.${env.BUILD_ID}"
		sh "sudo cp ./build /home/ubuntu/web-versions/1.${env.BUILD_ID}/"
            }
        }
        stage("Deploy") {
            steps {
		sh "sudo cp ./build /home/ubuntu/react-redux-study/"
		sh "docker stop 1.${env.BUILD_ID}"
		sh "docker rm 1.${env.BUILD_ID}"
		sh "docker rmi builder:1.${env.BUILD_ID}"
            }
        }
    }
}
