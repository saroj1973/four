pipeline{
    agent any
    environment{
        NETLIFY_SITE_ID ='ba14be02-f96c-4f47-bfce-b61f835cc08f'
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
                '''
            }   
        }
        stage('testing'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                test -f build/index.html
                npm test
                '''
            }
            post{
                always{
                    junit 'test-results/junit.xml'
                }
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