import express from "express";

const router=express.Router();

const users= [
    {
        firstname: 'Hinnie',
        lastname: 'Tanajura',
        city: 'Kalilangan',
    },
    {
        firstname: 'Wednesday',
        lastname: 'Addams',
        city: 'America',
    },
];

router .get("/", (req,res)=>{
    res.send(users);
})

router.post("/", (req, res) =>{
    res.send("POST method is called");
});

export default router;
