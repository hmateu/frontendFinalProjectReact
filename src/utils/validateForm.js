export const checkForm = (name, value) => {
    switch (name) {
        case "name":
            if (!/^(?=(?:\S*\s?\S*){0,1}$)[A-Za-z\s]{2,}$$/.test(value)) {
                return "Formato de nombre no válido"
            }
            return ""

        case "surname":
            if (!/^(?=(?:\S*\s){0,4}\S*$)[A-Za-z\s]{2,}$/.test(value)) {
                return "Formato de apellidos no válido"
            }
            return ""

        case "dni":
            if (!/^(?:[0-9]{8}[A-Za-z])$/.test(value)) {
                return "DNI no válido"
            }
            return ""

        case "age":
            if (!/^(1[89]|[2-9][0-9]|10[0-5])$/.test(value)) {
                return "Edad no válida"
            }
            return ""

        case "pc":
        case "cp":
            if (!/^\d{5}$/.test(value)) {
                return "Formato del código postal incorrecto"
            }
            return ""

        case "mobile":
            if (!/^\d{9}$/.test(value)) {
                return "Teléfono móvil no válido"
            }
            return ""

        case "email":
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                return "Formato de email no válido";
            }
            return "";

        case "password":
            if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,15}$/.test(value)) {
                return "Formato de contraseña no válido";
            }
            return "";

        default:
            console.log("No se reconoce el formato");
            break;
    }
}