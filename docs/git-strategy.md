## Git Workflow Strategy

### Main Branch
The `main` branch contains the stable version of the project. All changes in this branch are thoroughly tested and approved.

### Feature Branch
Development work is done in feature branches. Each feature branch is created from the `main` branch and is named according to the feature being developed.
<br> feature naming convention example: feature/taskNumber-shortDescription

## Repository Settings

### Direct Commits to Main Branch Declined
Direct commits to the main branch are prohibited. All changes must go through a pull request (PR) process to maintain the integrity of the main branch.

### One Approver Required per Pull Request (PR)
Each PR must be reviewed and approved by at least one team member before merging. This ensures code quality and consistency.

### Squash Merges Only
Only squash merges are allowed to keep the commit history clean and concise. This combines all commits from a PR into a single commit upon merging.

### Auto-Deletion of Source Branch After PR Merge
After a PR is merged, the source branch is automatically deleted to keep the repository tidy and reduce clutter.

