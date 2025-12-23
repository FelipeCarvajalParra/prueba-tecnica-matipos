/*
    PersonService.cs
    Servicio para la gestion de las personas
    Autor: Felipe Carvajal
    Fecha: 22/12/2025
    Version: 1.0.0
*/


using Backend.Models;
using Backend.Repositories;
using Backend.Validators;
using FluentValidation;

namespace Backend.Services;

// Definicion de la clase PersonService, donde se definen los metodos de la persona
public class PersonService : IPersonRepository
{
    // Definicion de la lista de personas
    private static List<Person> _persons = new();
    // Definicion del id siguiente
    private static int _nextId = 1;
    // Validator para validar las personas
    private readonly PersonValidator _validator;

    // Constructor que recibe el validator
    public PersonService(PersonValidator validator)
    {
        _validator = validator;
    }

    // Metodo para obtener todas las personas
    public IEnumerable<Person> GetAll() => _persons;

    // Metodo para obtener una persona por su id
    public Person? GetById(int id) => _persons.FirstOrDefault(p => p.Id == id);

    // Metodo para obtener una persona por su nombre
    public IEnumerable<Person> GetByName(string name) => _persons.Where(p => p.Name.Contains(name));

    // Metodo para crear una persona
    public Person Create(Person person)
    {
        // Validar la persona antes de crearla
        var validationResult = _validator.Validate(person);
        if (!validationResult.IsValid)
        {
            throw new ValidationException(validationResult.Errors);
        }

        // Validar que el email no esté duplicado
        if (_persons.Any(p => p.Email.Equals(person.Email, StringComparison.OrdinalIgnoreCase)))
        {
            throw new InvalidOperationException("The email is already registered");
        }

        // Validar que el documento no esté duplicado
        if (_persons.Any(p => p.Document.Equals(person.Document, StringComparison.OrdinalIgnoreCase)))
        {
            throw new InvalidOperationException("The document is already registered");
        }

        person.Id = _nextId++;
        _persons.Add(person);
        return person;
    }

    // Metodo para actualizar una persona
    public bool Update(Person person)
    {
        // Validar la persona antes de actualizarla
        var validationResult = _validator.Validate(person);
        if (!validationResult.IsValid)
        {
            throw new ValidationException(validationResult.Errors);
        }

        var index = _persons.FindIndex(p => p.Id == person.Id);
        if (index == -1) return false;

        // Validar que el email no esté duplicado.
        if (_persons.Any(p => p.Id != person.Id && p.Email.Equals(person.Email, StringComparison.OrdinalIgnoreCase)))
        {
            throw new InvalidOperationException("The email is already registered by another person");
        }

        // Validar que el documento no esté duplicado.
        if (_persons.Any(p => p.Id != person.Id && p.Document.Equals(person.Document, StringComparison.OrdinalIgnoreCase)))
        {
            throw new InvalidOperationException("The document is already registered by another person");
        }

        _persons[index] = person;
        return true;
    }

    // Metodo para eliminar una persona
    public bool Delete(int id)
    {
        var index = _persons.FindIndex(p => p.Id == id);
        if (index == -1) return false;
        _persons.RemoveAt(index);
        return true;
    }
}