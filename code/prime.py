#/bin/usr/env python
from math import sqrt

def prime(n): print([ p for p in range(2, n) if 0 not in [ p % d for d in range(2,int(sqrt(p))+1)] ])

prime(1000)
