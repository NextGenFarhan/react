## Context API
Context API React ka ek feature hai jo hume data ko globally manage karne me help karta hai.  

Normally React me data parent component se child component tak props ke through bheja jata hai.  
Jab component tree deep ho jati hai, to props ko bar-bar pass karna padta hai, jise **props drilling** kaha jata hai.
Context API is problem ko solve karta hai.

---
### Why Context API?
- Props drilling se bachne ke liye
- Global data ko easily share karne ke liye
- Clean aur readable code maintain karne ke liye

---
### How Context API Works (Conceptual Flow)
1. Pehle ek **Context** create kiya jata hai  
2. Us context ko ek **Provider** ke through poori application ko diya jata hai  
3. Provider ke andar jo data hota hai, wo sabhi child components ko accessible hota hai  
4. Kisi bhi component me context ka data directly use kiya ja sakta hai bina props pass kiye

---
### Data Flow Visualization
Provider  
↓  
App  
↓  
Header / Home / Footer / Any Component  

Sab components directly same data ko access kar sakte hain.

---
### Real Life Analogy

Context API ko ek **water tank** samajh lo:
- Water Tank = Context  
- Pipes = Components  
- Paani = Data  
Har room (component) ko paani directly mil jata hai, bina alag-alag tank lagaye.

---
## When to Use Context API
- Theme (Light / Dark mode)
- User authentication data
- Language selection
- Small to medium global state

---
## When NOT to Use Context API
- Bohot zyada frequently update hone wala data
- Large scale complex state management

---
### One Line Summary
Context API ek aisa tarika hai jisse React application me data ko globally store aur access kiya ja sakta hai bina props drilling ke.
