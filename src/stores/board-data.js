export default {
    stages: ["plan", "wip", "test", "completed"],
    stagesById: {
        "plan": {
            "name": "Planning",
            "projects": ["proj1"]
        },
        "wip": {
            "name": "In-Progress",
            "projects": ["proj2", "proj4"]
        },
        "test": {
            "name": "Testing",
            "projects": ["proj3"]
        },
        "completed": {
            "name": "Completed",
            "projects": ["proj5"]
        }
    },
    projects: ["proj1", "proj2", "proj3", "proj4", "proj5"],
    projectsById: {
        "proj1": {
            "name": "A Song of Ice and Fire",
            "stage": "plan",
            "type": "Video",
            "duration": "Sept-Nov",
            "budget": "63,789.123",
            "producer": "Jon Snow"
        },
        "proj2": {
            "name": "Fight Club",
            "stage": "wip",
            "type": "Blog",
            "duration": "Sept-Nov",
            "budget": "10,000",
            "producer": "Brad Pitt"
        },
        "proj3": {
            "name": "Fifa WC 2006",
            "stage": "test",
            "type": "Tweet",
            "duration": "Sept-Nov",
            "budget": "789,456,123",
            "producer": "Zidane"
        },
        "proj4": {
            "name": "La Liga",
            "stage": "wip",
            "type": "Post",
            "duration": "Sept-Nov",
            "budget": "29,872",
            "producer": "Messi"
        },
        "proj5": {
            "name": "Inception",
            "stage": "completed",
            "type": "Story",
            "duration": "Sept-Nov",
            "budget": "63",
            "producer": "Leo"
        },
    }
}