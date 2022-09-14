const express = require("express");
const {faker} = require("@faker-js/faker")
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newFakeUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    _id: faker.database.mongodbObjectId()
    };
    return newFakeUser;
}

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
}

const newFakeUser = createUser();
console.log(newFakeUser);

const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    res.json({newFakeUser, newFakeCompany});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );