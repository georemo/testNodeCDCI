# testNodeCDCI

<strong>Background:</strong> <br>
This project has been used to test procedure for CI/CD given in the link below:<br>
https://medium.com/@naistangz/building-a-ci-cd-pipeline-for-a-node-js-app-with-docker-and-jenkins-ee6db6e70d25#e3e3 <br>
Resulting docker image: goremo/test-node-cdci

The image hosts a simple Node.js application based on the example at this link below: <br>
https://www.testim.io/blog/node-js-unit-testing-get-started-quickly-with-examples <br>
The above link could not work but a number of corrections were made before it worked satisfactorily. <br>
Reference: https://github.com/georemo/testNodeCDCI <br>

<strong>Demo Instructions:</strong><br>
1. docker run  --name add-app -p 3001:3001 goremo/test-node-cdci:tagname (replace tagname with appropriate tag eg '4')
2. In the browser, navigate to http://localhost:3001
3. in the text box, insert numbers seperated by comma (',') then submit.
4. Expect the sum of the number to show on the Result.

Note:
The application functions are not the objective of the project.  
The main objective is to test how jenkins can be used to deploy a docker image in a CI/CD environment

Status: 19th Aug 2022
- jenkins piplines working without error.  
- Any correction made and the development can be automated from the github to docker image seamlessly.
- image can run with docker to expectations


