import express from 'express';

const app = express();

app.use(express.json());

app.get("/api/v1", (req, res) => {
    try{
        const p: number = Number(req.query.p);
        const r: number = Number(req.query.r);
        const t: number = Number(req.query.t);
    
        const interest: number = (p * r * t) / 100;
        const amount: number = interest + p;
    
        res.json({
            interest: interest,
            amount: amount
        });
    }
    catch{
        res.json({
            message: "Something went wrong with the server"
        })
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
