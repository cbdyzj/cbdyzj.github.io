# C programming language

### Type

```c
void v;
char c;
short int si;
int i;
long int li;
float f;
double df;
```

### Constant

```c
int i = 1;
long li = 1L;
float f = 1.F;
double df = 1.;
```
### Old style function 

```c
int foo(); /* different from 'int foo(void);' */

int foo(param) int param;
{
    return 0;
}
```

### Static

```c
static int a;
static int foo();

int foo(){
  static int a;
}
```

### Register

```c
register int a; /* can't get address */
```

### macro

```
#include
#define
#undef

#if
#elif
#else
#endif

#if defined(FOO)
#ifdef
#ifndef
```

### Pointer and array

```c
int a[3];
int* p = a; /* they are different */
```

### Array pointer

```c
int (*a)[3];
```

### Functoin pointer

```c
int func(char, int);
int (*fp)(char, int) = func;
```

### C compiler

- cc -E -> main.i : C
- cc -S -> main.s : assemble language
- cc -c -> main.o : binary
- cc -o -> main : executable

### Make

```
target... : prerequisites ...
	command
```

