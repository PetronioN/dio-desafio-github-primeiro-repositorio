import socket

ip = input("Digite o host ou IP a ser verificado: ")

ports = []
count = 0
verificacoes = int(input("Digite a quantidade de portas que você deseja verificar: "))

while count < verificacoes:
    ports.append(int(input("Digite a porta a ser verificada: ")))
    count += 1

for port in ports:
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Diminui o tempo que o programa bate na porta
    client.settimeout(0.05)

    # Recebe um código da transação TCP
    # Cada número que ele receber tem um significado. Link: https://gist.github.com/gabrielfalcao/4216897
    code = client.connect_ex((ip, port))

    if code == 0:
        print(str(port), " -> Porta Aberta.")
    else:
        print(str(port), " -> Porta Fechada.")

print("Scan Finalizado.")