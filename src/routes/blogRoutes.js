const express = require('express');
const blogRouter = express.Router();

const blogs = [
    {
        title: "My First Blog",
        subtitle: "This is the first blog that I have written",
        author: "Jon Doe",
        date: "21st October"
    },
    {
        title: "My Second Blog",
        subtitle: "This is the second blog that I have written",
        author: "Bob Jones",
        date: "22nd October"
    },
    {
        title: "My Third Blog",
        subtitle: "This is the third blog that I have written",
        author: "Amy Adams",
        date: "23rd October"
    }
]
blogRouter.route('/')
    .get((req, res) => {
        res.render('blogsListView', {
            nav: [
                {link: '/nutrients', title: 'Nutrients'},
                {link: '/medicine', title: 'Medicine'},
                {link: '/home', title: 'Home'},
            ],
            title: 'Blog List',
            blogs
        }
        );
    });

    blogRouter.route('/:id')
    .get((req,res) => {
        const id = req.params.id;
        res.render(
            'blog',
            {
                nav: [
                    {link: '/posts', title: 'Posts'},
                    {link: '/about', title: 'About'},
                ],
                title: 'Blog',
                blog: blogs[id]
            }
        )
    });

module.exports = blogRouter;
