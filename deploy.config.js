import shell from 'shelljs';
import fs from 'fs';

fs.copyFile('robots.txt', 'dist/robots.txt', (err) => {
    if (err) {
        console.error('Error copying robots.txt:', err);
    } else {
        console.log('robots.txt file copied successfully.');
    }
});

fs.copyFile('sitemap.xml', 'dist/sitemap.xml', (err) => {
    if (err) {
        console.error('Error copying sitemap.xml:', err);
    } else {
        console.log('sitemap.xml file copied successfully.');
    }
});

shell.cd('dist');
shell.exec('git init');
shell.exec('git add .');
shell.exec('git commit -m "Update"');
shell.exec('git remote add origin https://github.com/ProbablyRaging/contentcreator-dist.git');
shell.exec('git push -u origin master');