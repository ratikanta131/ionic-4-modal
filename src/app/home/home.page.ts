import { Component } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {

  }

  showModal() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
