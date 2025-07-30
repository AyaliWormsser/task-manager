הוראות התקנה והרצה:[
    # התקנת כל התלויות
npm install

# הרצת גרסת הפיתוח
npm start

]
המערכת תיפתח אוטומטית בדפדפן בכתובת:
http://localhost:3000

הרצה בסביבת Production:[
    # בניית גרסה לפרודקשן
npm run build

]
 לששימוש ב־Docker:[
    docker build -t task-manager .
docker run -p 3000:3000 task-manager

 ]

  תיאור הארכיטקטורה
שפת פיתוח: JavaScript

Framework צד לקוח: React (מבוסס על Create React App)

ניהול מצב: React Hooks (useState, useEffect)

אחסון/שרת: אין צד שרת – אפליקציה מבוססת Frontend בלבד

העלאה והפצה: Firebase Hosting

CI/CD: GitHub Actions – תהליך deploy אוטומטי בכל עדכון לקוד

מבנה הפרויקט:[
    src/
│
├── components/      # רכיבי ממשק
├── App.js           # קובץ ראשי
├── index.js         # נקודת כניסה לאפליקציה

]

