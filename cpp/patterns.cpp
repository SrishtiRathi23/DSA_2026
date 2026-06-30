#include<bits/stdc++.h>
using namespace std;

void pattern1(int n){
    int start=1;
    for(int i=0;i<n;i++){
        if(i%2==0) start=1;
        else start=0;
        for(int j=0;j<=i;j++){
            cout<<start;
            start=1-start;
        }
        cout<<endl;
    }
}

void pattern2(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        for(int j=2*n-2*i;j>=0;j--){
            cout<<" ";
        }
        for(int j=i;j>0;j--){
            cout<<j;
        }
        cout<<endl;
    }
}

void pattern3(int n){
    for(int i=1;i<=n;i++){
        for(char ch='A'; ch<='A'+n-i;ch++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }
}

void pattern4(int n){
    for(int i=0;i<n;i++){
        char ch='A'+i;
        for(int j=0;j<=i;j++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }
}

void pattern5(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        char ch='A';
        int breakpoint=(2*i+1)/2;
        for(int j=1;j<=2*i+1;j++){
            cout<<ch;
            if(j<=breakpoint)  ch++;
            else ch--;   
        }
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}

void pattern6(int n){
    for(int i=0;i<n;i++){
            for(char ch='E'-i;ch<='E';ch++){
                cout<<ch;
            }
        cout<<endl;
    }
}

void pattern7(int n){
    //stars
    int space=0;
    for(int i=0;i<n;i++){
    for(int j=1;j<=n-i;j++){
        cout<<"*";
    }
    //spaces
    for(int j=0;j<space;j++){
        cout<<" ";
    }
    //stars
    for(int j=1;j<=n-i;j++){
        cout<<"*";
    }
    space+=2;
    cout<<endl;
    }
    space=8;
    for(int i=1;i<=n;i++){
    for(int j=1;j<=i;j++){
        cout<<"*";
    }
    //spaces
    for(int j=0;j<space;j++){
        cout<<" ";
    }
    //stars
    for(int j=1;j<=i;j++){
        cout<<"*";
    }
    space-=2;
    cout<<endl;
    }
}

void pattern8(int n){
    int space = 2*n - 2;

    for(int i=1; i<=2*n-1; i++){

        int stars = i;
        if(i > n)
            stars = 2*n - i;

        for(int j=1; j<=stars; j++)
            cout << "*";

        for(int j=1; j<=space; j++)
            cout << " ";

        for(int j=1; j<=stars; j++)
            cout << "*";

        cout << endl;

        if(i < n)
            space -= 2;
        else
            space += 2;
    }
}

void pattern9(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==0||j==0||i==n-1||j==n-1) {
                cout<<"*";
            }
            else cout<<" ";
            }
        cout<<endl;
    }
}

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        pattern9(n);
    }
    return 0;
}