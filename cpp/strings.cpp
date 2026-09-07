#include<iostream>
#include<string>

using namespace std;

int main(){
    string str1, str2;
    cout<<"Enter first string: ";
    cin>>str1;
    for(int i=str1.size()-1;i>=0;i--){
        str2.push_back(str1[i]);
    }
    if(str1==str2){
        cout<<"The strings are palindromes."<<endl;
    }
    else{
        cout<<"The strings are not palindromes."<<endl;
    }

    //to take input of very large numbers we use string data type
    string num;
    cin>>num;
    int last_digit=num[num.size()-1]-'0';
    cout<<last_digit<<endl;
    return 0;
}

