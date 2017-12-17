
/**
 * 统计int整数中有多少1的两种方法
 * & 0x01 by bit and then do 1 bit shift
 */
int NumCount1(int a) {
    int num = 0;
    while(a) {
        num += a & 0x01;
        a >>= 1;
    }
    return num;
}

// minus 1 then &
int NumCount2(int a) {
    int num = 0;
    while(a) {
        a &= (a - 1);
        num++;
    }
    return num;
}
