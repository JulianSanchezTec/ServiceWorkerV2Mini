import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'push-notification';
  message;

  constructor(
    public swUpdate: SwUpdate, 
    private messagingService: MessagingService
    ) 
    {
    if (swUpdate.isEnabled) {
      console.log('Service Worker está habilitado');
      
      swUpdate.available.subscribe(() => {
        console.log('Nueva actualización disponible');
        if(confirm('Nueva versión disponible. ¿Cargar nueva versión?')) {
          window.location.reload();
        }
      });
    }
  }

  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
  }

  checkForUpdate() {
    if (this.swUpdate.isEnabled) {
      console.log('Verificando actualizaciones...');
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Verificación completada');
      }).catch(err => {
        console.error('Error al verificar actualizaciones:', err);
      });
    }
  }
}
