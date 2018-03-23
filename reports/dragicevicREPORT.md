
Marjana Dragicevic

As we were moving towards the end of the project and our concept was becoming more clear, we thought that we could digitally prototype the door light feedback and get some more programming done. Testing with regular arduino LED lights first, we were making sure that we and the users understand what form of feedback its giving depending on different patterns or light strength, we decided that this was something to continue with.

Due to us being a small group of four people, we had to split up the different digital prototypes. As we found the door prototypes being very giving, my focus was making the final prototype for the concept. A peer of ours recommended for me to work with the "Johnny-five" (J5) library which translates Arduinos language to javascript so that I could easily move forward with the programming. Working with Cylon before, I must say that J5 is well documented and easy to understand compared to Cylon.

Since there was not much user testing left to do, we knew what we expected of the prototype to do. We wanted a booking button, an unbook button, and a button that will trigger a timer; showing if the rooms booking is running out soon, or that a booked time is closing up (If it's available).

The first challenge for me was to intergrate J5 into the code. My understanding of websocket was minimal, so I spent a lot of time to check example codes, my peers way of coding, and get help from my group. Since the websocket was more time consuming, I wanted to make sure that I would know how to make J5 work at all with it and went with it first. I built a fade for 6 LED lamps and made sure that I understood the way J5 works. It is very simple, there is no need to know any complicated terminology, you just need to understand javascript.

With this I could move on forward with the websocket. Analysing every bit of it, jumping between app.js, script.js and Index, I started to get a hold of what sends what and where. I also found many great examples of people using J5 with web sockets and I got that It would be most convinient for me to add my J5 code into app.js,  so that when I run it with npm start, I start both the websocket and the board, getting instant feedback from both. I could easily make it blink, but how can I do it with another user? How do I trigger the button to start or stop the board?

I went through every piece of code, removing and adding what I may need. Comparing it to Clints skeleton, I finally made it to work with that; If, this button is pressed, send a string, and if the string is X, trigger the board. It was a releaf and very giving; I have absolutely learnt how to approach a new library now, and how the web socket works. I hope to use it more in the future, to fully understand it and develop more with it.

Using new techniques may be time-consuming. But if you plan ahead, compare what your project needs to go forward with what the new technique can give you, I find it being a resource to the prototyping part and developing of the project, it can give new insights or even a new way of approaching the project in the future.
