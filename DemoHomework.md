# Demo Homework workflow

- Checkout a new branch
  - `git checkout -b yourname-feature`
- Change something and commit/push
    - `git add filename`
    - `git commit -m "A message"`
    - git push
- Switch back to master
    - `git checkout master` 
- Change something (To simulate conflict)
- Commit and push
- Switch to your first branch
    - `git checkout yourname-feature`   
- Pull the latest changes from master (DO THIS BEFORE PULL REQUESTS)
    - `git pull origin master` 
- Test your change
- Push the fixes
- Open Pull request (on github)
- Make a comment
- Merge pull request to master

- do not commit to master branch
- git checkout -b brian-test
