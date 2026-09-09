#include<iostream>
using namespace std;

class Solution{
    public:
        long long countCommas(long long n) {
            long long Commas=0;
            long long base=1000;
            if(n<1000) return 0;
            else{
                while(base<n){
                    Commas+=(n-base+1);
                    base*=1000;
                }
            }
            return Commas;
        }
};