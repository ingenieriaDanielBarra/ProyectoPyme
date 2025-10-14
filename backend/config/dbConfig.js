const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexion exitosa a mongoDB atlas");
    } catch (error) {
        console.error("Error al conectar a mongoDB atlas:", error);
        process.exit(1); // Termina el proceso si hay un error de conexión
    }
};

module.exports = connectDB;