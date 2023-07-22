# Slack Channel Selector

In order to connect to Slack, some apps will allow users to select channels that they'd like to connect. In some use cases, the user needs to be able to select multiple channels.

This poses an interesting UX / Engineering problem: What's the best way to load, display, and allow selection of Slack Channels?

### Typical Success response from the Slack channel API

````{
    "ok": true,
    "channels": [
        {
            "id": "C024BE91L",
            "name": "fun",
            "team_id": "T024BE911",
            "num_members": 34
        },
        {
            "id": "C024BE91K",
            "name": "more fun",
            "team_id": "T024BE912"
        },
        {
            "id": "C024BE91M",
            "name": "public-channel",
            "team_id": "T024BE911",
            "is_redacted": true,
            "num_members": 34
        },
        {
            "id": "C024BE91N",
            "name": "some more fun",
            "team_id": "T024BE921"
        }
    ]
}```
````
