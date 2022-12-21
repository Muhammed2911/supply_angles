
    importScripts(
      'https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyBrs_JT4LF7gYDN7OCYzCQM7igW-uFo2R8","authDomain":"munaqes-e40ae.firebaseapp.com","projectId":"munaqes-e40ae","storageBucket":"munaqes-e40ae.appspot.com","messagingSenderId":"15282782606","appId":"1:15282782606:web:f1febad63237c10f6764df","measurementId":"G-7YLH3ZKLHK"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    