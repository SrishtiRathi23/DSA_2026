#include<bits/stdc++.h>
using namespace std;

void explainpair(){
    pair<int,int> p={1,2};
    cout<<p.first<<" "<<p.second;
    pair<int, pair<int, int>> p2={1,{2,3}};
    cout<<p2.first<<" "<<p2.second.second<<" "<<p2.second.first<<" "<<endl;
}

int examplepair1(string name, int age){
    pair<string,int> p={name,age};
    cout<<p.first<<" "<<p.second<<endl;
    return 0;
}

int main(){
    int t;
    cin>>t;
    while(t--){
    string firstname;
    cout<<"Enter first name";
    cin>>firstname;
    int age;
    cout<<"Enter your age";
    cin>>age;
    examplepair1(firstname, age);
    }
}