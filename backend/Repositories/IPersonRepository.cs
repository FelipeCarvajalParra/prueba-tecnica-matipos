/*
    IPersonRepository.cs
    Interfaz para la gestion de las personas
    Autor: Felipe Carvajal
    Fecha: 22/12/2025
    Version: 1.0.0
*/

using Backend.Models;

namespace Backend.Repositories;

// Definicion de la interfaz IPersonRepository, donde se definen los metodos de la persona
public interface IPersonRepository
{
    IEnumerable<Person> GetAll();
    
    Person? GetById(int id);

    IEnumerable<Person> GetByName(string name);

    Person Create(Person person);

    bool Update(Person person);

    bool Delete(int id);
}