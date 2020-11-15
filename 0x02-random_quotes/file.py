
with open("txt.csv", "a") as f:
    player = input("Name: ")
    passowrld = int(input("Enter passowrld: "))
    amount = int(input("Amount?: "))
    f.write("{} {} {}\n".format(player, passowrld, amount))
    print("You have created your account: ")

with open("txt.csv", "r") as f:
    player = input("Name: ")
    passowrld = int(input("Enter passowrld: "))
    readf = f.readlines()
    print(readf)
    for element in readf:
        element = element.split()
        if element[0] == player and int(element[1]) == passowrld:
            print("you have : $ {}". format(element[2]))

with open("txt.csv", "a+") as f:
    name = input("Name: ")
    passworld = int(input("Enter passowrld: "))
    readf = f.readlines()
    sender_index = 0
    receve_index = 0
    for element in readf:
        element = element.split()
        if element[0] == player and int(element[1]) == passowrld:
            name2 = input("Enter name rece: ")
            amount = int(input("Amount: "))
            sender_new = element[2] - amount
            break;
        sender_index += 1
    for element in readf:
        element = element.split()
        if name2 == element[0]:
            new_amount = element[2] + amount
            passowrld2 = ement[1]
            break;
        receve_index += 1
    del readf[sender_index]
    del readf[receve_index]
    f.write("{} {} {}".format(name, passowrld, sender_new))
    f.write("{} {} {}".format(name2, passowrld2, new_amount))
