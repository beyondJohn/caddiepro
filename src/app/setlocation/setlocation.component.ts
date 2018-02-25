import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setlocation',
  templateUrl: './setlocation.component.html',
  styleUrls: ['./setlocation.component.css']
})
export class SetlocationComponent implements OnInit {
  getPosition(router: Router) {
    navigator.geolocation.getCurrentPosition(function (position) {
      localStorage.setItem('GolfLat', position.coords.latitude.toString());
      localStorage.setItem('GolfLong', position.coords.longitude.toString());
      router.navigate(['/home']);
    },
      this.onError,
      { enableHighAccuracy: true }
    );
  }
  constructor(private _router: Router) {
    this.getPosition(this._router);
  }
  onError(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
  }
  ngOnInit() {
  }

}
