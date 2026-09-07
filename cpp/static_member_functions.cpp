#include<iostream>
using namespace std;

class Item{
    private:
    static int value;
    public:
    static int fun();
};

int Item::fun(){
    return value;
}

int Item::value{20};

int main(){
    cout<<"Static function value is: "<<Item::fun()<<endl;
}