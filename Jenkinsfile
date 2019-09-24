pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Analisis2Usac/SIS_AYD2_G3AppWeb/t'
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
