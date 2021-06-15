# Class for ANSI codes
class colours:
    RESET = '\033[0m'
    GREEN = "\033[1;32;40m"
    RED = "\033[1;31;40m"
    PURPLE = "\033[1;35;40m"

# Clearer coloured outputs
def printColour(colour, str):
    print(colour, str, colours.RESET)

# Specific colour functions
def printGreen(str):
    printColour(colours.GREEN, str)

def printRed(str):
    printColour(colours.RED, str)

def printPurple(str):
    printColour(colours.PURPLE, str)
