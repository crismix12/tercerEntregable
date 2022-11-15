const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const initModels = require('../models/initModels');
const Users = require('../models/users.models');
const UsersCourses = require('../models/userscourses.models');
const Videos = require('../models/videos.models');
const db = require('../utils/database');

initModels();

const users = [
    { firstName: "Pedro", lastName: "Rosas", password: "1234", email: "pedro@gmail.com" },
    { firstName: "Cristhian", lastName: "Chura", password: "1234", email: "cristhian@gmail.com" },
    { firstName: "Maria", lastName: "Perez", password: "1234", email: "maria@gmail.com" }
]

const courses = [
    {title: "Programing Foundamentals", description: "Learn about html, css and JS foundamentals which will lead you to understand how webpages are created", instructor: "Brenda Gonzalez"},
    {title: "ReactJS", description: "In this course you will learn how to use react in depth building diferent projects", instructor: "Andres Mendoza"},
    {title: "NodeJS/Express", description: "You will get into backend development using multiple modules and frameworks like express to quickly develop your projects", instructor: "Ian Rosas"}
]

const userscourses = [
    {userId: 1, courseId: 1, completePercentage: 40, review: "so far so good"},
    {userId: 2, courseId: 1, completePercentage: 30, review: "great course"},
    {userId: 3, courseId: 1, completePercentage: 20, review: "starting this course seems great"},
    {userId: 1, courseId: 2, completePercentage: 10, review: "its been entertaining"},
    {userId: 2, courseId: 2, completePercentage: 20},
    {userId: 2, courseId: 3, completePercentage: 40}   
];

const categories = [
    {name: "education", courseId: "1"},
    {name: "education", courseId: "2"},
    {name: "education", courseId: "3"},
    {name: "javascript", courseId: "1"},
    {name: "javascript", courseId: "2"},
    {name: "javascript", courseId: "3"},
    {name: "reactJs", courseId: "2"},
    {name: "nodeJs", courseId: "3"}
];

const videos = [
    {title:"intro to html", url: "http://fundamentos/1", courseId: 1},
    {title:"intro to css", url: "http://fundamentos/2", courseId: 1},
    {title:"intro to js", url: "http://fundamentos/3", courseId: 1},
    {title:"intro to react", url: "http://reactJs/1", courseId: 2},
    {title:"hooks", url: "http://reactJs/2", courseId: 2},
    {title:"redux", url: "http://reactJs/3", courseId: 2},
    {title:"Intro to NodeJs", url: "http://nodeJs/1", courseId: 3},
    {title:"Express", url: "http://nodeJs/2", courseId: 3},
    {title:"MVC", url: "http://nodeJs/3", courseId: 3},
]

db.sync({force: true})
    .then(async () =>{
        users.forEach((user) => Users.create(user));
        
        setTimeout(() => {
            courses.forEach((course) => Courses.create(course));
        }, 100);

        setTimeout(() => {
            userscourses.forEach((uc) => UsersCourses.create(uc));
        }, 200);

        setTimeout(() => {
            categories.forEach((categorie) => Categories.create(categorie));
        }, 300);

        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
        }, 400)
    });