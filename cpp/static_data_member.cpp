#include<iostream>
using namespace std;

class Student{
    public:
        int normalCount=0;
        int static staticCount;
    Student(){                         //CONSTRUCTOR
        normalCount++;
        staticCount++;
    }
};

int Student::staticCount=10;

int main(){
    Student s1,s2,s3;
    cout<<"Normal count "<<s1.normalCount<<endl;
    cout<<"Normal count "<<s2.normalCount<<endl;
    cout<<"Normal count "<<s3.normalCount<<endl;
    cout<<"Static count "<<Student::staticCount<<endl;
    return 0;
}
