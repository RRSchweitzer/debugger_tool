1. Install Node.js using homebrew
	\n Install homebrew if you don’t already have it installed. Console Command:
		/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
	Now install node with command in console
		brew install node

2. Install nodemon.
	Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Console command:
	npm install -g nodemon
	***If the above doesn’t work try adding sudo:
			 sudo install -g nodemon demon

3. Run "npm install"
	This will install all node modules from the package.json file

4. To run server:
	nodemon server.js