import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
  @Input() availableQuantity: number = 0;
  @Output() quantityUpdated: EventEmitter<number> = new EventEmitter<number>();
  selectedQuantity: number = 1;

  incrementQuantity(): void {
    if (this.selectedQuantity < this.availableQuantity) {
      this.selectedQuantity++;
      this.quantityUpdated.emit(this.selectedQuantity);
    }
  }

  decrementQuantity(): void {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
      this.quantityUpdated.emit(this.selectedQuantity);
    }
  }
}
