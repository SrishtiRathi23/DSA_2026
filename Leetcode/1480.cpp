#include<bits/stdc++.h>
using namespace std;

// class Solution {
// public:
//     vector<int> runningSum(vector<int>& nums) {
//         int n=nums.size();
//         int sum=0;
//         for(int i=0;i<n;i++){
//             sum+=nums[i];
//             cout<<sum;
//         }
//     }
// };

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> ans;
        for(int i=1;i<nums.size();i++){
            nums[i]+=nums[i-1];
        }
        return nums;
    }
};

int main(){
    Solution obj;
    int n;
    cin>>n;
    vector<int> arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    vector<int> ans=obj.runningSum(arr);
    for(int i = 0; i < ans.size(); i++){
    cout << ans[i] << " ";
    }
    return 0;
}