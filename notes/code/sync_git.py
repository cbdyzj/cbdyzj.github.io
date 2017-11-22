#! /usr/bin/env python3
from subprocess import run
from time import  strftime, localtime

t = strftime("%Y-%m-%d %I:%M %p",localtime())
run(["git","add","."])
run(["git","commit","-m",t])
run(["git","push"])
print("\n" + t + "：如果没有报错的话，就同步好了：）")
