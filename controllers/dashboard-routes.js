const express = require('express');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

const router = express.Router();

router.get('/', withAuth, async (req, res) => {
    try {
        
        const userData = await User.findByPk(req.session.userId, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            loggedIn: true 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('edit-post', {
                ...post,
                loggedIn: true 
            });
        } else {
            res.status(404).json({ message: 'No post found with this id' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
