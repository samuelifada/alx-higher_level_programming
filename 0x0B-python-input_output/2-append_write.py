#!/usr/bin/python3
"""
A script that does it......
"""


def append_write(filename="", text=""):
    """
    A be e n be winter is coming
    """
    count = 0
    with open(filename, 'a', encoding="UTF-8") as f:
        for c in text:
            f.write(c)
            count += 1

    return (count)
