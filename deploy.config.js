import shell from 'shelljs';

shell.cd('dist');
shell.exec('git init');
shell.exec('git add .');
shell.exec('git commit -m "Update"');
shell.exec('git remote add origin https://github.com/ProbablyRaging/contentcreator-dist.git');
shell.exec('git push -u origin master');