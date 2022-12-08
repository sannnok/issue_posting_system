import { Component, Inject } from '@angular/core'
import { MAT_LEGACY_SNACK_BAR_DATA as MAT_SNACK_BAR_DATA, MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar'


@Component({
  selector: 'app-notification',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss'],
})
export class NotificationBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { text: string }, public snackBar: MatSnackBar) {
  }
}
