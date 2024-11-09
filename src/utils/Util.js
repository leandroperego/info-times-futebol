

class Util {

    static normalizeString(str) {
       return str
       .normalize("NFD") // Normaliza a string para decompor caracteres acentuados
       .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
       .replace(/\s+/g, "-") // Substitui espaços por hífens
       .replace(/[^a-zA-Z0-9]/g, "") // Remove caracteres especiais, exceto hífens
       .toLowerCase(); // Converte tudo para minúsculas
    }
}

export default Util;