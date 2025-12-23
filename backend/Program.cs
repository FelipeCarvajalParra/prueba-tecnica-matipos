using Backend.Services;
using Backend.Repositories;
using Backend.Validators;
using FluentValidation;

var builder = WebApplication.CreateBuilder(args);

// Registrar controladores
builder.Services.AddControllers();

// Registrar FluentValidation
builder.Services.AddValidatorsFromAssemblyContaining<PersonValidator>();

// Registrar servicios
builder.Services.AddScoped<PersonValidator>();
builder.Services.AddScoped<IPersonRepository, PersonService>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

// Mapear controladores
app.MapControllers();

app.Run();
