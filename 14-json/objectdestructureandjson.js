const course = {
    coursename : "js in hindi",
    price : 999,
    courseinstructor : "Hitesh"

}
// course.courseinstructor

// for single time excess course / we change courseinstructer to instructer for easily excess
const{courseinstructor : instructer} = course
//console.log(courseinstructor);
console.log(instructer);

// for destructring use in react
// const navbar = ({company}) => {

// }
// navbar(company = "Hamid") 
// console.log(navbar)

// Api formate as "object" 
// {
//     "name": "Hamid",
//     "courseName": "js in hindi",
//     "price" : "150"
// }

[
    {},
    {},
    {}
]
// json --> api call ---> result is bellow 
{
    "login": "hamid-khan-13",
    "id": 181220025,
    "node_id": "U_kgDOCs0yuQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/181220025?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hamid-khan-13",
    "html_url": "https://github.com/hamid-khan-13",
    "followers_url": "https://api.github.com/users/hamid-khan-13/followers",
    "following_url": "https://api.github.com/users/hamid-khan-13/following{/other_user}",
    "gists_url": "https://api.github.com/users/hamid-khan-13/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hamid-khan-13/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hamid-khan-13/subscriptions",
    "organizations_url": "https://api.github.com/users/hamid-khan-13/orgs",
    "repos_url": "https://api.github.com/users/hamid-khan-13/repos",
    "events_url": "https://api.github.com/users/hamid-khan-13/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hamid-khan-13/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 1,
    "following": 5,
    "created_at": "2024-09-11T10:56:17Z",
    "updated_at": "2024-09-11T11:38:04Z"
  }