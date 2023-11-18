function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var arr = [];
        
        // n === 0
        if (n === 0) {
            arr = [];
        }
        
        // n === 1
        else if (n === 1) {
            arr = [0];
        }
        
        // n >= 2
        else {
            // add base cases
            arr.push(0);
            arr.push(1);
            
            // adding n numbers to the array
            if (n > 2) {
            for (var i = 2; i < n; i++) {
                arr.push(arr[i-2]+arr[i-1]);
            }
            }
        }
        
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        return arr;
        
    //Do NOT change any of the code below 👇
    }
    
    