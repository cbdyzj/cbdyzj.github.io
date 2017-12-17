// 使用STL的 bitset
#include <iostream>
#include <bitset>
int main() {
    for(int i=15; i!=0; --i) {
        std::cout<<std::bitset<sizeof(int)*8>(i)<<std::endl;
    }
    return 0;
}
