#include <bits/stdc++.h>
using namespace std;

int main(){
    cout<<INT_MAX<<endl;    //32 bits -> 1 bit for sign, 31 bits for value, so max value = 2^31 - 1 = 2147483647
    int x = INT_MAX;
    x++;     // as we add 1 to the max value, it will overflow and become the min value = -2^31 = -2147483648
    cout << x<<endl;
    cout<<INT_MIN<<endl;  //32 bits -> 1 bit for sign, 31 bits for value, so min value = -2^31 = -2147483648
    int a=1000000;
    int b=1000000;
    int long long c=a*b;   // as we multiply 2 large numbers, it will overflow and become a negative number
    cout << c<<endl;
    c=a*1LL*b;  // to avoid overflow, we can use long long int (64 bits) to store the result of multiplication
    cout<<c<<endl;
}