using System;
using ExemploPolimorfismo.Models;

namespace Exemplo
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno p1 = new Aluno();
            p1.Nome = "Bob";
            p1.Idade = 20;
            p1.Documento = "123456";
            p1.Nota = 10;
            p1.Apresentar();

            Professor p2 = new Professor();
            p2.Nome = "João";
            p2.Idade = 40;
            p2.Documento = "654321";
            p2.Salario = 2000;
            p2.Apresentar();
        }
    }
}