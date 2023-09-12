# Arena Strength and Performance
#### Lexington's Premeiere Weight Training Gym

## instructions on how to run this project

locally
- cd into project root
- run 'npm install'
- run 'npm start'
- navigate to localhost:3000

via docker
- cd into project root
- build image
  - run 'docker build .'
    - alternatively, give it a useful tag
    - run 'docker build --tag arena-strength-and-performance .'
- start container: 
  - run 'docker run *detached *expose port 3000 *name the container *point to the image
  - run 'docker run -d -p 3000:3000 -name arena-strength-and-performance-container arena-strength-and-performance'


- Stop Container
  - docker stop 

- Remove old containers
  - docker container prune -f

- Remove old images
  - docker image prune -af
  - *note - image is singular!
