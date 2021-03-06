const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res, next) => {
    res.json({
        message: "Using GET /",
        metadata: {
            host: req.hostname,
            method: req.method
        }
            
            
        
    });
});
app.get("/:_id", (req, res, next) => {
    res.json({
        message: "Using GET by Id",
        metadata: {
            host: req.hostname,
            method: req.method
        }
            
            
        
    });
});

//post, patch, delete
app.post("/", (req, res, next) => {
    res.json({
        message: "Using POST /",
        metadata: {
            host: req.hostname,
            method: req.method
        }
    });
});

app.patch("/", (req, res, next) => {
    res.json({
        message: "Using PATCH /",
        metadata: {
            host: req.hostname,
            method: req.method
        }    
        
    });
});

app.delete("/", (req, res, next) => {
    res.json({
        message: "Using delete /",
        metadata: {
            host: req.hostname,
            method: req.method
        }
    });
});

// middleware modules for error handling
app.use((req, res, next) => {
    const error = new Error("Not Found!!!");
    error.status= 404;
    next(error);
});
app.use((req, res, next) => {
    const post = new Post ("Using Post");
    post.status = "Port: 3000, Host: localhost";
    next(post);

});
// app.use((req, res, next) => {
//     const delete = new Delete ("Using Delete");
//     delete.status = "Port:3000, Host:localhost";
//     next(delete);

// });
app.use((req, res, next) => {
    const patch = new Patch ("Using Patch");
    patch.status = "Port: 3000, Host: localhost";
    next(patch);

})
// middleware to send error nicely
app.use((error, req,res,next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});
// app.use((delete, req,res,next) =>{
//     res.status(delete.status || 500).json({
//         error: {
//             message: delete.message, 
//             status: delete.status,
//             method: req.method
//         }
//     });
// });


app.listen(process.env.port, () => console.log(`Starting serving on port ${process.env.port}`))