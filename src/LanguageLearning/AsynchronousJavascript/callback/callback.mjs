//Author: Mahedi Hassan Shawon
//Notes can be found on callback.md file

//Without using callback
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

//With callback;
function fetchProfileAsync(callback)
{
    setTimeout(
        ()=>{
            const profile  = {
                id: '001',
                name: 'Mahedi Hassan Shawon',
                Occupation: 'Software Engineer',
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