using System;
using ExemploPOO.Models;

namespace ExemploPOO
{
    class Program
    {
        static void Main(string[] args)
        {
            // Valores válidos
            Retangulo r = new Retangulo();
            r.DefinirMedidas(30, 50);
            r.ObterArea();

            System.Console.WriteLine($"Área: {r.ObterArea()}");

            // Valores inválidos
            Retangulo r2 = new Retangulo();
            r.DefinirMedidas(0, 0);
            r.ObterArea();

            System.Console.WriteLine($"Área: {r2.ObterArea()}");
        }
    }
}