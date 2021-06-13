# Reset to default
global reset
reset = '\033[0m'

# Clearer coloured outputs
def printGreen(str):
    print("\033[1;32;40m", str, reset)

def printRed(str):
    print("\033[1;31;40m", str, reset)

def printPurple(str):
    print("\033[1;35;40m", str, reset)
