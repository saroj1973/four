pipeline{
    agent any
    stages{
            environment{
            NETLIFY_SITE_ID = 'ba14be02-f96c-4f47-bfce-b61f835cc08f'
            NETLIFY_AUTH = credentials('netlify-token')
        }

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

        stage('TEST'){
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
                npm install netlify-cli
                node_modules/.bin/netlify --version
                node_modules/.bin/netlify status
                node_modules/.bin/netlify deploy --dir=/build --prod
            '''
           }     
        }


    }
}