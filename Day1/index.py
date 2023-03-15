# Get the file handler
file = open('Day1/input.txt', 'r')

# grabs the lines
lines = file.readlines()

# Closes the file
file.close()

newArray = [[]]

for line in lines:
    if line == '\n':
        newArray.append([])
    else:
        newArray[len(newArray) - 1].append(int(line))

totals = []

for i in newArray:
    totals.append(sum(i))

totals.sort(reverse=True)
print(totals[0] + totals[1] + totals[2])
