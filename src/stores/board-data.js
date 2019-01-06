export default {
    stages: ["6e4f19aa-0e0f-48d3-a39f-fd61eee3f774", "28b195dd-aa29-44f2-8cf2-0889d5b609ae", "f4b780d8-6f8b-424d-938f-569287ca4418", "8521c214-264f-425a-b4b1-d51b13d4919d"],
    stagesById: {
        "6e4f19aa-0e0f-48d3-a39f-fd61eee3f774": {
            "name": "Planning",
            "projects": ["1e014455-4fac-432a-81cd-6bf3b68e12f7"]
        },
        "28b195dd-aa29-44f2-8cf2-0889d5b609ae": {
            "name": "In-Progress",
            "projects": ["f501eee4-828a-4951-ae3c-5f26a943bfe3", "c51aae37-b918-4879-b6d6-bc737402d56f"]
        },
        "f4b780d8-6f8b-424d-938f-569287ca4418": {
            "name": "Testing",
            "projects": ["e642f8a9-df18-435c-b4bf-f6656398055c"]
        },
        "8521c214-264f-425a-b4b1-d51b13d4919d": {
            "name": "Completed",
            "projects": ["af40b3b8-d03f-471c-a04e-12da5a39eebc"]
        }
    },
    projects: ["1e014455-4fac-432a-81cd-6bf3b68e12f7", "f501eee4-828a-4951-ae3c-5f26a943bfe3", "e642f8a9-df18-435c-b4bf-f6656398055c", "c51aae37-b918-4879-b6d6-bc737402d56f", "af40b3b8-d03f-471c-a04e-12da5a39eebc"],
    projectsById: {
        "1e014455-4fac-432a-81cd-6bf3b68e12f7": {
            "name": "A Song of Ice and Fire",
            "stage": "6e4f19aa-0e0f-48d3-a39f-fd61eee3f774",
            "type": "Video",
            "duration": "Sept-Nov",
            "budget": "63,789.123",
            "producer": "Jon Snow"
        },
        "f501eee4-828a-4951-ae3c-5f26a943bfe3": {
            "name": "Fight Club",
            "stage": "28b195dd-aa29-44f2-8cf2-0889d5b609ae",
            "type": "Blog",
            "duration": "Sept-Nov",
            "budget": "10,000",
            "producer": "Brad Pitt"
        },
        "e642f8a9-df18-435c-b4bf-f6656398055c": {
            "name": "Fifa WC 2006",
            "stage": "f4b780d8-6f8b-424d-938f-569287ca4418",
            "type": "Tweet",
            "duration": "Sept-Nov",
            "budget": "789,456,123",
            "producer": "Zidane"
        },
        "c51aae37-b918-4879-b6d6-bc737402d56f": {
            "name": "La Liga",
            "stage": "28b195dd-aa29-44f2-8cf2-0889d5b609ae",
            "type": "Post",
            "duration": "Sept-Nov",
            "budget": "29,872",
            "producer": "Messi"
        },
        "af40b3b8-d03f-471c-a04e-12da5a39eebc": {
            "name": "Inception",
            "stage": "8521c214-264f-425a-b4b1-d51b13d4919d",
            "type": "Story",
            "duration": "Sept-Nov",
            "budget": "63",
            "producer": "Leo"
        },
    }
}