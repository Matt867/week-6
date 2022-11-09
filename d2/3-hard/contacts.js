const express = require("express");
const { Contact } = require("./models/contact");

const app = express();

app.use(express.json());


app.get('/contacts', async (req, res) => {
    const contacts = await Contact.findAll();

    res.send(contacts);
})

app.post('/contacts', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailAddress = req.body.emailAddress;

    if (!firstName | !lastName) {
        res.sendStatus(400);
    } else {

        await Contact.create({
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress ? emailAddress : null
        })

        res.sendStatus(201);
    }
})

app.get('/contacts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const contact = await Contact.findByPk(id);
        res.send((await contact).toJSON())
    } catch {
        res.sendStatus(404);
    }

})

app.delete('/contacts/:id', async (req, res) => {
    const id = req.params.id
    const contact = await Contact.findByPk(id)

    if (contact) {
        await contact.destroy()
        res.sendStatus(200)
    } else {
        res.sendStatus(200)
    }
})

app.put('/contacts/:id', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailAddress = req.body.emailAddress;

    const contact = await Contact.findByPk(req.params.id)

    if (!contact) {
        res.sendStatus(404)
    } else {

        if (!firstName | !lastName) {
            res.sendStatus(400)
        } else {

            contact.update({
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress
            })

            res.sendStatus(200)

        }

    }

})

app.patch('/contacts/:id', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailAddress = req.body.emailAddress;

    const contact = await Contact.findByPk(req.params.id)

    if (!contact) {
        res.sendStatus(404)
    } else {

        

    }
})

// Add a PATCH handler on the "/contacts/:id" route that optionally expects a
// `firstName`, `lastName`, and `emailAddress` parameter:
//
// - if the `id` is invalid, respond with a Not Found status code.
//
// - if any of the parameters are provided, update the associated contact and
//   respond with an OK status code.
//



module.exports = app;
