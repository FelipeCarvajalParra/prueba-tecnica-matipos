/*
    Person.cs
    Modelo para la gestion de las personas
    Autor: Felipe Carvajal
    Fecha: 22/12/2025
    Version: 1.0.0
*/

namespace Backend.Models;

// Definicion de la clase Person, donde se definen los atributos de la persona
public class Person
{
    public int Id { get; set; } // Id de la persona
    public string Name { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty; 
    public string Email { get; set; } = string.Empty; 
    public string Document { get; set; } = string.Empty; 
    public int Age { get; set; }
}