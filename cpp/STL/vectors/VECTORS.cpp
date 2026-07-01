#include <bits/stdc++.h>
using namespace std;

// int main(){
//     vector<int> v;
//     v.push_back(1);
//     v.push_back(2);
//     v.push_back(3);
//     //INDEX BASED LOOP
//     for(int i=0;i<v.size();i++){
//         cout<<v[i]<<" ";
//     }
//     //RANGE BASED LOOP   
//     for( int a:v){     //CREATES A COPY OF THE VECTOR
//         cout<<a<<" ";   // DOES NOT CHANGE THE ACTUAL VECTOR
//     }
//     for(auto a:v){     //CREATES A COPY OF THE VECTOR
//         cout<<a<<" ";   // DOES NOT CHANGE THE ACTUAL VECTOR
//     }

//     // BOTH INDEX BASED AND RANGE BASED TIME COMPLEXITY IS O(1)

//     for(int &a:v){       // USING & CHANGES THE ACTUAL VECTOR
//         cout<<a*2<<" ";  //{2,4,6}  INITIAL WAS {1,2,3}
//     }
//     for(const &a:v){    //CONST IS USED TO PREVENT CHANGES TO THE VECTOR
//         cout<<a<<" ";  //OR WHEN VECTOR IS VERY LARGE AND WE DONT WANT TO CREATE A COPY OF IT
//     }
//     return 0;
// }


///-------CONSTRUCTOR INITIALIZATION-----------------------
// int main(){
//     vector<int> v;
//     while(true){
//         int x;
//         cout<<"Enter the element to add in vector";
//         cin>>x;
//         if(x==-1) break;
//         v.push_back(x);
//     }
//     cout<<"{";
//     for(int i=0;i<v.size();i++){
//         cout<<v[i]<<",";}
//     cout<<"}";  
//     cout<<endl;
//         vector<vector<int>> grid(3, vector<int>(3, 1));
//                 grid[0][0] = 10;
//         grid[1][1] = 20;
//         grid[2][2] = 30;
//         for(int i=0;i<grid.size();i++){
//             for(int j=0;j<grid[i].size();j++){
//                 cout<<grid[i][j]<<" ";
//             }
//             cout<<endl;
//         } 
//         return 0;
// }



//---------ACCESSING ELEMENTS---------------
// int main(){
//     vector<int> v1 = {10, 20, 30, 40, 50, 60};
//     v1[0]=100;
//     cout<<v1[0]<<" ";
//     cout<<v1.front()<<" ";
//     cout<<v1.back()<<" ";
//     cout<<*(v1.end()-1)<<" ";
//     cout<<endl;
//     // Method 1: Index-based
//     for(int i = 0; i < v1.size(); i++){
//     cout << v1[i] << " ";
// }
// cout<<endl;

// // Method 2: Range-based (read-only style)
// for(int x : v1){
//     cout << x << " ";
// }
// cout<<endl;

// // Method 3: Range-based with reference (can modify)
// for(int &x : v1){
//     x *= 2;   // Doubles every element
//     cout<<x<<" ";
// }       
// cout<<endl;
// // auto it=v1.begin();
// // cout<<&(*it);

// vector<int> v = {10,20,30};

//     auto it = v.begin();

//     cout << "Value = " << *it << endl;

//     cout << "Address (&(*it)) = " << &(*it) << endl;

//     cout << "Address (&v[0]) = " << &v[0] << endl;

//     cout << "Address (data()) = " << v.data() << endl;


//     //Pointer ek variable hota hai jo kisi aur variable ka address store karta hai.
//     int *ptr = &(*it);
//     cout << "*ptr = &(*it) = "<< ptr<<endl;

//     cout<<v.capacity()<<endl;

//     sort(v.begin(),v.end());
//     for(int x : v){
//         cout<<x<<" ";
//     }
//     cout<<endl;


// }


//-------SORTTING A VECTOR-------------------------
// int main(){
//     vector<int> v={1,5,3,6,7,3,8,2};
//     sort(v.begin(),v.end());
//     for(int x : v){
//         cout<<x<<" ";
//     }
//     cout<<endl;
//     //USING A FUNCTION (STL OBJECT FUNCTION)
//     sort(v.begin(),v.end(),greater<int>());
//     //using a comaparator function 
//     // bool comp(int a,int b){
//     // return a>b;     //sorts in decreasing order
//     // }
//     // sort(v.begin(), v.end(), comp);
//     //using a lamba function
//     sort(v.begin(),v.end(),[](int a, int b){return a>b;});
//     vector <int> v2={1,5,3,6,7,3,8,2};
//     stable_sort(v2.begin(), v2.end(), greater<int>());  // O(n log n), preserves stability
//     for(int x: v2){
//         cout<<x<<" ";
//     }
//     return 0;
// }

// int main(){
//     vector<pair<int,int>> v;
//     while(true){
//         int x,y;
//         cout<<"Enter the pair to add in vector: ";
//         cin>>x>>y;
        
//         if(x==-1 && y==-1) break;

//         v.push_back({x,y});
//     }

//     stable_sort(v.begin(),v.end(),[](pair<int,int> a,pair <int,int> b){
//         return a.second>b.second;
//     });

//     for(int i=0;i<v.size();i++){
//         cout<<v[i].first<<" "<<v[i].second<<endl;
//     }
//     return 0;
// }

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