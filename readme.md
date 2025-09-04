1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
A.answer : getElementById শুধু একটিই element, id দেয়।
B.answer : getElementsByClassName দিয়ে একই class এর সবগুলো element একসাথে select করা যায়।
C.answer : querySelector() শুধু প্রথম element কে select করে।
D.answer : যদি একসাথে অনেকগুলো element দরকার হয়, তখন querySelectorAll() ব্যবহার করতে হয়।


2. How do you **create and insert a new element into the DOM**?
answer : JavaScript এর DOM ব্যবহার করে নতুন element তৈরি করার জন্য সাধারণত তিনটি ধাপ অনুসরণ করতে হয়:
A.answer : document.createElement() ব্যবহার করে নতুন element তৈরি করা হয়।
B.answer : নতুন element এর ভেতরে টেক্সট বা Attribute সেট করা হয়।
C.answer : Parent element নির্বাচন করে appendChild() বা অন্য method ব্যবহার করে নতুন element যোগ করা হয়।


3. What is **Event Bubbling** and how does it work?
A.answer : event নিচ থেকে শুরু হয়ে উপরের দিকে যায়।


4. What is **Event Delegation** in JavaScript? Why is it useful?
answer : Event Delegation হলো JavaScript এর একটি technique, যেখানে আমরা child elements-এ আলাদা event listener না দিয়ে তাদের parent element-এ একটিমাত্র event listener বসাই।
Event bubbling-এর কারণে child element-এ ঘটে যাওয়া event parent-এ catch করা যায়।
A.answer : Performance ভালো হয় – অনেক child element-এর জন্য আলাদা listener লাগানো লাগে না।
B.answer : Dynamic elements handle করা যায় – future-এ DOM-এ dynamically added elements-এর জন্যও কাজ করে।
C.answer : Code সহজ হয় ও memory কম লাগে – unnecessary multiple listeners লাগে না।



5. What is the difference between **preventDefault() and stopPropagation()** methods?
answer : preventDefault()
A.answer : Event-এর default action বন্ধ করে।
উদাহরণ: <a> link এ click করলে normally page change হয়, কিন্তু preventDefault() দিলে তা বন্ধ হয়।

answer : stopPropagation()
A.answer : Event parent element পর্যন্ত না যাওয়ায় ব্যবহার হয়।
উদাহরণ: Button click করলে parent div-এ event trigger হয় না।