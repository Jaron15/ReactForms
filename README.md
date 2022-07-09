# ReactForms
** NOTES **

In this project I went over the methods of receiving user input values and submissions, validating with feedback, and using custom hooks to manage these processes. I went step by step from implementing the form state management to refactoring it to be much cleaner and more D.R.Y friendly. I left detailed notes at every stage for reference. The reason for using custom hooks in this example is that there is a similar validation process for multiple fields, so instead of manually creating a state for each indiviual element, you create a custom hook called useInput in this example to perform these processes for each element that is using said hook. This also creates a kind of 'blank state' that each element then adopts as its own when called on creating an element specific state that it basically created and managed for you. The validation is relatively simple as this is specifically to display the tools used to perform these tasks. Each input lets the user know if they have entered something that is considered invalid according to the validation in place, what the issue is, it goes back to a valid state if the issues are resolved in real time, and does not allow the user to click the submit button if there is anything wrong with the form in any of the fields. This all of course is broken down in more detail in the actual code with comments (specifically in the **SimpleInput** and **useInput** files.)

# Going Step by Step
* commit: 8d2b8741719d2377d593897b152f9de3d85defcc - at this point all of the logic is in the SimpleInput file and is not using a custom hook, lots of notes breaking down what exactly is being done with the attained data.
* commit: 46673db39254f5e927da42340c93326194540ee4 - This is when I refactored the code to use a custom hook a lot of the notes are removed because the logic is seperated into different files, theres still a more a basic breakdown of validation in the useInput but they are all more geared towards how the custom hook is working to achieve the same results.

You could go before these points to see it broken down further, I did not include them because at that point in the project mostly all the notes that were made prior are still there and the code is not changed in a very big way yet. 
There are also commits after this point, these were using the same processes on another example for practice. There arent really notes but the BasicForm is another example if needed. The project in its most recent commit will be using the example with notes (useInput/SimpleInput).

# Code Samples
** useInput.js **
![image](https://user-images.githubusercontent.com/87290877/178088421-8a34a332-0ea7-424f-84a9-8247f27fa36f.png)

** SimpleInput ** 
![image](https://user-images.githubusercontent.com/87290877/178088444-943a53fc-d80c-45c1-9a23-38b8abc01b02.png)

# Installation 
You can copy this repository and install the packages with npm i to use this application with npm start and look through the notes to help clarify processes.
