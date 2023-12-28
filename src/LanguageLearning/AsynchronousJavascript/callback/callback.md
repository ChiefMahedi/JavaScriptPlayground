# Callback in JavaScript

- A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time.
- Callbacks used to be the main way asynchronous functions were implemented in JavaScript.

### Synchronous Data Fetching (Without Callback)
`fetchProfile()` Function
- Functionality: Retrieves user profile information synchronously.
- Returned Data Structure: Returns an object containing user details such as ID, name, occupation, GitHub profile, and project details.

`fetchProjects(profile)` Function
- Functionality: Constructs an array of projects based on the user profile information.
- Input: Receives the user profile object.
- Returned Data Structure: Generates an array containing project details such as project ID, name, and owner.
- Description: Utilizes the user profile object to create an array of projects, each object within the array representing a distinct project associated with the user.
```javascript
function fetchProfile()
{
    const profile  = {
        id: '001',
        name: 'Mahedi Hassan Shawon',
        Occupation: 'Software Engineer',
        github: 'https://github.com/ChiefMahedi',
        project_1: 'ChiefDine',
        project_2: 'ChieFaceEnhance'
    }
    return profile;
}
function fetchProjects(profile)
{
    const projects = [
        {
            p_id: '001',
            p_name: profile.project_1,
            p_owner: profile.name
        },
        {
            p_id: '002',
            p_name: profile.project_2,
            p_owner: profile.name
        },
    ]
    return projects;
}
const profile = fetchProfile();
const projects = fetchProjects(profile);
console.log("Without Callback: ",projects);
```
- As a synchronous program, this is very straightforward. Here we have a single operation that's split into two steps, where each step depends on the last step.

### Asynchronous Data Fetching (With Callback)

```javascript
function fetchProfileAsync(callback)
{
    setTimeout(
        ()=>{
            const profile  = {
                id: '001',
                name: 'Mahedi Hassan Shawon',
                occupation: 'Software Engineer',
                github: 'https://github.com/ChiefMahedi',
                project_1: 'ChiefDine',
                project_2: 'ChieFaceEnhance'
            }
            callback(profile);
        }, 1000
    )
}
function fetchProjectsAsync(profile, callback)
{
    setTimeout(
        ()=>{
            const projects = [
                {
                    p_id: '001',
                    p_name: profile.project_1,
                    p_owner: profile.name
                },
                {
                    p_id: '002',
                    p_name: profile.project_2,
                    p_owner: profile.name
                },
            ]
            callback(projects);
        }, 1000
    )
}

fetchProfileAsync((profile)=>{
    fetchProjectsAsync(profile,(projects)=>{
        console.log("With callback: ", projects);
    })
})
```
`fetchProfileAsync(callback)` Function
- Functionality: Simulates asynchronous user profile retrieval using `setTimeout`.
- Callback Usage: Invokes the provided callback function once profile data is fetched

`fetchProjectsAsync(profile, callback)` Function
- Functionality: Simulates asynchronous project data retrieval based on the provided profile.
- Input: Takes the user profile object and a callback function.
- Callback Usage: Calls the provided callback function with the retrieved projects.
- Description: Similar to fetchProfileAsync, it mimics an asynchronous operation, accepting the user profile as a parameter, and invoking the callback with project data after a simulated delay.
