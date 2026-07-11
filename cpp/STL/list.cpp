#include <bits/stdc++.h>
using namespace std;

int main(){
    list<int> l;
    l.push_back(1);
    l.push_back(2);
    l.push_back(3);
    l.push_front(5);
    l.remove(2);
    for(int x: l){
        cout<<x<<" ";
        x++;
    }

}