#include<bits/stdc++.h>
using namespace std;

// bool isPrime(int n){
//   if(n<=1) return false;
//   if(n==2) return true;
//   if(n%2==0) return false;
//   for(int i=3;i*i<=n;i+=2){
//     if(n%i==0) return false;
//   }
//   return true;
// }

// int main(){
//   int num;
//   cin>>num;
//   for(int i=1;i<=num;i++){
//     if(isPrime(i)){
//       cout<<i<<" ";
//     }
//   }
//   return 0;
// }

//Sieve of Eratosthenes
const int N=10000;
vector<bool> isPrime(N,true);

int main(){
  isPrime[0]=isPrime[1]=false;
  for(int i=2;i<=N;i++){
    if(isPrime[i]==true){
      for(int j=2*i;j<=N;j+=i){
        isPrime[j]=false;
      }
    }
  }

  int q;
  cout<<"Enter the number of test cases";
  cin>>q;
  while(q--){
    int number;
    cout<<"Enter the number to check if it is prime or not: ";
    cin>>number;
    if(isPrime[number]) cout<<"Prime"<<endl;
    else cout<<"Not Prime"<<endl;

  }
  return 0;
}


// class Solution {
// public:
//     int countPrimes(int n) {
//         vector<bool> isPrime(n,true){
//             int count=0;
//             if(n==1&&n==2) return count=0;
//             for(int i=2;i<n;i++){
//                 if(isPrime[i]==true)
//                 return count+=1;
//                 {
//                     for(int(j*2;j<n;j+=i){
//                         isPrime==false;
//                     }
//                 }
//             }
//         }
//     }
// };