import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAY1BMVEX////MzMxNTU3JycnR0dFKSkpERETV1dVHR0f7+/ve3t7m5uY/Pz/29vbz8/PZ2dmKiopZWVmoqKh0dHS5ublvb29eXl6CgoKgoKCTk5Nqamo5OTljY2Ourq5UVFTBwcExMTG+F4ycAAAEeklEQVR4nO2a2ZaiMBCGDYQEJKyC4N7v/5QTaNtWpyobwZmL/FfdxxP8rC2VCptNUFBQUFBQUFBQUNC7sqyQyrJ/9fVFvq04pUSKUl5t8+LDKGXOSRyTF8n/eV5+jKCK3wF+QeLqAxxZTjGCHw6ar+yXnCgJ7hwkXxNBbYRnc6yFUVJDhBmDrhIbWwuEGWPrHaE0CYY3CuLZGLk1wozhNTJwV9BZKIVHl1QIA+W0G6U6+QdCUXlCyDjMQEnbC8GkhOhbAmPE1A8EwsDbhqXRXSlrWg5TcB8MsC8oqVkSPSlhNWwMHx4BY3JCYNGbUjbEEMby6ARzk172fyFMYlELUizM1BJi4LVIIAbpE1FDkREvq1qQk/kAmuFujAGMzyUMUEDQUeAMkqIGPLIkLEBnkAbxxU98QosWOASKMo0hokiM4DJXBjAzYo0hoqQBl7lmCOiMThGV96jooHWxR0PQgx7i4K9YZNDvIbxPdRBpD+8iLj043MfwvSYkpqAAIZxMAW/NVIcwCbaEQ4LANYIQrTekKeCVDrUC6aZiEwiE335Px06bBhBgzSQOWYp5w8QdKbLU2h9Yj8+veogrHJj2+YE8h/CjPkXP6GI7BrhSTc8Z9MUKbikm2dWrAgsJ57I9+8MuKNBjHx31EOBePkPYBcUWMygxcQe62K7BqjBDRFpDTE03Zgq7coWEFr2c9AxRdLogFFbpkSEPobVBrZIOgZrdeb1NeqAQO22VmJTsfEAUmFP1pWqGOCLLSWEDgT2kN4Po14RYGhN+IDqz7Oh8QGCBSaju1DF7o0GX+8gOk61DegPdPKwg0J2ctiYVE5xSTLLby7GyLf2h38Cu6EjRrmyjGxjtdpre6rq7YYstNzB8gkurUZmm6Vjhs1W7rRztc4nuSAwfh+8QNhmqaO+mRykHFEI1Bbc8jqJtogxxNYRqpR2DaqzPz4qChbfaDi2/IiiUBQvvcl0Oo6rIVLlDFZe2DOj1wmQKfFCS9gpD2B+I3ZJUmaAOY0T8J+ETPHhy92NAewZVfsRYfiRnxSKXcZGiXjlBOA3OVKbA+l28uXSepuKbGNb5o72+8zBVcSq2h3C/eAGfSDlHJyXJUX4Ir3JlgGoFvbX17gwjTDrv6ha4CVty9/N+6ULp2AiWqjawlIlmfL8zXnYX9/IoHksE/Pt/JTHi1810CcOmfLJCN6QqG7zYg6XD0wFo4UXcI0PobTCZj/yKRcPtjrH85YEpLGh1G4TRKfRZqRhu1eKA+JZ8zuVoj/CNcbzIX7CcYbO5NKkTwoyRXi8+GDZFb5QSsERv1+bjGowGApBOgycEqYOjLcTBH4OMC+yKXqWE+YmHhyq7KjGJRb5eqHkoQ99XQMwg6jXeAyR7i8gQ+2X7Ba72ZGaNRJzalRBmjOikv/k5XddEkCplCVfPJ9jx4qs+4cp4LQQDC7lsaETNP/W+MB979jW1WA/J7/9i/ejlzS5zFdvuMPTnfXO9NvtzPxy67fpeAJWVZS5Vlv/q7fGgoKCgoKCgoKCg/1h/AF9vQcL0avPyAAAAAElFTkSuQmCC"
    }
},{timestamps:true});

const User= mongoose.model('User',userSchema);

export default User;