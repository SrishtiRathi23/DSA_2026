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

int example2(vector<pair<int,int>> &arr){
    int n=arr.size();
    for(int i=0;i<n;i++){
        cout<<"Enter the elements of the pairs of array: ";
        cin>>arr[i].first>>arr[i].second;
    }
    for(int i=0;i<n;i++){
        cout<<"("<<arr[i].first<<","<<arr[i].second<<")";
    }
    return 0;
}
// int main(){
// int n;
    // cin>>n;
    // vector<pair<int,int>> arr1(n);
    // example2(arr1);
    // return 0;
// }

int example3(vector<pair<int,int>> &arr){

}
 
int main(){
    int n;
    cout<<"Enter the size of the array: ";
    cin>>n;
    vector<pair<int,int>> arr(n);
    for(int i=0;i<n;i++){
        cout<<"Enter the elements: ";
        cin>>arr[i].first>>arr[i].second;
    }
    for(int i=0;i<n;i++){
        cout<<"("<<arr[i].first<<","<<arr[i].second<<")"<<endl;
    }
    example3(arr);
    
}