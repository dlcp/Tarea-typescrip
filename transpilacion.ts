class Atributo {
    public nombre: string;
    public apellido: string;
    public edad: number;
    public direccion: string;
    public ciudad: string;
    public telefono: string;
    public correoElectronico: string;
  
    constructor(nombre: string, apellido: string, edad: number, direccion: string, ciudad: string, telefono: string, correoElectronico: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.direccion = direccion;
      this.ciudad = ciudad;
      this.telefono = telefono;
      this.correoElectronico = correoElectronico;
    }
  }
  
  const atributo11 = new Atributo("DAYANA", "PEREZ", 18, "QUITO SUR", "ECUADOR", "0967164067", "dlc.perez@yavirac.edu.ec");
  
  console.log(atributo11.nombre); // Imprime "DAYANA"
  console.log(atributo11.edad); // Imprime "18"
