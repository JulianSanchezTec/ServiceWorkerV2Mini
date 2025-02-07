importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyD8yrY3nalpLF4alv1uxKmhjTRf3rW6wZc',
    authDomain: 'dev-teclogi-fe69f.firebaseapp.com',
    databaseURL: 'https://dev-teclogi-fe69f-default-rtdb.firebaseio.com',
    projectId: 'dev-teclogi-fe69f',
    storageBucket: 'dev-teclogi-fe69f.appspot.com',
    messagingSenderId: '751127021270',
    appId: '1:751127021270:web:1477a210e9169b058deb77',
    measurementId: 'G-XKHX0D3STK',
    vapidKey: 'AwOLRT_Y9SL7qTVcXaDWSrNPWNe6aDsMOySNuzy3kuY'
  });
  const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje recibido en segundo plano:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
