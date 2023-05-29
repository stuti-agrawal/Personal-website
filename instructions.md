# to deploy changes to production

- Create a gh-pages Branch and Push Your Built Application:

- First, create a new branch with `git checkout -b gh-pages`
- Remove everything from this branch (don't worry, your code is safe on the master branch) using `git  rm -rf .`
-Now, move the contents of the dist directory (which was created when you ran the build command) to the root of your project directory.
-Add all files to git with `git add .`
-Then, commit with `git commit -m "Deploy"`
-Push this branch to GitHub with `git push origin gh-pages`
-Configure GitHub Pages: Go to your repository on GitHub, click on the "Settings" tab, scroll down to the "GitHub Pages" section, and under "Source", select the gh-pages branch. Click "Save".

Access Your Website: Your website should now be live at https://stuti-agrawal.github.io/personal-website/, where username is your GitHub username, and repository is the name of your repository.