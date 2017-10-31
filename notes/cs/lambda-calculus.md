# Lambda Calculus

### BNF

```
<expr> ::= <identifier-list>
<expr> ::= lambda <identifier-list>. <expr>
<expr> ::= (<expr> <expr>)
```

### Axiom

- Alpha

```
lambda x y. x + y <=> lambda a b. a + b
```

- Beta

```
(lambda x y. x + y) 2 3 => 2 + 3
```