### 文件描述符

- 小的非负整数
- stdin、stdout、stderr

### I/O

- 不带缓冲的i/o

  open、read、write、lseek、close

- 标准i/o，带缓冲
  fgets、printf

### 进程

- 进程id，非负整数
- getpid、fork、exec、wait、waitpid

### fork

- 调用一次，父进程返回子进程pid，子进程返回0

### 用户id

- root的id为0
- getuid、getgid

### 信号

- 忽略、系统默认处理或作为事件处理
- kill、signal

### 系统调用

- 库函数调用、直接调用