# notepadqq-extensions
Extensions for the Notepadqq project found at: http://notepadqq.altervista.org/s/
If you can not see the extensions tab in the toolbar, open ~/.config/Notepadqq/Notepadqq.ini and add:

[Extensions]
RuntimeNodeJS=/usr/bin/nodejs
RuntimeNpm=/usr/bin/npm

# dependencies
node.js
npm

# building
These should be everything you need.

git clone git@github.com:qcerasmus/notepadqq-extensions.git

cd {notepadqq-extensions}/{extension you want to install}

{don't think this will be necessary}
npm install notepadqq-api --save

node /usr/share/notepadqq/extension_tools/pack.js . npm

The last one will create a package {extension-name}-version.subversion.revision.nqqext

You can install the nqqext extension now.
