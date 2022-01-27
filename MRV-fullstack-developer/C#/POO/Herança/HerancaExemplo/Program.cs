using System;
using HerancaExemplo.Models;

namespace HerancaExemplo
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno p1 = new Aluno();

            p1.Nome = "Bob";
            p1.Idade = 20;

            p1.Apresentar();

            Professor p2 = new Professor();

            p2.Nome = "João";
            p2.Idade = 25;

            p2.Apresentar();
        }
    }
}