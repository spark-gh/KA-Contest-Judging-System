[![Join the chat at https://gitter.im/sparkstudios/KA-Contest-Judging-System](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sparkstudios/KA-Contest-Judging-System?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Code Climate](https://codeclimate.com/github/Team-Delta-KA/KA-Contest-Judging-System/badges/gpa.svg)](https://codeclimate.com/github/Team-Delta-KA/KA-Contest-Judging-System) [![Deployment status from DeployBot](https://team-delta.deploybot.com/badge/45290642014672/43809.svg)](http://deploybot.com)

## Khan Academy Contest Judging System 2.0
2.0; The "*next big version*" of KACJS. The goal, is to try and bring in "*next-gen*" technologies, such as ECMAScript 6.

### How to contribute (these steps only apply to those wanting to contribute to the 2.0 version)
 * `git clone https://github.com/sparkstudios/KA-Contest-Judging-System.git`
 * `git checkout 2.0`
 * `npm install`
 * `gulp` (or, if Gulp isn't installed globally: `node node_modules/gulp/bin/gulp.js`)

##### Running the client locally
We use Python3's `http.server` to run KACJS's client locally; so, you can too!
 * `python3 -m http.server 8000` (*Don't have Python3? No worries, you can just run `python -m SimpleHTTPServer 8000`*)
 * Point your browser to `127.0.0.1:8000`
