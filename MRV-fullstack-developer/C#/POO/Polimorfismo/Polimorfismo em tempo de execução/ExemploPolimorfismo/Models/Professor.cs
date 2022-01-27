namespace ExemploPolimorfismo.Models
{
    public class Professor : Pessoa
    {
        public float Salario { get; set; }

        public override void Apresentar()
        {
            System.Console.WriteLine($"Olá, meu nome é {Nome} e ganho {Salario} reais.");
        }
    }
}