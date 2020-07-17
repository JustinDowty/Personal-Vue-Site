#!/usr/bin/python
import sys, os

# Takes a path argument (first) and renames all files to numbers (second argument) and up

def main(argv):
    inc = 1
    path = sys.argv[1]
    i = 1
    for filename in os.listdir(path):
        file_extension = os.path.splitext(path + filename)[1]
        os.rename(path + filename, path + str(i) + file_extension)
        i += inc

if __name__ == '__main__':
    main(sys.argv[1:])