pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/jorged104/SIS_AYD2_G3AppWeb.git'
      }
    }
      dir("API") {
	    sh "pwd"
	}
    stage('Install dependencies') {
      steps {
 
	sh 'cd API'
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}
