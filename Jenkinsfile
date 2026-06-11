pipeline{
    agent any
    environment{
        NETLIFY_SITE_ID ='731c4759-9b16-44f6-83b2-4eada589b86a'
        NETLIFY_AUTH_TOKEN =credentials('netlify-token') 
    }
    stages{
        stage('build'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                ls -la
                npm --version
                node --version
                npm ci
                npm run build
                ls -la
                echo 'saroj'
                '''
            }   
        }
        
        stage('deploy'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                npm install netlify-cli@20.1.1
                node_modules/.bin/netlify --version
                echo ".... printind status of netlify"
                
                node_modules/.bin/netlify status
                node_modules/.bin/netlify deploy --dir=build --prod
                '''
            }
        }
       
    }
    
}