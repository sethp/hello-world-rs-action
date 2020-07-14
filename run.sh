
env INPUT_WHO-TO-GREET='Mona the octocat' \
    GITHUB_EVENT_NAME='fake' \
    GITHUB_SHA='sha' \
    GITHUB_WORKFLOW='workflow' \
    GITHUB_ACTION='action' \
    GITHUB_ACTOR='actor' \
    GITHUB_JOB='job' \
    GITHUB_RUN_NUMBER='1' \
    GITHUB_RUN_ID='1' \
    GITHUB_EVENT_PATH=test-event.json \
    GITHUB_REPOSITORY='owner/repo' \
    cargo run
