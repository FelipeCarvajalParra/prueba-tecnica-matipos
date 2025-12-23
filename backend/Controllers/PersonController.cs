/*
    PersonController.cs
    Controlador para la gestion de las personas
    Autor: Felipe Carvajal
    Fecha: 22/12/2025
    Version: 1.0.0
*/


using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Services;
using Backend.Repositories;
using FluentValidation;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PersonController : ControllerBase
{
    private readonly IPersonRepository _personService;

    public PersonController(IPersonRepository personService)
    {
        _personService = personService;
    }

    // GET: api/person
    [HttpGet]
    public ActionResult<IEnumerable<Person>> GetAll()
    {
        try
        {
            var persons = _personService.GetAll();
            return Ok(persons);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error retrieving persons", error = ex.Message });
        }
    }

    // GET: api/person/5
    [HttpGet("{id}")]
    public ActionResult<Person> GetById(int id)
    {
        try
        {
            var person = _personService.GetById(id);
            if (person == null)
            {
                return NotFound(new { message = $"Person with id {id} was not found" });
            }
            return Ok(person);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error retrieving person", error = ex.Message });
        }
    }

    // GET: api/person/search?name=nombre
    [HttpGet("search")]
    public ActionResult<IEnumerable<Person>> GetByName([FromQuery] string name)
    {
        try
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new { message = "The 'name' parameter is required" });
            }

            var persons = _personService.GetByName(name);
            if (!persons.Any())
            {
                return NotFound(new { message = $"No persons found with name '{name}'" });
            }
            return Ok(persons);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error searching persons", error = ex.Message });
        }
    }

    // POST: api/person
    [HttpPost]
    public ActionResult<Person> Create([FromBody] Person person)
    {
        try
        {
            if (person == null)
            {
                return BadRequest(new { message = "Person data is required" });
            }

            var createdPerson = _personService.Create(person);
            return CreatedAtAction(nameof(GetById), new { id = createdPerson.Id }, createdPerson);
        }
        catch (ValidationException ex)
        {
            var errors = ex.Errors.Select(e => new { field = e.PropertyName, message = e.ErrorMessage });
            return BadRequest(new { message = "Validation error", errors });
        }
        catch (InvalidOperationException ex)
        {
            return Conflict(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error creating person", error = ex.Message });
        }
    }

    // PUT: api/person
    [HttpPut]
    public ActionResult Update([FromBody] Person person)
    {
        try
        {
            if (person == null)
            {
                return BadRequest(new { message = "Person data is required" });
            }

            var updated = _personService.Update(person);
            if (!updated)
            {
                return NotFound(new { message = $"Person with id {person.Id} was not found" });
            }

            return NoContent();
        }
        catch (ValidationException ex)
        {
            var errors = ex.Errors.Select(e => new { field = e.PropertyName, message = e.ErrorMessage });
            return BadRequest(new { message = "Validation error", errors });
        }
        catch (InvalidOperationException ex)
        {
            return Conflict(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error updating person", error = ex.Message });
        }
    }

    // DELETE: api/person/5
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        try
        {
            var deleted = _personService.Delete(id);
            if (!deleted)
            {
                return NotFound(new { message = $"Person with id {id} was not found" });
            }

            return NoContent();
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error deleting person", error = ex.Message });
        }
    }
}

