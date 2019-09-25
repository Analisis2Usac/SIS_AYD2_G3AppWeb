def testpass = false; 
def dockerRun = 'sudo docker run -p 80:4000 -d -name app jorged104/appanalisis';

pipeline {
  agent any
    
  tools {nodejs "node"}
  
  environment {
       testing = false
   }
   
  stages {
      
      
        
    stage('Cloning Git') {
      steps {
       git branch: 'develop', url: 'https://github.com/Analisis2Usac/SIS_AYD2_G3AppWeb/'
      }
    }
    
        stage('Install dependencies') {
          steps {
                echo '+++++++++ Instalando dependencias  +++++' 
                 dir('API') {
                      sh "pwd"
                      sh 'npm install'
                 }
               }
        }
        stage('Test and Build Image') {
          steps {
              dir('API') { 
                 sh 'npm test'
                 junit 'test-reports.xml'
              }
           }
            post {
                success {
                  script
                  {
                      testpass = true;
                  }
                }
            }
        }
        
        
        stage('docker build ') {
               when {
                    expression { 
                        return testpass
                    }
                }
          steps {
                echo '+++++++++ Instalando dependencias  +++++ $USER' 
                sh 'docker build -t jorged104/appanalisis .'
               }
        }
        
       stage('docker push Image ') {
              when {
                    expression { 
                        return testpass
                    }
                }
          steps {
               withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerhub')]) {
                            sh 'docker login -u jorged104 -p ${dockerhub}'
                             sh 'docker push jorged104/appanalisis '
                   }
                  
                   
               }
        }
        stage('Despliegue') {
             
              when {
                    expression { 
                        return testpass
                    }
                }
          steps {
               
                sshagent(['dev-server']) {
                        sh 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-3-17-131-231.us-east-2.compute.amazonaws.com sudo docker run -p 80:4000 -d -name app jorged104/appanalisis'

                }                                                     
               }
        }    
        
           
  }
  
  
   
}
