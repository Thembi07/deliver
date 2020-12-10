import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  ionViewWillEnter()  {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlbWJpMDEiLCJhIjoiY2toa2d2b3hiMDZsNjJ5b3lxOXM3MTNzbCJ9.KOuPPKD5qWGTZq2xKVYpag';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [28.218370, -25.731340], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
    
  }

}
