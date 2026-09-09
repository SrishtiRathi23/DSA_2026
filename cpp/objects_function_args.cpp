#include<iostream>
using namespace std;

class Student{
    private:
    string name;
    int roll_number;
    public:
    string n;
    int r;
    void setData(string n, int r){
        name=n;
        roll_number=r;
    }
    void displayData(){
        cout<<"Name: "<<name<<endl;
        cout<<"Roll Number: "<<roll_number<<endl;
    }
};

void manipulate(Student s, string n, int r){
    s.setData(n,r);
    s.displayData();
}

int main(){
    Student s;
    cout<<"Before calling: "<<endl;
    s.setData("John", 30);
    s.displayData();
    cout<<"After calling: "<<endl;
    manipulate(s,"Doe",20);
    s.displayData();
}