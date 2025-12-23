/*
    PersonValidator.cs
    Validador para la gestion de las personas
    Autor: Felipe Carvajal
    Fecha: 22/12/2025
    Version: 1.0.0
*/

using FluentValidation;
using Backend.Models;

namespace Backend.Validators;

public class PersonValidator : AbstractValidator<Person>
{
    public PersonValidator()
    {
        RuleFor(p => p.Name) // Validacion para el nombre
        .NotEmpty().WithMessage("The name is required") // No puede estar vacio
        .MaximumLength(50).WithMessage("The name must be less than 50 characters"); // No puede tener mas de 50 caracteres

        RuleFor(p => p.LastName) // Validacion para el apellido
        .NotEmpty().WithMessage("The last name is required") // No puede estar vacio
        .MaximumLength(50).WithMessage("The last name must be less than 50 characters"); // No puede tener mas de 50 caracteres

        RuleFor(p => p.Email)// Validacion para el email
        .NotEmpty().WithMessage("The email is required")// No puede estar vacio
        .EmailAddress().WithMessage("The email is not valid"); // Debe ser un email valido

        RuleFor(p => p.Document)// Validacion para el documento
        .NotEmpty().WithMessage("The document is required")// No puede estar vacio
        .MaximumLength(20).WithMessage("The document must be less than 20 characters");// No puede tener mas de 20 caracteres

        RuleFor(p => p.Age)// Validacion para la edad
        .NotEmpty().WithMessage("The age is required")// No puede estar vacio
        .GreaterThan(0).WithMessage("The age must be greater than 0")// Debe ser mayor a 0
        .LessThan(100).WithMessage("The age must be less than 100");// Debe ser menor a 100
    }
}