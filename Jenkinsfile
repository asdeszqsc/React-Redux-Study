pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
		sh "docker build -t builder:${env.BUILD_ID}"
		sh "docker run -dit --name ${env.BUILD_ID} builder:${env.BUILD_ID}"
		sh "docker cp ${BUILD_ID}:/app/build ./"
		sh "mkdir /home/ubuntu/web-versions/${env.BUILD_ID}"
		sh "cp ./build /home/ubuntu/web-versions/${env.BUILD_ID}/"
            }
        }
        stage("Deploy") {
            steps {
		sh "cp ./build /home/ubuntu/react-redux-study/"
		sh "docker stop ${env.BUILD_ID}"
		sh "docker rm ${env.BUILD_ID}"
		sh "docker rmi builder:${env.BUILD_ID}"
            }
        }
    }
}
