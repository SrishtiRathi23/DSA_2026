#include <bits/stdc++.h>
using namespace std;

// int main() {
// string s1="srishti";
// string s2;
// for(int i=0;i<s1.size();i++){
//     cout<<s1[i]<<endl;}
//     getline(cin,s2);
// }

int main(){
    // int t;
    // cin>>t;
    // cin.ignore();  // to ignore the newline character after reading t
    // while(t--){
        string s1;
        cin>>s1;
        // getline(cin,s1);
        // cout<<s1<<endl;
        string str_rev;
        for(int i=s1.size()-1;i>=0;i--){
            str_rev.push_back(s1[i]);
        }
        cout<<str_rev<<endl;
    // }
}
