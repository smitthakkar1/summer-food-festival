const API_ROOT = 'http://hardikjogi.pythonanywhere.com/summer'

const requests = {
    get: url =>
        fetch(url,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
};

export const Helper = {
    getAll: () =>
        requests.get(API_ROOT),
    // searchBySubject: (body) =>
    //     requests.post(API_ROOT + '/edchain/courses/', `{"subject_matter": "${body}"}`),
    // searchByTitle: (body) => 
    //     requests.post(API_ROOT+ '/edchain/courses/', `{"course_title": "${body}"}`),
    // getContentIPFS: (hashKey) =>
    //     requests.get(IPFS_ROOT + `?arg=${hashKey}`),
    // getYaleCourses: () => 
    //     requests.get(API_ROOT + '/edchain/courses/yale_dump')
};

export default {
    Helper
};