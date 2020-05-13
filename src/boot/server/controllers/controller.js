const mongoose = require("mongoose");


exports.create = (model, req, res) => {
    const newTodoObj = new mongoose.models[model](req.body);
    newTodoObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newTodoObj);
    });
}

exports.find = (model, req, res) => {
    console.log(model);
    let query = req.body || {};
    mongoose.models[model].find(query, (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(data);
    });
}

exports.findOne = (model, req, res) => {
    let query = req.body || {};
    mongoose.models[model].findOne(query, (err, data) => {
        if (err) return res.status(200).send(err)
        return res.status(200).send(data)
    });
}

exports.findById = (model, req, res) => {
    mongoose.models[model].findById(req.params.id, (err, object) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(object)
    });
}

exports.update = (model, req, res) => {
    mongoose.models[model].findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send(todo);
    })
}

exports.delete = (model, req, res) => {
    mongoose.models[model].findByIdAndRemove(req.params.id, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: model +  " successfully deleted",
            id: todo._id
        };
        return res.status(200).send(response);
    });
}