#include <stdio.h>
#include <regex.h>
#include <string.h>
#define TRUE 1  
#define FALSE 0 
typedef int bool;

bool match_gradle(const char* dep);
const char* cut_short(char* dep);

int main(int argc, char* argv[]) {
    int i = 1;
    if(argc < 2) {
        printf("invalid input\n");
        return 0;
    }
    for (; i < argc ; ++ i) {
        if (match_gradle(argv[i])) {
            printf("%s\n",cut_short(argv[i]));
        } else {
            printf("invalid input\n");
        }
    }
    return 0;
}



bool match_gradle(const char* dep) {
    regex_t regex;
    char* pattern = "^compile group: '[a-z\\.]+', name: '[a-z-]+', version: '[0-9a-z\\.]+'$";
    int regexInit = regcomp( &regex, pattern, REG_EXTENDED );
    if (!regexInit) {
        int reti = regexec( &regex, dep, 0, NULL, 0 );
        if (!reti)
        {
            regfree( &regex );
            return TRUE;
        }
    }
    regfree( &regex );
    return FALSE;
}

const char* cut_short(char* dep) {
    bool flag = FALSE;
    int len = strlen(dep);
    int i,j;
    for(i = 0, j = 0;i < len;++i) {
        if(!flag){
            if(dep[i] == '\'') {
                if((j > 0 && dep[j-1] != ':') || j == 0){
                    dep[j] = dep[i];
                    j++;
                }
                flag = TRUE;
            }
        } else {
            if(dep[i] == '\'') {
                dep[j] = ':';
                flag = FALSE;
            } else {
                dep[j] = dep[i];
            }
            j++;
        }
    }
    dep[j-1] = '\'';
    dep[j] = '\0';
    return dep;
}
