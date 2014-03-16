turing
======


## Setting up the development environment

1. Install [Node](http://nodejs.org/download/). While we won't be using Node server side, Grunt needs the Node Package Manager (npm)

2. Install [LiveReload browser plugin](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-). LiveReload isn't really a dependency, but it will make frontend development much nicer by automatically refreshing the webpage each time you save a file.

3. Open a terminal and run `npm install -g grunt-cli`. This will install the **grunt** command globally

4. In the terminal, navigate to the **root folder** of the project, then run `npm install`. This will install all the dependencies in the **package.json** file.

5. In the terminal, run `grunt`. This will compile all .scss files, combine and minify .js files and so on.

6. In the terminal, run `grunt dev`. This does two things: Start watching your files for changes, and start a local web server at http://0.0.0.0:8888/
