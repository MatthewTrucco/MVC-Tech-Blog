const express = require('express');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth'); 

const router = require('express').Router();


router.get('/posts', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if (postData) {
            res.json(postData);
        } else {
            res.status(404).json({ message: 'No post found with this id!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/posts', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            userId: req.session.userId 
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/posts/:id', withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (updatedPost[0] > 0) {
            res.status(200).json(updatedPost);
        } else {
            res.status(404).json({ message: 'No post found with this id!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/posts/:id', withAuth, async (req, res) => {
    try {
        const deletedPost = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (deletedPost) {
            res.status(200).json({ message: 'Post deleted!' });
        } else {
            res.status(404).json({ message: 'No post found with this id!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
