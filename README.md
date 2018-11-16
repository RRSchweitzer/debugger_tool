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

4. Create Self Signed Certificate
	Follow step 4 of https://docs.google.com/document/d/1Ewa7qm2B0rN48OPo-2Lq4cyqT17WvFI2m8Edolvz4Hw/edit

3. To run server:
	nodemon server.js